"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var getConverted = new index_1.PublicArrayGetterConverter([1, 2, 3, 4]);
var result = getConverted.each(function (item) {
    return item * 2;
});
if (arrays_match_1.arraysMatch(result, [2, 4, 6, 8]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
getConverted.data = [2, 4, 6, 8];
result = getConverted.toOne(function (a, b) { return a * b; });
if (result === 384)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
getConverted.data = ['a', 'sentence', 'is', 'written'];
result = getConverted.toOne(function (a, b) { return a + ' ' + b; }, 'hello');
if (result === 'hello a sentence is written')
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
var errorTriggered = false;
try {
    getConverted.each((1));
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
errorTriggered = false;
try {
    getConverted.toOne((1));
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
