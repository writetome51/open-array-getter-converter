"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_function_1 = require("error-if-not-function");
var public_array_container_1 = require("@writetome51/public-array-container");
var PublicArrayGetterConverter = /** @class */ (function (_super) {
    __extends(PublicArrayGetterConverter, _super);
    function PublicArrayGetterConverter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions don't modify the array.  What they return depends on the function.
    // Does the same thing as Array.reduce(), but with a much better name.
    PublicArrayGetterConverter.prototype.toOne = function (reducingFunction, initialValue) {
        var _a;
        error_if_not_function_1.errorIfNotFunction(reducingFunction);
        // @ts-ignore
        return (_a = this.data).reduce.apply(_a, arguments);
    };
    // Does the same thing as Array.map()
    // Returns new array with each value in old array converted into something else.
    PublicArrayGetterConverter.prototype.each = function (mappingFunction) {
        error_if_not_function_1.errorIfNotFunction(mappingFunction);
        return this.data.map(mappingFunction);
    };
    return PublicArrayGetterConverter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayGetterConverter = PublicArrayGetterConverter;
