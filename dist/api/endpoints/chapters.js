import * as tslib_1 from "tslib";
import { ApiEndpoint } from '../ApiEndpoint';
var default_1 = (function (_super) {
    tslib_1.__extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.getAll = function (comicId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.get('/chapters', {
                            params: {
                                comicId: comicId
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    default_1.prototype.get = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.get("/chapters/" + id)];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    default_1.prototype.post = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.post("/chapters", data)];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    default_1.prototype.put = function (id, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.put("/chapters/" + id, data)];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    default_1.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.delete("/chapters/" + id)];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    default_1.prototype.publish = function (id, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.put("/chapters/" + id + "/publish", null, {
                            params: {
                                state: state
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    default_1.prototype.reorder = function (id, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.adapter.put("/chapters/" + id + "/reorder/" + index)];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    return default_1;
}(ApiEndpoint));
export default default_1;

//# sourceMappingURL=chapters.js.map
