export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const auth = request.headers.get('authorization');
  const validUser = process.env.INTERNAL_USERNAME;
  const validPass = process.env.INTERNAL_PASSWORD;

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic') {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(':');

      if (user === validUser && pass === validPass) {
        const url = new URL(request.url);
        let path = url.pathname.replace(/^\/internal\/?/, '') || 'index.html';
        if (!path.includes('.')) path += '/index.html';

        const fileUrl = new URL(`/_internal_static/${path}`, url.origin);
        const res = await fetch(fileUrl);

        if (res.ok) {
          return new Response(res.body, {
            status: 200,
            headers: {
              'Content-Type': res.headers.get('Content-Type') || 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
          });
        }

        return new Response('Page not found', { status: 404 });
      }
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Internal Area", charset="UTF-8"',
    },
  });
}
