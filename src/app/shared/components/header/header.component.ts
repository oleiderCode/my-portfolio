import {  Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'component-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  standalone: false

})
export class HeaderComponent {
  // public gitHubUrl:string="https://github.com/argenismahath"
  readonly githubUrl: string = environment.githubUrl;
  readonly linkedinUrl: string = environment.linkedinUrl;
}
