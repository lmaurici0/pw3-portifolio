import { Component, Input } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-page-eric',
  imports: [CardComponent, MatCardModule, FooterComponent],
  templateUrl: './page-eric.component.html',
  styleUrl: './page-eric.component.css'
})
export class PageEricComponent {

  picture = '../../../images/profile_pic.png';

  scrollDown(): void {
    window.scrollBy({
      top: 600,
      behavior: 'smooth'
    });
  }

}
