const { join } = require('path');

module.exports = [
	{
		loader: 'css-loader'
	}, {
		loader: 'postcss-loader',
		options: {
			plugins: [
				require('autoprefixer')({
					browsers: ['last 3 version']
				})
			]
		}
	}, {
		loader: 'stylus-loader',
		options: {
			includePaths: [
				join(__dirname, 'src')
			]
		}
	}
]
