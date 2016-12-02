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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
//import 'rxjs/add/operator/map';
var DoctorService = (function () {
    function DoctorService(http) {
        this.http = http;
    }
    DoctorService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    DoctorService.prototype.handleError = function (error) {
        var errorMsg = error.message || "Oh nooo! Server error!";
        console.error(errorMsg);
        // throw an application level error
        return Rx_1.Observable.throw(errorMsg);
    };
    DoctorService.prototype.getDoctors = function () {
        return this.http.get('doctor/doctors')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DoctorService.prototype.saveDoctor = function (doctor) {
        var url = 'doctor/new';
        if (doctor.Id != null) {
            url = 'doctor/edit';
        }
        return this.http.post(url, doctor)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DoctorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DoctorService);
    return DoctorService;
}());
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map