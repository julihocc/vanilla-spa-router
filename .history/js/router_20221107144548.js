const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    console.log("🚀 ~ file: router.js ~ line 5 ~ route ~ window.history", window.history)
    console.log("🚀 ~ file: router.js ~ line 5 ~ route ~ event.target.href", event.target.href)
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
    "/lorem": "/pages/lorem.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    console.log("🚀 ~ file: router.js ~ line 19 ~ handleLocation ~ path", path)
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
