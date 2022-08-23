import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import html2canvas from 'html2canvas';
import { closing } from '../models/closingsheet';
import { ClosingsheetService } from '../closingsheet.service';
import { rclosing } from '../models/resultsheet';
import { bills } from '../models/bills';

@Component({
  selector: 'app-closingsheet',
  templateUrl: './closingsheet.component.html',
  styleUrls: ['./closingsheet.component.css']
})
export class ClosingsheetComponent implements OnInit {
closings:closing;
addbills:bills;
rclosings:closing;
shows:boolean=false;
hide:boolean=true;
id:number;
getdata:closing;
submit='submit';
update='Update';
sum:number=0;
@ViewChild('content',{static:false})el!:ElementRef;
@ViewChild('showsheetButton') showsheetButton: any;

  constructor(private _httpSer:ClosingsheetService,private router:Router) { 
    this.closings = new closing();
    this.rclosings = new closing();
    this.addbills = new bills();
    this.closings.addbills= [];

    this.id =0;
  }
getsheet:closing[]=[];
  ngOnInit(): void 
  {

this.closings.addbills.forEach(a => 
    {this.sum +=this.addbills.billamount});
  

console.log(this.sum);


    this._httpSer.getSheets().subscribe(
      res=>{
        console.log(res);
        this.getsheet=res;
        
      }
    );
    
  }

  // bills work
  onADD(){

    this.closings.addbills.push(this.addbills);
    console.log(this.closings.addbills);
    this.addbills=new bills();

  }

  onDelete(i:number){
    this.closings.addbills.splice(i,1);
  }
  onEdit(i:number){debugger
    this.addbills= this.closings.addbills[i];
    this.closings.addbills.splice(i,1);


  }
  
  // end bills work 
  toggle() {
    this.shows=true;
   this.hide=false;
    // CHANGE THE NAME OF THE BUTTON.
 
  }
  toggle1() {
    this.hide = true;
    this.shows=false;

    // CHANGE THE NAME OF THE BUTTON.
 
  }
  rft(){
      const cal=(this.closings.fivethousand*5000+this.closings.one*1+this.closings.onethousand*1000+this.closings.fivehundred*500+this.closings.onehundred*100
        +this.closings.fifty*50+this.closings.ten*10+this.closings.five*5+this.closings.two*2);
      return cal;
  }
  rftr(){
    const cal=(this.rclosings.fivethousand*5000+this.rclosings.one*1+this.rclosings.onethousand*1000+this.rclosings.fivehundred*500+this.rclosings.onehundred*100
      +this.rclosings.fifty*50+this.rclosings.ten*10+this.rclosings.five*5+this.rclosings.two*2);
    return cal;
}
makepdf(){
  
  let pdf = new jsPDF('p','pt','a4',false);
  
  pdf.html(this.el.nativeElement,{
    callback: (pdf)=>{
      pdf.save("demo.pdf");
    },
    x:50,
    y:0
  });
}
print(){
  let DATA = this.el.nativeElement;
  html2canvas(DATA).then(canvas => {        
    let fileWidth = 200;
    let fileHeight = canvas.height * fileWidth / canvas.width;
    
    const FILEURI = canvas.toDataURL('image/png')
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 5, 5, fileWidth, fileHeight)      
    PDF.save('angular-demo.pdf');
  });   
 }

  onSubmit()
  {
      this._httpSer.postSheet(this.closings).subscribe(
        response =>{
          
         console.log(response);
         if(response){
                 alert("data saved");
           
        }else{
          alert("error");
        }
        }
       
      );
      this.id =0;
  }
  editEmployee(item:any,id:number) {
    
    this._httpSer.getByID(item.id).subscribe(
      response=>{
        this.rclosings=response;
        console.log(id);
      }
    );
    this.showsheetButton.nativeElement.click();
  }
  editsheet(item:any,id:number) {
    
    this._httpSer.getByID(item.id).subscribe(
      response=>{
        this.closings=response;
        
        console.log(id);
      }
    );
     this.shows=false;
     this.hide=true;
    this.id = this.closings.id;
    this.showsheetButton.nativeElement.click();
  }
  
  onupdate(id:number){
    this._httpSer.updatesheet(this.closings,id).subscribe(
      res=>{
        this.closings=res;
       
        console.log(res);
        if(res){
          alert("update success");
        }else{
          alert("erorr");
        }

      }
     
    );
    this.shows=true;
   
  }
  // ongetdata(item){
  
  //   this._httpSer.getByID(item.ID).subscribe(
  //     response=>{
  //       this.closings=response;
  //       console.log(item.ID);
  //     }
  //   );
    
  // }
  onDeletesheet(i){
    if(confirm("Are you sure delete?")){
            this._httpSer.deletesheeet(i).subscribe(data=>{
              this.closings=data;
             
              alert("Successfully Delete");
              
            })
            this.getsheet.splice(i,1); 
   
  
      }
      else{
        alert("Something Went Wrong")
      }
    }
  
 

//   editEmployee(event: any) {
//     this.employees.forEach((val, ind) => {
//       if (val.id == event) {
//         this.setForm(val);
//       }
//     });
//     this.removeEmployee(event);
//     this.addEmployeeButton.nativeElement.click();
//   }
 }
