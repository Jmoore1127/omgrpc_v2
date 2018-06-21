var jsdom = require('jsdom').JSDOM;
var exposedProperties = ['window', 'navigator', 'document'];

export const dom = new jsdom('<!DOCTYPE html><html><body></body></html>', {url: 'http:localhost:3000/admin'});
global.document = dom.document
global.window = dom.window;
Object.keys(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
