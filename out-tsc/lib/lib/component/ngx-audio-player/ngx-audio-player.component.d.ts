import { OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Track } from '../../model/track.model';
import { MatSlider } from '@angular/material/slider';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import { Subject } from 'rxjs';
export declare class AudioPlayerComponent implements OnInit, OnChanges {
    audioPlayerService: AudioPlayerService;
    repeat: string;
    constructor(elem: ElementRef);
    set playlist(playlist: Track[]);
    set matPaginator(mp: MatPaginator);
    displayedColumns: string[];
    dataSource: any;
    paginator: MatPaginator;
    timeLineDuration: MatSlider;
    tracks: Track[];
    displayTitle: boolean;
    displayPlaylist: boolean;
    displayVolumeControls: boolean;
    displayRepeatControls: boolean;
    pageSizeOptions: number[];
    expanded: boolean;
    autoPlay: boolean;
    disablePositionSlider: boolean;
    displayArtist: boolean;
    displayDuration: boolean;
    tableHeader: string;
    titleHeader: string;
    artistHeader: string;
    durationHeader: string;
    currentIndex: number;
    trackEnded: Subject<string>;
    player: ElementRef;
    iOS: boolean;
    loaderDisplay: boolean;
    isPlaying: boolean;
    currentTime: number;
    volume: number;
    duration: number;
    private startOffsetValue;
    set startOffset(seconds: number);
    get startOffset(): number;
    endOffset: number;
    currTimePosChanged(event: any): void;
    bindPlayerEvent(): void;
    playBtnHandler(): void;
    play(track?: Track): void;
    toggleVolume(): void;
    toggleRepeat(): void;
    private setVolume;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private buildDisplayedColumns;
    initialize(): void;
    setDataSourceAttributes(): void;
    nextSong(): void;
    previousSong(): void;
    resetSong(): void;
    selectTrack(index: number): void;
    checkIfSongHasStartedSinceAtleastTwoSeconds(): boolean;
    updateCurrentTrack(): void;
}
//# sourceMappingURL=ngx-audio-player.component.d.ts.map