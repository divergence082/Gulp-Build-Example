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
gb.PUBLIC_CONST;


/**
 * @type {number}
 */
gb._PROTECTED_CONST;


/**
 * @param {!gb.Something} param
 * @return {Function}
 */
gb.highOrderFunction = function(param) {};


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
  this.publicProp;


  /**
   * @type {number}
   */
  this._protectedProp;

};


/**
 * @inheritDoc
 */
gb.Class.prototype.publicMethod = function() {};


/**
 * @return {number}
 */
gb.Class.prototype._protectedMethod = function() {};


/**
 * @constructor
 * @extends {gb.Class}
 */
gb.InheritClass = function() {

  /**
   * @return {!function(): number}
   */
  this._func = function() {};

};


/**
 * @inheritDoc
 */
gb.InheritClass.prototype.publicMethod = function() {};


/**
 * @return {number}
 */
gb.ex.doSometing = function() {};




