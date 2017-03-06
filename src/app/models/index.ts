export interface Job {
       name: string;
       id: number;
       description: string;
   }

export interface Encounter {
       id: number;
       date: number;
       colonist_id: number;
       atype: string;
       action: string;
   }

export interface Alien {
       type: string;
       submitted_by: number;
       id: number;
       description: string;
   }

export class NewColonist {
       name: string;
       age: string;
       job_id: string;

       constructor(name: string, age:string, job_id:string){
           this.name = name;
           this.age = age;
           this.job_id = job_id;
       }
   }

export class NewEncounter {
   atype: string;
   date: string;
   action: string;
   colonist_id: string;

   constructor(atype: string, date: string, action: string, colonist_id: string) {
       this.atype = atype;
       this.date = date;
       this.action = action;
       this.colonist_id = colonist_id;
   }

}

export interface Colonist {
       name: string;
       id: number;
       age: number;
       job: Job;
   }
