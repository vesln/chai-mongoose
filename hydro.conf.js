module.exports = function(hydro) {
  hydro.set({
    suite: 'chai-mongoose',
    formatter: 'hydro-dot',
    plugins: [ 'hydro-minimal', ],
    tests: [ 'test/*.js' ],
  });
};
