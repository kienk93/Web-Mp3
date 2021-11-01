var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
var UploadAvatarComponent = /** @class */ (function () {
    function UploadAvatarComponent(afStorage) {
        this.afStorage = afStorage;
        this.checkUploadAvatar = false;
        this.giveURLtoCreate = new EventEmitter();
    }
    UploadAvatarComponent.prototype.ngOnInit = function () {
    };
    //Khi upload file qua the input dưới dạng 1 hoặc nhiều file thì tệp đó thông qua sự kiện (change)$event được kích hoạt. Và tất cả file upload sẽ lưu trữ
    //trong $event.target.files
    UploadAvatarComponent.prototype.onFileChaged = function ($event) {
        this.selectedFile = $event.target.files[0];
    };
    UploadAvatarComponent.prototype.onUpLoad = function () {
        var _this = this;
        this.checkUploadAvatar = true;
        var id = Math.random().toString(36).substring(2); //Tạo ra 1 cái name riêng để hiển thị trên DB của FB
        this.ref = this.afStorage.ref(id);
        this.ref.put(this.selectedFile)
            .then(function (snapshot) {
            return snapshot.ref.getDownloadURL(); //Tra ve  1 cai chuoi sieu van ban luu tren FB
        })
            .then(function (downloadURL) {
            _this.downloadURL = downloadURL;
            _this.giveURLtoCreate.emit(_this.downloadURL);
            _this.checkUploadAvatar = false;
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
    ], UploadAvatarComponent.prototype, "giveURLtoCreate", void 0);
    UploadAvatarComponent = __decorate([
        Component({
            selector: 'app-upload-avatar',
            templateUrl: './upload-avatar.component.html',
            styleUrls: ['./upload-avatar.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof AngularFireStorage !== "undefined" && AngularFireStorage) === "function" ? _a : Object])
    ], UploadAvatarComponent);
    return UploadAvatarComponent;
}());
export { UploadAvatarComponent };
//# sourceMappingURL=upload-avatar.component.js.map