var pkg = require('../package.json');

// 兼容 pubsub 和 @jsmini/pubsub，@jsmini/pubsub 替换为 jsmini_pubsub
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * pubsub ${version} (https://github.com/jsmini/pubsub)
 * API https://github.com/jsmini/pubsub/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/pubsub/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
