import { bills } from "./bills";
import { officeexpense } from "./officeexpense";
import { visacards } from "./visacards";

export class closing{
    id: number;
    name:string;
    fivethousand:number=0;
   onethousand:number=0;
   fivehundred:number=0;
   onehundred:number=0;
   fifty:number=0;
   ten:number=0;
   five:number=0;
   two:number=0;
   one:number=0;
   Date:string;
   tillno:number;
   Day:string;
   addbills:bills[]=[];
   office:officeexpense[]=[];
   visacardsdetail:visacards[]=[];

}