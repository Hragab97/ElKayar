import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {

  glassDetergentsCeramics:String[] = [
    "Aluminum Oxide / Hydrate",
    "Aluminum Sulfide",
    "Antimony Trioxide",
    "Arsenic Trioxide",
    "Arsenic Trioxide",
    "Borax Decahydrate",
    "Borax Pentahydrate",
    "Boric Acid",
    "Caustic Soda",
    "CMC",
    "Cobalt Oxide",
    "Lithium Carbonate / Hydroxide",
    "Nickel Oxide",
    "Potassium Nitrate",
    "Rare Earth",
    "Soda ash Light /Dense",
    "Sodium Laurly Ether Sulphate",
    "Sodium Perborate Tetrahydrate / Monohydrate",
    "Sodium Sulphate Anhydrous",
    "Sodium Tri-polyphosphate",
    "Tri Sodium Phosphate",
    "Zinc Oxide 99% / 99.5% / 99.7% / 99.9%",
    "Zirconium Silicate",
  ]

  foodIndustries:String[] = [
    "Ammonium Bicarbonate",
    "Ascorbic Acid",
    "Castor Oil / Hydrogenated castor oil",
    "Citric Acid",
    "Glacial Acetic Acid",
    "Glycerin",
    "Magnesium Oxide",
    "Menthol Crystal",
    "Mono Ammonium Phosphate",
    "Mono Potassium Phosphate",
    "Oleic Acid",
    "Paraffin Wax",
    "Pepper Mint Oil",
    "Phosphoric Acid",
    "Potassium Bichromate",
    "Potassium Carbonate",
    "Potassium Hydroxide",
    "Potassium Sorbate",
    "Potassium Sulphate",
    "Shellac",
    "Sodium Benzoate",
    "Sodium Bicarbonate",
    "Sodium Hexametaphosphate",
    "Sodium Metabisulphate",
    "Sodium Metasilicate (Penta)",
    "Sodium Nitrite",
    "Stearic Acid",
    "Ultramarine Blue",
    "Vanillin Crystal",
    "White Petrolleum Jelly",
  ]

  paintIndustries:String[] = [
    "Alkyd resin 100% & 70%",
    "Aluminum Paste",
    "Barium Sulfate 98% Min",
    "Chrome yellow",
    "Gum Rosin",
    "Gum Turpentine",
    "Hydro Carbon resin",
    "Iron Oxide Red",
    "Iron Oxide Yellow",
    "Linseed Oil",
    "Lithopone 28-30%",
    "Polyvinyl Acetate",
    "Titanium Anatase",
    "Titanium Dioxide Rutile",
    "Zinc Chromate",
  ]

}
