import { EmployeeDepartment } from "./employeedepatment";


export class IEmployee{
    ID: number;
    Name:string;
    Age:number;
    Email:string;
    Phone:string;
    Address:string;
    Department:Array<EmployeeDepartment>;
   

}