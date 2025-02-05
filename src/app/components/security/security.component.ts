import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  standalone: true,
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  sanitizedContent: SafeHtml | undefined;

  constructor(private sanitizer:DomSanitizer){

  }

  update(input:string){
this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(input);
  }

}
