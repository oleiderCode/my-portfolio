import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.css',
  standalone: false
})
export class AppFooterComponent {
  constructor(private clipboard: Clipboard) {}

  readonly mail: string = environment.mail;
  readonly githubUrl: string = environment.githubUrl;
  readonly linkedinUrl: string = environment.linkedinUrl;

  copied = false;

  copyToClipboard(): void {
    this.clipboard.copy(this.mail);
    this.copied = true;

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
      this.copied = false;
    }, 10000);
  }

}
