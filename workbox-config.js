module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,avif,jpg,png,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};