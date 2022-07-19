module.exports = (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  // Indica quanto tempo os headers de Acess-Control-Allow Methods/header vão permancer em cache
  response.setHeader('Access-Controll-Max-Age', '10');
  next();
};
