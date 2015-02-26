


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
