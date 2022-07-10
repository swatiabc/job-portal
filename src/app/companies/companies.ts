export interface Companies {
    id: number;
    name: string;
    locationType: string;
    jobType: string;
    salary: number;
    updated_at: string;
    tags: string[];
  }

export interface CompanyTags {
    id: number;
    name: string;
    numberOfJobs: number;
  }

export interface Categories {
    id: number;
    name: string;
  }

export interface CompanyLocation {
    id: number;
    name: string;
  }