"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EmitterService = (function () {
    function EmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_1.EventEmitter();
        return this._emitters[ID];
    };
    // Event store
    EmitterService._emitters = {};
    EmitterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdHRlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC91bHRpbGl0aWVzL2VtaXR0ZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUd6RDtJQUFBO0lBVUEsQ0FBQztJQVBHLCtDQUErQztJQUMvQyxTQUFTO0lBQ0Ysa0JBQUcsR0FBVixVQUFXLEVBQVU7UUFDakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJELGNBQWM7SUFDQyx3QkFBUyxHQUF3QyxFQUFFLENBQUM7SUFIdkU7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQVdiLHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxzQkFBYyxpQkFVMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1pdHRlclNlcnZpY2Uge1xuICAgIC8vIEV2ZW50IHN0b3JlXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2VtaXR0ZXJzOiB7IFtJRDogc3RyaW5nXTogRXZlbnRFbWl0dGVyPGFueT4gfSA9IHt9O1xuICAgIC8vIFNldCBhIG5ldyBldmVudCBpbiB0aGUgc3RvcmUgd2l0aCBhIGdpdmVuIElEXG4gICAgLy8gYXMga2V5XG4gICAgc3RhdGljIGdldChJRDogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2VtaXR0ZXJzW0lEXSlcbiAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJzW0lEXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtaXR0ZXJzW0lEXTtcbiAgICB9XG59Il19