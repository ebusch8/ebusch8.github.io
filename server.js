const http = require('http');
const fs = require('fs');
const path = require('path'); // For handling file paths
const mysql = require('mysql2/promise'); // This is the databse

const PORT = 8080; // Port number to serve on

const server = http.createServer((req, res) => {
    // Define the path to your HTML file
    const filePath = path.join(__dirname, 'index.html'); 

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    

    async function connectAndQuery() {
        try {
            // Create a connection pool or a single connection
            const connection = await mysql.createConnection({
                host: 'localhost', // Your MySQL host
                user: 'your_username', // Your MySQL username
                password: 'your_password', // Your MySQL password
                database: 'your_database' // The database you want to connect to
            });

            console.log('Connected to MySQL database!');

            // Example: Execute a simple query
            const [rows, fields] = await connection.execute('SELECT * FROM your_table_name');
            console.log('Query results:', rows);

            // Close the connection
            await connection.end();
            console.log('Connection closed.');

        } catch (error) {
            console.error('Error connecting or querying database:', error);
        }
    }

    connectAndQuery();