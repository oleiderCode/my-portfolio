import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css'],

})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() techStack: string[] = [];
  @Input() image: string = '';
  @Input() liveLink: string = '#';
  @Input() codeLink: string = '#';
}
