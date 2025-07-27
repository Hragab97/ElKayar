import { Component } from '@angular/core';
import { SearchPipe } from '../../Pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {

  searchCeramicsGlass: string = "";
  searchIndustrialChemicalsDetergentsFertilizers: string = "";
  searchPharmaceuticalFoodFeedadditives: string = "";

  ceramicsGlass: String[] = [
    "Aluminum Oxide",
    "Aluminum Hydroxide",
    "Antimony Trioxide",
    "Arsenic Trioxide",
    "Barium Carbonate",
    "Barium Sulphate",
    "Boric Acid",
    "Borax Decahydrate",
    "Borax Pentahydrate",
    "Cobalt Oxide",
    "Colemanite",
    "Eticol",
    "Lithium Carbonate / hydroxide",
    "Potassium Carbonate",
    "Soda Ash Dense / Light",
    "Sodium Metabisulphate",
    "Sodium Tripolyphosphate",
    "Zirconium Silicate",
  ]

  industrialChemicalsDetergentsFertilizers: String[] = [
    "Acetic Acid Glacial 99%",
    "Boric Acid",
    "Borax Decahydrate",
    "Borax Pentahydrate",
    "Castor oil",
    "Caustic Soda",
    "Citric Acid Monohydrate / Anhydrous",
    "CMC (Carboxymethyl cellulose)",
    "Glycerin",
    "Hydrogenated Castor oil",
    "Mono Ammonium phosphate",
    "Mono potassium phosphate",
    "Potassium Hydroxide",
    "Phosphoric acid",
    "Potassium Carbonate",
    "Soda Ash Dense / Light",
    "Sodium Sulphate Anhydrous",
    "Sodium Perborate tetra / mono",
    "Sodium Percarbonate",
  ]

  pharmaceuticalFoodFeedadditives: String[] = [
    "Ammonium Bicarbonate",
    "Ascorbic Acid",
    "Castor oil",
    "Calcium Chloride",
    "Citric Acid Monohydrate / Anhydrous",
    "Mentol crystal",
    "Potassium Carbonate",
    "Sodium Bicarbonate",
    "Sodium Benzoate",
    "Vanillin Crystal",
  ]

}
