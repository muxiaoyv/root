let path = require('path')

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js',
		publicPath: '/build/'
	},
	resolve: {
	    extensions: ['*', '.js', '.jsx'],
	    alias: {
	      'root': path.resolve(__dirname, '/'),
	      'src': path.resolve(__dirname, './src')	    }
	  },
 	devtool: '#eval-source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'src'),
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react']
            }
		}]
	}
}