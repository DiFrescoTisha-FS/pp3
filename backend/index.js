const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');
const querystring = require('querystring');
// console.log(process.env.CLIENT_ID);
const app = express();

app.use(cors());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
  const stateKey = 'spotify_auth_state';

  app.get('/login', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
  
    const scope = [
      'user-read-private',
      'user-read-email',
      'user-top-read',
    ].join(' ');
  
    const queryParams = querystring.stringify({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI,
      state: state,
      scope: scope,
    });
  
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
  });

app.get('/login', (req, res) => {
    const queryParames = querystring.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
})

res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
})

app.get('/callback', (req, res) => {
    const code = req.query.code || null;
  
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
    })
    .then(response => {
        if (response.status === 200) {
            const { access_token, refresh_token, expires_in } = response.data;
    
            const queryParams = querystring.stringify({
              access_token,
              refresh_token,
              expires_in,
            });
    
            res.redirect(`http://localhost:3000/?${queryParams}`);
    
          } else {
            res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`);
          }
      })
      .catch(error => {
        res.send(error);
      });

      app.get('/refresh_token', (req, res) => {
        const { refresh_token } = req.query;
      
        axios({
          method: 'post',
          url: 'https://accounts.spotify.com/api/token',
          data: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: refresh_token
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
          },
        })
          .then(response => {
            res.send(response.data);
          })
          .catch(error => {
            res.send(error);
          });
          
      });
  });

const PORT = process.env.PORT || 3001;

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, {})
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Database Connection Established'));

app.use(express.json());
// app.use(express.urlencoded({ extended: true  }));

app.use(express.static(path.join(__dirname, '../reactjs/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../reactjs/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})