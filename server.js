const http = require('http');
const fs = require('fs');
const path = require('path');
//const mdns = require('mdns');


const hostname = 'ebusch'; // Your desired hostname
const port = 8081; // Your web server's port




// Create the server
const server = http.createServer((req, res) => {
/*mdns.listen(port, {
        name: hostname,
        type: '_http',
        subtype: '_tcp',
        txt: {
            path: '/'
        }
    }, (err, service) => {
        if (err) {
            console.error('Error advertising mDNS service:', err);
        } else {
            console.log('mDNS service advertised:', service);
        }
    });*/
  // Serve the HTML file
  const filePath = path.join(__dirname, 'index.html');
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});



// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
