import { createServer } from 'http';
import { join } from 'path';
import { readFileSync } from 'fs';

const server = createServer((req, res) => {
  if (req.url === '/') {
    const indexHtml = readFileSync(join(__dirname, 'index.html'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtml);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
