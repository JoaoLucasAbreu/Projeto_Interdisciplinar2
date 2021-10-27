import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async explore(req: app.Request, res: app.Response) {
		res.render("index/explore");
	}

	public async upload(req: app.Request, res: app.Response) {
		res.render("index/upload");
	}

	public async about(req: app.Request, res: app.Response) {
		res.render("index/about");
	}

	public async oi(req: app.Request, res: app.Response) {
		res.send("game play");
	}

}

export = IndexRoute;
