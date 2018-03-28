/**
  Webpack loader that converts antThemeVariables.scss into less
*/
module.exports = function (source) {
  return source.replace(/\$/ig, '@');
};
