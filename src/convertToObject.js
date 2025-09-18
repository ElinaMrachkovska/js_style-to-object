'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || typeof sourceString !== 'string') {
    return result
  };

  const declaration = sourceString.split(';');

  for (let decl of declaration) {
    decl = decl.trim();

    if (!decl) {
      continue;
    }
    
    const firstColon = decl.indexOf(':');
    if (firstColon === -1) continue;

    const property = decl.slice(0, firstColon).trim();
    const value = decl.slice(firstColon + 1).trim();

    if (property) {
      result[property]= value;
    }
  }

return result;
}

module.exports = convertToObject;
