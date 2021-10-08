import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async sobre(req: app.Request, res: app.Response) {
		res.render("index/sobre");
	}

	public async teste(req: app.Request, res: app.Response) {
		res.send("Eu sou um texto...");
	}

	public async oi(req: app.Request, res: app.Response) {
		res.send("game play");
	}

}

export = IndexRoute;
