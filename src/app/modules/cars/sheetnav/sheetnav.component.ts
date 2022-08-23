import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sheetnav',
  templateUrl: './sheetnav.component.html',
  styleUrls: ['./sheetnav.component.css']
})
export class SheetnavComponent implements OnInit {
  // loadScript(url: string) {
  //   const body = <HTMLDivElement>document.body;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }

  
  shuffleElement:any;
  shuffleParentElement:any;
  constructor() { 
 


  }


  ngOnInit(): void {
    // this.loadScript('https://js.stripe.com/v2');
    // $.getScript('sheetnav.js');
  }


  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const shuffleWithElement =  ev.target.appendChild(document.getElementById(data));
    this.shuffleElement.previousIndex = this.shuffleElement.currentIndex;
    this.shuffleElement.currentIndex = this.shuffleElement.previousIndex;
    // this.shuffleElement.innerHTML = '';
    // this.shuffleElement.append(this.shuffleElement);
    // if(shuffleWithElement) {
    //   this.shuffleParentElement.innerHTML = '';
    //   this.shuffleParentElement.append(shuffleWithElement);
    // }
     console.log(ev.currentTarget);
     console.log( ev.currentTarget.parentElement);
     
    
  }

  allowDrop(ev) {
    ev.preventDefault();
   
  
    
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    this.shuffleElement = ev.currentTarget.id;
    this.shuffleParentElement = ev.currentTarget.parentElement.id;
  }

 

}


