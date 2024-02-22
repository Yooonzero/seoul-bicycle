const express = require('express');

const app = express();
const HOST = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, HOST);

// app.listen(PORT, HOST, () => {
//     console.log(`${PORT} 서버가 열렸습니다.`);
// });
