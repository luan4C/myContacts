module.exports = (request, response, next) => {
  const allowedOrigins = [
    'http://localhost:3000',

  ];
  if (allowedOrigins.includes(request.headers.origin)) {
    response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    // Indica quanto tempo os headers de Acess-Control-Allow Methods/header vão permancer em cache
    response.setHeader('Access-Controll-Max-Age', '10');
  }

  next();
};
