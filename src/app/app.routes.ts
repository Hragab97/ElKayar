import { Routes } from '@angular/router';
import { IntroComponent } from './Components/intro/intro.component';
import { ServicesComponent } from './Components/services/services.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { RfqComponent } from './Components/rfq/rfq.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    {path:'intro', title:'Intro',component:IntroComponent},
    {path:'services', title:'Services',component:ServicesComponent},
    {path:'products', title:'Products',component:ProductsComponent},
    {path:'about', title:'About',component:AboutComponent},
    {path:'rfq', title:'Request Quote',component:RfqComponent},
    {path:'contact', title:'Contact',component:ContactComponent},
];
