// Ver https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Usar middlewares predeterminados
server.use(middlewares);

// Reescribir rutas antes de usar el router
server.use(
	jsonServer.rewriter({
		"/api/events": "/events",
		"/api/events/:id": "/events/:id"
	})
);

// Usar el router
server.use(router);

// Usar el puerto proporcionado por el entorno (como Vercel) o 3000 por defecto
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`El servidor JSON está funcionando en el puerto ${port}`);
});

// Exporta la API del Servidor
module.exports = server;