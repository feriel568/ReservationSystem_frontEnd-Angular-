import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { SalleListService } from 'src/app/Services/salle-list.service';

@Component({
  selector: 'app-all-salles-user',
  templateUrl: './all-salles-user.component.html',
  styleUrls: ['./all-salles-user.component.css']
})
export class AllSallesUserComponent {
  salles: any[] = [];
  errorMessage: string = '';
  constructor(private salleService: SalleListService  ) { }


  ngOnInit(): void {
    this.salleService.getAllSalles().subscribe(
      response => {
        if (response.success) {
          this.salles = response.data;
          console.log(this.salles);
        } else {
          this.errorMessage = 'Failed to load data';
        }
      },
      error => {
        this.errorMessage = 'Error: ' + error.message;
      }
    );
  }
}


