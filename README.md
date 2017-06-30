![100% test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

# page-position
> Retrieve the position of an element relative to the page.

Returns an object describing a rendered element's top, right, 
bottom, and left distances from the document's polar origin.

## Installation
Install via npm:

```sh
$ npm i page-position --save
```

## Usage
```javascript
var pagePosition = require('page-position');
pagePosition(document.getElementById('target'));
```
