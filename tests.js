"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublicArrayGetterConverter_1 = require("./PublicArrayGetterConverter");
var getConverted = new PublicArrayGetterConverter_1.PublicArrayGetterConverter([1, 2, 3, 4]);
var result = getConverted.each(function (item) {
    return item * 2;
});
if (result.length === 4 && result[0] === 2)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
result = getConverted.toOne(function (a, b) {
    return a * b;
});
if (result === 24)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
var errorTriggered = false;
try {
    getConverted.each((1));
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
errorTriggered = false;
try {
    getConverted.toOne((1));
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
