import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesComponent } from "./Components/services/services.component";
import { IntroComponent } from "./Components/intro/intro.component";
import { ProductsComponent } from "./Components/products/products.component";
import { AboutComponent } from "./Components/about/about.component";
import { RfqComponent } from "./Components/rfq/rfq.component";
import { ContactComponent } from "./Components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, ServicesComponent, IntroComponent, ProductsComponent, AboutComponent, RfqComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Kayar';
}
