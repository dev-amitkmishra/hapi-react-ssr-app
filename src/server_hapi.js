import 'babel-polyfill';
import hapi from '@hapi/hapi';
const Inert = require('@hapi/inert');
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Layout from "./components/Layout";

const init = async () => {

    const server = hapi.server({
        port: 3010,
        host: 'localhost'
    });

    await server.register(Inert);

    // Serve static files
    server.route({
        method: 'GET',
        path: '/{filepath*}',
        config: {
          auth: false,
        //   cache: {
        //     expiresIn: 24 * 60 * 60 * 1000,
        //     privacy: 'public'
        //   }
        },
        handler: {
          directory: {
            path: path.join(__dirname, '../dist'),
            listing: false,
            index: false
          }
        }
    });
    server.route({
        method: 'GET',
        path: '/public/images/{filepath*}',
        config: {
          auth: false,
        //   cache: {
        //     expiresIn: 24 * 60 * 60 * 1000,
        //     privacy: 'public'
        //   }
        },
        handler: {
          directory: {
            path: path.join(__dirname, '../public/images'),
            listing: false,
            index: false
          }
        }
    });

    server.route({
        method: 'GET',
        path: '/nodeModules/{filepath*}',
        config: {
          auth: false,
        //   cache: {
        //     expiresIn: 24 * 60 * 60 * 1000,
        //     privacy: 'public'
        //   }
        },
        handler: {
          directory: {
            path: path.join(__dirname, '../node_modules/'),
            listing: false,
            index: false
          }
        }
    });
    

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, reply) => {
            const context = { };
            const jsx = (
                <StaticRouter context={ context } location={ request.url }>
                    <Layout />
                </StaticRouter>
            );
            const reactDom = renderToString( jsx );
            return htmlTemplate( reactDom );
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="/styles.css" />
            <link rel="stylesheet" href="nodeModules/slick-carousel/slick/slick.css" />
            <link rel="stylesheet" href="nodeModules/slick-carousel/slick/slick-theme.css" />
            </head>
        
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="app">${reactDom}</div>
            <script src="/app.bundle.js"></script>
        </body>
        </html>
    `;
}