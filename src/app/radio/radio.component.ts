import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonIcons } from './button.icon.enum';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @ViewChild('audio')
  audioRef!: ElementRef<HTMLAudioElement>;

  streamUrl = 'https://icecast.pulsradio.com/relaxAAC64.mp3';

  icon = ButtonIcons.Play;

  play() {
    if (this.audioRef.nativeElement.paused) {
      this.start();
    } else {
      this.pause();
    }
  }

  private start(): void {
    this.audioRef.nativeElement.src = this.streamUrl;
    this.audioRef.nativeElement.play();

    this.icon = ButtonIcons.Pause;
  }

  private pause(): void {
    this.audioRef.nativeElement.pause();
    this.audioRef.nativeElement.src = '';

    this.icon = ButtonIcons.Play;
  }
}
