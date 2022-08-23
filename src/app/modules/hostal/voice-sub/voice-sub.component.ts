import { Component, OnInit } from '@angular/core';
// import {
//   ColorGrammar
// } from './sub.component.grammar';
// import {
//   SpeechRecognitionLang,
//   SpeechRecognitionMaxAlternatives,
//   SpeechRecognitionGrammars,
//   SpeechRecognitionService,
// } from '../../../../../projects/ngx-speech-recognition-test/src/public_api';
@Component({
  selector: 'app-voice-sub',
  templateUrl: './voice-sub.component.html',
  styleUrls: ['./voice-sub.component.css'],
//   providers: [
//     // Dependency Inject to SpeechRecognitionService
//     // like this.
//     {
//         provide: SpeechRecognitionLang,
//         useValue: 'en-US',
//     }, {
//         provide: SpeechRecognitionMaxAlternatives,
//         useValue: 1,
//     }, {
//         provide: SpeechRecognitionGrammars,
//         useValue: ColorGrammar,
//     },
//     SpeechRecognitionService,
// ],
})
export class VoiceSubComponent {

//   public started = false;
//     public message = '';
//     constructor(private vouice: SpeechRecognitionService) {
//         // Dependency The injected services are displayed on the console.
//         // Dependence was resolved from SubComponent's provider.
//         this.vouice.onstart = (e) => {
//             console.log('voice start');
//         };
//         this.service.onresult = (e) => {
//             this.message = e.results[0].item(0).transcript;
//             console.log('voice message result', this.message, e);
//         };
//     }
//     start() {
//         this.started = true;
//         this.service.start();
//     }
//     stop() {
//         this.started = false;
//         this.service.stop();
//     }
 }
