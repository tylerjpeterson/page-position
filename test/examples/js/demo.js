'use strict';

var pagePosition = require('./../../../');
var el = document.getElementById('tester');
var out = document.getElementById('output');

out.textContent = JSON.stringify(pagePosition(el), null, '\t');
