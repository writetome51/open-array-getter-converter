"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OpenArrayContainer_1 = require("./OpenArrayContainer");
var OpenArrayGetterConverter = /** @class */ (function (_super) {
    __extends(OpenArrayGetterConverter, _super);
    function OpenArrayGetterConverter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions don't modify the array.  What they return depends on the function.
    OpenArrayGetterConverter.prototype.toOne = function (reducingFunction) {
        return this.data.reduce(reducingFunction);
    };
    // Returns new array with each value in old array converted into something else.
    OpenArrayGetterConverter.prototype.each = function (mappingFunction) {
        return this.data.map(mappingFunction);
    };
    return OpenArrayGetterConverter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayGetterConverter = OpenArrayGetterConverter;
