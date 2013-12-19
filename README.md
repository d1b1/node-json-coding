node-json-coding
================

Basic encode and decoder for data.

This helper module provides two methods to help encode and decode non UTF8 characters in Javascript data.

    ` npm install `

#### Methods 

* encode(obj) - Returns a 'cloned' copy of the with all key values `escaped`.
* decode(obj) - Returns a 'cloned' copy of the with all key values `unescaped`.


### Why
This code provides the ability to escape and unescape HTML body data. There may better (smarter) way, but for now this works realy well. The need for this came out of work with the Swagger.js UI and spec, and the `braque` API abstrator. Needed the ability to base HTML body data with non UTF8 characters in HTML form body without swagger having a JSON parse error. There are other ways to handle this. I will pull this project when I find I have missed the boat completely and have a better method.
