import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [InputComponent, ButtonComponent],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}

