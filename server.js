const http = require('http');
const fs = require('fs');
const path = require('path'); // For handling file paths
const mysql = require('mysql2/promise'); // This is the databse
const express = require('express');
const port = 8080; // Port number to serve on
const app = express();
// Serve static files from the current directory
app.use(express.static(__dirname));

// Send the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
    
/*
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
*/

