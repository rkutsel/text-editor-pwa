const { warmStrategyCache } = require("workbox-recipes");
const { CacheFirst } = require("workbox-strategies");
const { registerRoute, Route } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
	cacheName: "page-cache",
	plugins: [
		new CacheableResponsePlugin({
			statuses: [0, 200],
		}),
		new ExpirationPlugin({
			maxAgeSeconds: 30 * 24 * 60 * 60,
		}),
	],
});

const matchCallback = ({ request }) => {
	console.log(request);
	return (
		// CSS
		request.destination === "style" ||
		// JavaScript
		request.destination === "script" ||
		// Images
		request.destination === "image" ||
		//HTML DOCs
		request.destination === "documents"
	);
};

warmStrategyCache({
	urls: ["/index.html", "/"],
	strategy: pageCache,
});

const cacheRoute = new Route(({ request }) => {
	return matchCallback;
}, new CacheFirst({ cacheName: "pwa-cache" }));

registerRoute(({ request }) => request.mode === "navigate", pageCache);

registerRoute(cacheRoute);
