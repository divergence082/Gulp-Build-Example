

var util = require('util');


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



/**
 * @enum {number}
 */
gb.Enum = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};




/**
 * @interface
 */
gb.IClass = function() {};


/**
 * @return {string}
 */
gb.IClass.prototype.publicMethod = function() {};




/**
 * @param {string} a
 * @param {number} b
 * @param {boolean} c
 *
 * @constructor
 * @implements {gb.IClass}
 */
gb.Class = function(a, b, c) {

  /**
   * @type {string}
   */
  this.publicProp = a;

  /**
   * @type {number}
   */
  this._protectedProp = b;

  /**
   * @type {boolean}
   */
  this.__privateProp = c;

};


/**
 * @inheritDoc
 */
gb.Class.prototype.publicMethod = function() {
  return this.publicProp;
};


/**
 * @return {number}
 */
gb.Class.prototype._protectedMethod = function() {
  return this._protectedProp;
};


/**
 * @return {boolean}
 */
gb.Class.prototype.__privateMethod = function() {
  return this.__privateProp;
};




/**
 * @constructor
 * @extends {gb.Class}
 */
gb.InheritClass = function() {
  gb.Class.call(this, '1', 1, true);

  var context = this;

  /**
   * @return {!function(): number}
   */
  this._func = function() {
    return context._protectedMethod;
  };

};

util.inherits(gb.InheritClass, gb.Class);


/**
 * @inheritDoc
 */
gb.InheritClass.prototype.publicMethod = function() {
  return this.publicProp + '1';
};



/**
 * @return {number}
 */
gb.ex.doSometing = function() {
  return 0;
};


module.exports = gb;
