import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SalleListService } from 'src/app/Services/salle-list.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-liste-salles',
  templateUrl: './liste-salles.component.html',
  styleUrls: ['./liste-salles.component.css']
})
export class ListeSallesComponent {
  salles: any[] = [];
  selectedSalle: any = null;

  errorMessage: string = '';
  successMessageDel: string = '';
  successMessageUpdate: string = '';
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private salleService: SalleListService , private router: Router ) { }

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

 
  onUpdate(salle: any): void {
    this.router.navigate(['/update-salle', salle._id]);
  }




  onDeleteSalle(id: string): void {
    this.salleService.deleteSalle(id)
      .subscribe({
        next: () => {
          this.successMessageDel = 'Salle supprimée avec succès'; // Set success message
          this.refreshData();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la salle : ', err);
          this.errorMessage = 'Une erreur s\'est produite lors de la suppression de la salle'; // Set error message
          this.refreshData();
        }
      });
  }

  refreshData(): void {
    this.salleService.getAllSalles()
      .subscribe({
        next: (data) => {
          this.salles = data;
        },
        error: (err) => {
          console.error('Erreur lors du rafraîchissement des données : ', err);
          this.errorMessage = 'Une erreur s\'est produite lors du rafraîchissement des données';
        }
      });
  } 
}
