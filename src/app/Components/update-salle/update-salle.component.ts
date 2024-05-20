import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleListService } from 'src/app/Services/salle-list.service';

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrls: ['./update-salle.component.css']
})
export class UpdateSalleComponent implements OnInit {
  salle: any = {};
  errorMessage: string = '';
  successMessageUpdate: string = '';

  constructor(
    private route: ActivatedRoute,
    private salleService: SalleListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.salleService.getSalleById(id).subscribe(
        response => {
          if (response.success) {
            this.salle = response.data;
          } else {
            this.errorMessage = 'Failed to load salle';
          }
        },
        error => {
          this.errorMessage = 'Error: ' + error.message;
        }
      );
    } else {
      this.errorMessage = 'Invalid salle ID';
    }
  }

  onSubmitUpdate(): void {
    if (this.salle && this.salle._id) {
      this.salleService.updateSalle(this.salle._id, this.salle).subscribe(
        () => {
          this.successMessageUpdate = 'Salle mise à jour avec succès';
          this.router.navigate(['/liste-salles']); 
        },
        error => {
          console.error('Error updating salle:', error);
          this.errorMessage = 'Error updating salle';
        }
      );
    }
  }
}
