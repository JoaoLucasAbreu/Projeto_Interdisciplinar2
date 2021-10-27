import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("home/home");
	}

	public async explore(req: app.Request, res: app.Response) {
		res.render("home/explore");
	}

	public async sobre(req: app.Request, res: app.Response) {
		res.render("home/sobre");
	}

	public async teste(req: app.Request, res: app.Response) {
		res.send("Eu sou um texto...");
	}

	public async oi(req: app.Request, res: app.Response) {
		res.send("game play");
	}

}

export = IndexRoute;
