// server/index.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const dbPath = path.resolve(__dirname, 'database.db')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Secret key for JWT
const SECRET_KEY = 'secret_key';

// Create a new database if it doesn't exist
let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

// Create the Users table
db.run('CREATE TABLE IF NOT EXISTS Users(id INTEGER PRIMARY KEY, username TEXT, password TEXT, photo TEXT, name TEXT)', (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('Users table created');
});

// Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }

    // If token is valid, save to request for use in other routes
    req.user = decoded;
    next();
  });
}

// User registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run('INSERT INTO Users(username, password) VALUES(?, ?)', [username, hashedPassword], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.json({ message: 'Registration successful' });  // Removed token generation
  });
});

// User login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM Users WHERE username = ?', [username], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row || !bcrypt.compareSync(password, row.password)) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: row.id, username: row.username }, SECRET_KEY);

    return res.json({ token, username });
  });
});

// Fetch user profile
app.get('/profile', verifyToken, (req, res) => {
  const { id } = req.user;

  db.get('SELECT * FROM Users WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = {
      id: row.id,
      username: row.username,
      name: row.name,
      photo: row.photo
    };

    return res.json(user);
  });
});

// User profile update endpoint
app.put('/profile', verifyToken, (req, res) => {
  const { name, photo, password } = req.body;
  const { id } = req.user;

  let query = 'UPDATE Users SET ';
  const params = [];

  if (name) {
    query += 'name = ?, ';
    params.push(name);
  }

  if (photo) {
    query += 'photo = ?, ';
    params.push(photo);
  }

  if (password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    query += 'password = ?, ';
    params.push(hashedPassword);
  }

  // Remove the last comma and space
  query = query.slice(0, -2);

  query += ' WHERE id = ?';
  params.push(id);

  db.run(query, params, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.json({ message: 'Profile updated' });
  });
});

// Video streaming endpoint
app.get('/videos', verifyToken, (req, res) => {
  const videos = [
    {
      id: 1,
      title: 'Dog Video',
      url: 'https://cdn.glitch.global/b75854dd-06da-4ceb-bf5c-7f2763751b9d/dog.mp4'
    },
    {
      id: 2,
      title: 'Cat Video',
      url: 'https://cdn.glitch.me/b75854dd-06da-4ceb-bf5c-7f2763751b9d/cat.mp4'
    }
  ];

  return res.json(videos);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
