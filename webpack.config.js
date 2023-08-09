module.exports = {
	node: {
		fs: false,
	},
	resolve: {
		fallback: {
			// util: require.resolve('util/'),
			fs: false,
		},
	},
};
