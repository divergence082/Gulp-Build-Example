

/**
 * @namespace
 */
var gb = {};


/**
 * @namespace
 */
gb.ex = {};


/**
 * @typedef {*}
 */
gb.Something;


/**
 * @type {number}
 */
gb.PUBLIC_CONST = 0;


/**
 * @type {number}
 */
gb._PROTECTED_CONST = 0;


/**
 * @type {number}
 */
gb.__PRIVATE_CONST = 0;


/**
 * @return {number}
 */
gb.testFunction = function() {
  return 0;
};


/**
 * @param {!gb.Something} param
 * @return {Function}
 */
gb.highOrderFunction = function(param) {
  return gb.testFunction;
};
