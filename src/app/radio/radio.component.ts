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

  interval: any | null = null;

  icon = ButtonIcons.Play;

  play() {
    const audio = this.audioRef.nativeElement;

    if (audio.paused) {
      this.start();
    } else {
      this.pause();
    }
  }

  private start(): void {
    this.audioRef.nativeElement.play();
    this.icon = ButtonIcons.Pause;

    this.interval = setInterval(() => {
      this.streamUrl = this.streamUrl;
    }, 30000);
  }

  private pause(): void {
    this.audioRef.nativeElement.pause();
    this.icon = ButtonIcons.Play;

    clearInterval(this.interval);
  }
}
