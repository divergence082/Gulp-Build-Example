

//http://nodejs.org/docs/v0.10.25/api/modules.html


/**
 * @param {string} path
 * @return {!Object}
 */
var require = function(path) {};


/**
 * @type {!Object}
 */
var module;


/**
 * @type {!Object}
 */
module.exports;


/**
 * @type {string}
 */
module.id;


/**
 * @type {string}
 */
module.filename;


/**
 * @type {boolean}
 */
module.loaded;

/**
 * @type {!Object}
 */
module.parent;


/**
 * @type {!Array.<!Object>}
 */
module.children;


/**
 * @param {string} id
 * @return {!Object}
 */
module.require = function(id) {};


/**
 * @type {!Object}
 */
var exports;
