"use strict";
const crypto = require("crypto");
const hash = crypto.createHash('sha256');
hash.update('hello');
let computedHash = hash.digest('base64');
console.log(computedHash);
