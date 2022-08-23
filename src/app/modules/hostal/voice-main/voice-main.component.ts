import { Component, OnInit } from '@angular/core';
import { VoiceService } from '../voice.service';

@Component({
  selector: 'app-voice-main',
  templateUrl: './voice-main.component.html',
  styleUrls: ['./voice-main.component.css']
})
export class VoiceMainComponent implements OnInit {

  constructor(public service:VoiceService) {
    this.service.init()

   }

  ngOnInit(): void {
  }


  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

}
