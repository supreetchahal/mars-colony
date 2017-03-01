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

export interface Alients {
       type: string;
       submitted_by: number;
       id: number;
       description: string;
   }

export class NewColonist {
       name: string;
       age: number;
       job_id: Job;
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
