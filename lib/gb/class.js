


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
