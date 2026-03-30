export const config = {
  matcher: '/internal/:path*',
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic') {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(':');

      const validUser = process.env.INTERNAL_USERNAME;
      const validPass = process.env.INTERNAL_PASSWORD;

      if (user === validUser && pass === validPass) {
        return; // Authenticated — let the request through
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
