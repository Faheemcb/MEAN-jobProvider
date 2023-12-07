export class Job {
    jobTitle:string='';
    companyName:string='';
    location:string='';
    jobDescription='';
    jobType:string='';
    salary:number | undefined;
    onsite:string=''
  static id: any;
}
export interface addJob {
    id:string;
    title?:string;
    company:string;
    location?:string;
    description?:string;
    salary?:string;
    type?:string;
    workplace?:string;
}

