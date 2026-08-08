import { createProxyMiddleware } from 'http-proxy-middleware';
import http from 'http';

const routes = {
  '/remote-a': 'http://localhost:5001',
  '/remote-b': 'http://localhost:5002',
  '/remote-c': 'http://localhost:5003',
  '/host-vite7': 'http://localhost:5004',
  '/host-vite8': 'http://localhost:5005',
  '/host-webpack': 'http://localhost:8080',
};

const proxies = Object.entries(routes).map(([prefix, target]) => ({
  prefix,
  middleware: createProxyMiddleware({
    target,
    changeOrigin: true,
    ws: true,
  }),
}));

const server = http.createServer((req, res) => {
  const match = proxies.find(({ prefix }) => req.url?.startsWith(prefix));
  if (match) {
    match.middleware(req, res, (err) => {
      res.writeHead(502);
      res.end(`Proxy error: ${err?.message}`);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <h2>MF Vite Repro</h2>
      <ul>
        <li><a href="/host-vite8/">Host &mdash; Vite 8</a></li>
        <li><a href="/host-vite7/">Host &mdash; Vite 7</a></li>
        <li><a href="/host-webpack/">Host &mdash; Webpack</a></li>
      </ul>
    `);
  }
});

server.on('upgrade', (req, socket, head) => {
  const match = proxies.find(({ prefix }) => req.url?.startsWith(prefix));
  if (match) {
    match.middleware.upgrade(req, socket, head);
  }
});

server.listen(3000, () => {
  console.log('Reverse proxy running at http://localhost:3000');
  console.log('  /remote-a      → http://localhost:5001');
  console.log('  /remote-b      → http://localhost:5002');
  console.log('  /remote-c      → http://localhost:5003');
  console.log('  /host-vite7    → http://localhost:5004');
  console.log('  /host-vite8    → http://localhost:5005');
  console.log('  /host-webpack  → http://localhost:8080');
});
