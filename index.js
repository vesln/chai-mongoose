/**
 * Register the plugin.
 *
 * @param {Object} chai
 * @api public
 */

module.exports = function(chai) {
  var Assertion = chai.Assertion;
  var assert = chai.assert;

  /**
   * Assert that two records are equal.
   *
   * @param {Object} actual
   * @param {Object} expected
   * @param {String} message
   * @api public
   */

  assert.record = function(act, exp, msg) {
    new Assertion(act.constructor.modelName, 'Different collections')
      .to.eql(exp.constructor.modelName);

    new Assertion(act.toJSON(), msg).to.eql(exp.toJSON());
  };

  /**
   * Assert that two arrays with records are equal.
   * Order matters.
   *
   * @param {Array} actual
   * @param {Array} expected
   * @param {String} message
   * @api public
   */

  assert.records = function(act, exp, msg) {
    new Assertion(act.length, 'Record arrays have different length').to.eq(exp.length);

    act.forEach(function(record, i) {
      assert.record(record, exp[i]);
    });
  };
};
