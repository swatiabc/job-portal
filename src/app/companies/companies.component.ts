import { Component, OnInit } from '@angular/core';
import { Categories, Companies, CompanyLocation, CompanyTags } from './companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Companies[] = [{
    id: 1,
    name: "payu",
    locationType: "remote",
    jobType: "full time",
    salary: 10000,
    updated_at: "10/12/2022",
    tags: ["qwerty1", "qwerty2", "qwerty3"]
  },
  {
    id: 2,
    name: "payu2",
    locationType: "remote2",
    jobType: "part time",
    salary: 20000,
    updated_at: "10/12/2022",
    tags: ["qwerty1", "qwerty2", "qwerty3"]
  }]

  companyTags: CompanyTags[] = [
    {
      id: 1,
      name: "software developer",
      numberOfJobs: 5
    },
    {
      id: 2,
      name: "Quality Assirance",
      numberOfJobs: 3
    }
  ]

  categories: Categories[] = [
    {
      id: 1,
      name: "Backend",
    },
    {
      id: 2,
      name: "Frontend",
    }
  ]

  locations: CompanyLocation[] = [
    {
      id: 1,
      name: "Bangalore",
    },
    {
      id: 2,
      name: "Mumbai",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
