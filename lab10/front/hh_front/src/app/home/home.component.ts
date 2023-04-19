import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  vacancies : Vacancy[];
  companies : Company[];
  showCompanyInfo : boolean;

  curCompany !: Company;

  constructor(private vacancyService : VacancyService,
      private companyService : CompanyService
    ){
    this.vacancies = []
    this.companies = []
    this.showCompanyInfo = false;

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.companyService.getCompanies().subscribe((data) => {
      console.log(data);
      this.companies = data;
    })

    this.vacancyService.getVacancies().subscribe((data) => {
      this.vacancies = data;
      console.log(this.vacancies)
    })


  }
  getCompanyVacancies = (id:number) => {
    this.vacancyService.getVacanciesByCompany(id).subscribe((data) => {
      this.vacancies = data;
      console.log(data);
    })
  }

  toggleCompanyInfo = (id:number) => {
    this.showCompanyInfo = true;

    this.companyService.getCompany(id).subscribe((data) => {
      this.curCompany = data;
    })
  }
}
