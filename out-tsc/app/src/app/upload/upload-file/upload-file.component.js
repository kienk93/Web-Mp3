var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(afStorage) {
        this.afStorage = afStorage;
        this.checkUploadFile = false;
        this.giveURLtoCreate = new EventEmitter();
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.onFileChaged = function ($event) {
        this.selectedFile = $event.target.files[0];
    };
    UploadFileComponent.prototype.onUpLoad = function () {
        var _this = this;
        this.checkUploadFile = true;
        var id = Math.random().toString(36).substring(2); //Tạo ra 1 cái name riêng để hiển thị trên DB của FB
        this.ref = this.afStorage.ref(id);
        this.ref.put(this.selectedFile)
            .then(function (snapshot) {
            return snapshot.ref.getDownloadURL(); //Tra ve  1 cai chuoi sieu van ban luu tren FB
        })
            .then(function (downloadURL) {
            _this.downloadURL = downloadURL;
            _this.giveURLtoCreate.emit(_this.downloadURL);
            _this.checkUploadFile = false;
            return downloadURL;
        })
            .catch(function (error) {
            console.log("Failed to upload avatar and get link " + error);
        });
    };
    var _a;
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UploadFileComponent.prototype, "giveURLtoCreate", void 0);
    UploadFileComponent = __decorate([
        Component({
            selector: 'app-upload-file',
            templateUrl: './upload-file.component.html',
            styleUrls: ['./upload-file.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof AngularFireStorage !== "undefined" && AngularFireStorage) === "function" ? _a : Object])
    ], UploadFileComponent);
    return UploadFileComponent;
}());
export { UploadFileComponent };
//# sourceMappingURL=upload-file.component.js.map