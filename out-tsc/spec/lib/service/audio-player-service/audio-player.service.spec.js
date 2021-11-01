import { TestBed } from '@angular/core/testing';
import { AudioPlayerService } from './audio-player.service';
import { mockPlaylist } from '../../model/track.model.mock';
describe('AudioPlayerService', function () {
    var service;
    beforeEach(function () { return TestBed.configureTestingModule({
        providers: [AudioPlayerService]
    }).compileComponents(); });
    beforeEach(function () {
        service = TestBed.inject(AudioPlayerService);
        service.setPlaylist(mockPlaylist);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should set playlist correctly', function () {
        expect(service.getPlaylist().subscribe(function (playlist) {
            return playlist.length === 3;
        }));
    });
    it('should get playlist correctly', function () {
        expect(service.getPlaylist().subscribe(function (playlist) {
            return playlist[0].title === (mockPlaylist[0].title);
        }));
    });
});
//# sourceMappingURL=audio-player.service.spec.js.map