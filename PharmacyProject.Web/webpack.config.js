const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

const AOT = helpers.hasNpmFlag('aot');
console.log("==========Is AOT Build = " + AOT + " ============")

module.exports = (env) => {
    // Configuration in common to both client-side and server-side bundles
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: { modules: false },
        context: __dirname,
        resolve: {
            /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
            extensions: ['.ts', '.js', '.json', '.scss', '.css', '.html'],

            // An array of directory names to be resolved to the current directory
            modules: [helpers.root('ClientApp'), 'node_modules']
        },
        output: {
            filename: '[name].js',
            publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        entry: {
            'main': AOT ? './ClientApp/main.aot.ts' : './ClientApp/boot-client.ts'
        },
        //output: {
        //    path: path.join(__dirname, '../wwwroot', 'dist'),
        //    publicPath: '/dist/'
        //},
        module: {
            rules: [
                {
                    test: /\.ts$/, exclude: [/\.(spec|e2e)\.ts$/],
                    use: [
                        {
                            loader: 'ng-router-loader',
                            options: {
                                loader: 'async-import',
                                genDir: 'compiled',
                                aot: AOT
                            }
                        },
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                //{
                //    test: /\.css$/, loader: ExtractTextPlugin.extract({
                //        fallback: "style-loader",
                //        use: "css-loader"
                //    })
                //},
                { test: /\.css$/, use: ['to-string-loader', 'css-loader'] },
                { test: /\.scss$/, use: ['to-string-loader', 'css-loader', 'sass-loader'] },
                { test: /\.html$/, use: 'html-loader' },
                { test: /\.json$/, use: 'json-loader' },
                { test: /\.(jpg|png|gif)$/, use: 'file-loader' },
                { test: /\.(woff|woff2|eot|ttf|svg)$/, use: 'file-loader' }
            ]
        },
        plugins: [new CheckerPlugin()]
    };

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/dist';
    const clientBundleConfig = merge(sharedConfig, {
        entry: { 'main-client': './ClientApp/boot-client.ts' },
        output: { path: path.join(__dirname, clientBundleOutputDir) },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./wwwroot/dist/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

    // Configuration for server-side (prerendering) bundle suitable for running in Node
    const serverBundleConfig = merge(sharedConfig, {
        resolve: { mainFields: ['main'] },
        entry: { 'main-server': './ClientApp/boot-server.ts' },
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./ClientApp/dist/vendor-manifest.json'),
                sourceType: 'commonjs2',
                name: './vendor'
            })
        ],
        output: {
            libraryTarget: 'commonjs',
            path: path.join(__dirname, './ClientApp/dist')
        },
        target: 'node',
        devtool: 'inline-source-map'
    });

    return [clientBundleConfig, serverBundleConfig];
};
