import * as tslib_1 from "tslib";
import 'reflect-metadata';
import { Container, Inject, Service } from 'typedi';
import { ConfigService } from './services/app/ConfigService';
var UiCore = (function () {
    function UiCore() {
    }
    UiCore.prototype.initCore = function (Vue, options) {
        if (options.http) {
            this.ConfigService.configure('http', options.http);
        }
        if (options.toast) {
            this.ConfigService.configure('toast', options.toast);
        }
    };
    tslib_1.__decorate([
        Inject(),
        tslib_1.__metadata("design:type", ConfigService)
    ], UiCore.prototype, "ConfigService", void 0);
    UiCore = tslib_1.__decorate([
        Service()
    ], UiCore);
    return UiCore;
}());
export default {
    install: function (Vue, options) {
        Container.get(UiCore).initCore(Vue, options);
    }
};

//# sourceMappingURL=index.js.map
