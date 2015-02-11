

//http://nodejs.org/docs/v0.10.25/api/util.html


/**
 * @namespace
 */
var util = {};


/**
 * @param {...} var_args
 * @return {string}
 */
util.format = function(format, var_args) {};


/**
 * @param {string} string
 */
util.debug = function(string) {};


/**
 * @param {...} var_args
 */
util.error = function(var_args) {};


/**
 * @param {...} var_args
 */
util.puts = function(var_args) {};


/**
 * @param {...} var_args
 */
util.print = function(var_args) {};

/**
 * @param {string} string
 */
util.log = function(string) {};


/**
 * @param {!Object} object
 * @param {!Object=} opt_options
 */
util.inspect = function(object, opt_options) {};


/**
 * @type {!Object}
 */
util.inspect.styles;


/**
 * @type {!Object}
 */
util.inspect.colors;


/**
 * @param {*} object
 * @return {boolean}
 */
util.isArray = function(object) {};


/**
 * @param {*} object
 * @return {boolean}
 */
util.isRegExp = function(object) {};


/**
 * @param {*} object
 * @return {boolean}
 */
util.isDate = function(object) {};


/**
 * @param {*} object
 * @return {boolean}
 */
util.isError = function(object) {};


/**
 * @param readableStream
 * @param writableStream
 * @param opt_callback
 */
util.pump = function(readableStream, writableStream, opt_callback) {};


/**
 * @param {function(new:Object, ...)} constructor
 * @param {function(new:Object, ...)} superConstructor
 */
util.inherits = function(constructor, superConstructor) {};
