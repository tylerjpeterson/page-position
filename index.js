'use strict';

/**
 * @typedef Offset
 * @type {Object}
 *
 * @property {number} top Distance from top of page to top of element
 * @property {number} right Distance from left edge of page to right edge of element
 * @property {number} bottom Distance from top of page to bottom of element
 * @property {number} left Distance from left edge of page to left edge of element
 */

/**
 * @module page-position
 * @description Retrieve the position of an element relative to the page.
 *
 * @param {element} el Target element
 * @return {Offset} Object representing element's offsets with top, left, bottom, and right properties
 */
module.exports = function (el) {
	var box = el.getBoundingClientRect();
	var x = window.pageXOffset;
	var y = window.pageYOffset;

	return {
		top: box.top + y,
		right: box.right + x,
		bottom: box.bottom + y,
		left: box.left + x
	};
};
