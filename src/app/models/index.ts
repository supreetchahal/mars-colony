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
       date: number;
       atype: string;
       action: string;
       colonist_id: number;
   }

export interface Colonist {
       name: string;
       id: number;
       age: number;
       job: Job;
   }
