export class Router {
	constructor(routes, errorCallback) {
		this.routes = routes;
		this.errorCallback = errorCallback;
		this.onHashChangeHandler = () => {
			const hashPath = window.location.hash.slice(1);
			if (Object.keys(this.routes).includes(hashPath)) {
				this.routes[hashPath]();
			}
			else {
				this.errorCallback();
			}
		};
		window.addEventListener('hashchange', this.onHashChangeHandler);
		this.onHashChangeHandler();
	}
	destroy() {
		window.removeEventListener('hashchange', this.onHashChangeHandler);
	}
}
