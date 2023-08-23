'use strict';

module.exports = package2;

const p = require('package-1');
function package2() {
  p();
  console.log('package2');
  return 'Hello from package2';
}
package2();
