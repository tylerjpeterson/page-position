'use strict';

// Tape tests: https://github.com/substack/tape
const test = require('tape');
const pagePosition = require('./../../');

document.body.innerHTML = [
	'<html style="margin: 0; padding: 0;"><head><meta charset="utf-8"></head>',
	'<body style="margin: 0; padding: 0; height: 3000;"><div style="margin: 0; padding: 0; position: absolute; top: 1200px;left: 1400px;width: 100px;height: 100px;display: block;background-color: #000;" id="tester" class="tester"></div></body></html>'
].join('');

test('should be a function', assert => {
	assert.equal(typeof pagePosition, 'function');
	assert.end();
});

test('should define offsets accurately', assert => {
	const coords = pagePosition(document.getElementById('tester'));

	assert.equal(coords.top, 1200, 'has accurate top offset');
	assert.equal(coords.right, 1500, 'has accurate right offset');
	assert.equal(coords.bottom, 1300, 'has accurate bottom offset');
	assert.equal(coords.left, 1400, 'has accurate left offset');
	assert.end();
});

test('should return results independent of scroll position', assert => {
	window.scrollTo(200, 100);
	const coords = pagePosition(document.getElementById('tester'));

	assert.equal(coords.top, 1200, 'maintains accurate top offset after scrolling');
	assert.equal(coords.right, 1500, 'maintains accurate right offset after scrolling');
	assert.equal(coords.bottom, 1300, 'maintains accurate bottom offset after scrolling');
	assert.equal(coords.left, 1400, 'maintains accurate left offset after scrolling');
	assert.end();
});

window.close();
