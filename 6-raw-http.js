const https = require('https');

const url = `https://api.darksky.net/forecast/de24b8c34f5179e5402dd23859f639dd/77,-123`;

const request = https.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
  });
});

// code to run if there's an error like network error
request.on('error', (error) => {
  console.log(error);
});

request.end();
