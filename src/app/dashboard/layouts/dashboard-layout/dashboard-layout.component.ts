import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  standalone: false,
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );

  //las propiedades computadas son de solo lectura
  public user = computed( () => this.authService.currentUser() );

  //Esta es otra forma
 /*  get user() {
    return this.authService.currentUser();
  } */

}
