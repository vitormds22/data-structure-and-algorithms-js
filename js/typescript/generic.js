var MyObj = /** @class */ (function () {
    function MyObj() {
    }
    MyObj.prototype.compareTo = function (b) {
        if (this.age == b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObj;
}());
