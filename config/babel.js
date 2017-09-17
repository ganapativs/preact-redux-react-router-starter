module.exports = {
	presets: [
		['env', {loose: true, modules: false}],
		'stage-0'
	],
	plugins: [
		['transform-react-jsx', {pragma: 'h'}]
	],
	env: {
		development: {
			plugins: [
				"sitrep"
			]
		}
	}
};
