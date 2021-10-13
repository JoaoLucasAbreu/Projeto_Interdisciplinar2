import app = require("teem");

/**
 * const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
	// Inside the Media Query.

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

	const navLink = document.querySelectorAll(".nav-link");

	navLink.forEach(n => n.addEventListener("click", closeMenu));

	function closeMenu() {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}
 */

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
