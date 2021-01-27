const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs')
// const cors = require('cors');
// app.use(cors());
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (request, response) => {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.send(data);
    });
})

app.listen(port, () => console.log(`Listening on port ${port}`));
