# metacharacter ![NPM Version](https://img.shields.io/npm/v/metacharacter?style=flat-square) ![Build Status](https://img.shields.io/github/workflow/status/MrAdhit/metacharacter/Basic%20Test?style=flat-square) 

Stringify any metacharacter

## Installation

Install with [npm](https://www.npmjs.com/package/random.org-javascript)

```
$ npm install metacharacter
```

## Usage

**ES6**

```javascript
import metachar from "metacharacter";
```

**CommonJS**

```javascript
const metachar = require("metacharacter");
```

**Example**

```javascript
metachar.stringify("\n\t\b\\"); // => \n\t\b\\
metachar.parse("\\n \\t"); // => newline tab
metachar.parse(metachar.stringify("\n \t")); // => newline tab
```