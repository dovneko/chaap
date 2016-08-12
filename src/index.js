var riot = require('riot');
require('riot-router');

require('./tags/home.tag');
require('./tags/hello.tag');
require('./tags/not-found.tag');



var Route = riot.router.Route;
    DefaultRoute = riot.router.DefaultRoute, 
    NotFoundRoute = riot.router.NotFoundRoute, 
    RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
    new Route({tag: 'hello'}),
    new DefaultRoute({tag: 'home'}),
    new RedirectRoute({from: 'h', to: 'hello'}),
    new NotFoundRoute({tag: 'not-found'})
]);


riot.mount('*');
riot.router.start();