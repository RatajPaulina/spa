import Dashboard from "./views/Dashboard.js";
import Form from "./views/Form.js";
import List from "./views/List.js";
import Post from "./views/Post.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1)
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}
const nav = url => {
    history.pushState(null, null, url);
    router();
}

const router = async() => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/list", view: List },
        { path: "/form", view: Form },
        { path: "/post", view: Post },
    ];
    const mapMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });
    let match = mapMatches.find(mapMatches => mapMatches.result !== null);
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }
    const view = new match.route.view(getParams(match))

    document.querySelector('#app').innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            nav(e.target.href);
        }
    });
    router();
});