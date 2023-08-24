module.exports = function override(config, env) {
	config.module.rules = [
		...config.module.rules,
		{
			resolve: {
				fallback: {
					// util: require.resolve('util/'),
					fs: false,
				},
			},
		},
	];

	return config;
};
