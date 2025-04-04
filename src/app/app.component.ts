import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageEricComponent } from "./components/pages/page-eric/page-eric.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [PageEricComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apresentacaoEric';
}
