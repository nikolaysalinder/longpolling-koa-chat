// Обычно отдается через Nginx

const serve = require('koa-static');

exports.init = app => app.use(serve('public'));