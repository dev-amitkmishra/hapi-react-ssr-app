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
          cache: {
            expiresIn: 24 * 60 * 60 * 1000,
            privacy: 'public'
          }
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
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="/app.bundle.js"></script>
        </body>
        </html>
    `;
}