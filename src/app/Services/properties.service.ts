import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {


  louer = [
    {
      'id': 3,
      'title': 'Marie-Victorin',

      'sellType': 'Édifice commercial',
      'adress': '336B Route Marie-Victorin',
      'city': "Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': 'https://goo.gl/maps/dxRb8PhJ2k7n7PjS7',
      'prix': "3300$/mois +TPS/TVQ",
      'nbMetreCarre': 2647,

      'AConstruction': 1957,
      'EvalMuni': "290 700$",
      'mls': 21848329,
      'urlRealtor': "https://www.realtor.ca/immobilier/20664125/d%C3%A9tail-d%C3%A9tail-336b-route-marie-victorin-saint-pierre-les-becquets",

      'size': 11,
      'url': 'assets/les_bequets/',
      'Description': ["Location d'une bâtisse commercial, grand centre du camion avec 4 garages/ateliers mécaniques avec réception, bureau et entreposage. Située au coeur du village de St-Pierre-les-Becquets. ", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [["Terrain superficie", "2 646,8 MC"]],

      'carac': [["Fondation", "Béton coulé"], ["Sous-sol", "Aucun"], ["Zonage", "Commercial"], ["Énergie pour le chauffage", "Électricité"], ["Approvisionnement en eau", "Municipalité"], ["Système d'égouts", "Inconnu"]]

    }, {
      'id': 4,
      'title': "Marie-Victorin",

      'sellType': 'Édifice commercial',
      'adress': "336A - 342 Route Marie-Victorin",
      'city': "Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': 'https://goo.gl/maps/dxRb8PhJ2k7n7PjS7',
      'prix': "3750$/mois +TPS/TVQ",
      'nbMetreCarre': 2647,

      'AConstruction': 1957,
      'EvalMuni': "290 700$",
      'mls': 26567826,
      'urlRealtor': "https://www.realtor.ca/immobilier/21001639/d%C3%A9tail-d%C3%A9tail-336a-342-route-marie-victorin-saint-pierre-les-becquets",

      'size': 17,
      'url': "assets/les_bequets_housing/",
      'Description': ["Location d'une bâtisse com6031c587719e9cdd02d6af948e7a716c322f3d55ercial, grand centre du camion avec 4 garages/ateliers mécaniques avec réception, bureau et entreposage. Située au coeur du village de St-Pierre-les-Becquets. ", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [["Terrain superficie", "2 646,8 MC"]],

      'carac': [["Fondation", "Béton coulé"], ["Sous-sol", "Aucun"], ["Zonage", "Commercial"], ["Énergie pour le chauffage", "Électricité"], ["Approvisionnement en eau", "Municipalité"], ["Système d'égouts", "Inconnu"]]

    }
  ]
  vendre = [
    {
      'id': 18,
      'title': 'Saint-Pierre-Les-Becquets',

      'sellType': 'Commercial, Résidentiel',
      'adress': '336 - 342 Route Marie-Victorin',
      'city': "336 - 342 Route Marie-Victorin, Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': 'https://goo.gl/maps/X2iEDzNTFaniTPET6',
      'prix': "349 000$",
      'nbMetreCarre': 2647,

      'EvalMuni': "290 700 $",
      'mls': 10018283,
      'urlRealtor': 'https://www.realtor.ca/immobilier/21001631/2-chambre-unifamiliale-triplex-336-342-route-marie-victorin-saint-pierre-les-becquets',

      'size': 17,
      'url': 'assets/les_bequets_housing/',
      'Description': ["Location d'une bâtisse commercial, grand centre du camion avec 4 garages/ateliers mécaniques avec réception, bureau et entreposage. Située au coeur du village de St-Pierre-les-Becquets. ", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [["Terrain superficie", "2 646,8 MC"]],

      'carac': [["Fondation", "Béton coulé"], ["Sous-sol", "Aucun"], ["Zonage", "Commercial"], ["Énergie pour le chauffage", "Électricité"], ["Approvisionnement en eau", "Municipalité"], ["Système d'égouts", "Inconnu"]]

    },{
      'id': 1,
      'title': 'Peninsula',

      'sellType': 'Maison à étages',
      'adress': '51 Ch. Peninsula',
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': 'https://www.google.com/maps?q=51+Ch.+Peninsula+J0T2B0',
      'prix': "179 000$",
      'nbChambre': 3,
      'nbSalleBain': 2,
      'nbMetreCarre': 878.9,

      'EvalMuni': "179 700 $",
      'mls': 28785090,
      'urlRealtor': 'https://www.realtor.ca/immobilier/20876769/3-chambre-unifamiliale-unifamilial-51-ch-peninsula-saint-adolphe-dhoward',

      'size': 16,
      'url': 'assets/peninsula/',
      'Description': ['Propriété situé directement sur le bord du Lac-du-Coeur,lac sans bateau moteur(gaz), la rue Peninsula est vraiment tranquille. Cette propriété possède un garage simple détaché.Certains travaux à prévoir, pour bricoleur.A 15 minutes de St-Sauveur et 10 minutes de Morin Heights.', "L'escalier arrière face au lac a été refait et le puits artésien a été remis en fonction.", 'Inclus : aucunes', "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [["Terrain superficie", "878.9 MC"], ["Terrain dim.", "28.98x36.36 M"], ["Terrain dim.", "Irrégulier"]],

      'carac': [['Particularités', "Bordé à l'eau, Embarquation sans moteur seulement"], ['Armoires', 'Bois'], ['Mode de chauffage', 'Plinthes électriques'], ['Approvisionnement en eau', 'Puits artésien'], ['Énergie pour le chauffage', 'Électricité'], ['Foyers-poêles', 'Foyer au bois'], ['Garage', 'Détaché, Simple largeur'], ['Particularités', 'Villégiature/Chalet'], ['Proximité', 'Ski alpin, Ski de fond'], ['Revêtements', 'Vinyle'], ['Stationnement', 'Extérieur, Au garage (2 places)'], ["Système d'égouts", "Champ d'épuration, Fosse septique"], ['Particularités', 'Boisé'], ['Toiture', 'Tôle'], ['Topographie', 'En pente, Plat'], ['Vue', "Sur l'eau"], ['Zonage', 'Résidentiel, Villégiature']]
    }, {
      'id': 2,
      'title': 'Calixte',

      'sellType': 'Maison de plain-pied',
      'adress': '180 Rue Dorilda',
      'city': "Saint-Calixte (Lanaudière), J0K1Z0",
      'urlMap': 'https://www.google.com/maps?q=180+Rue+Dorilda+J0K1Z0',
      'prix': "79 000$",
      'nbChambre': 2,
      'nbSalleBain': 1,
      'nbMetreCarre': 1160,

      'AConstruction': 1969,
      'EvalMuni': "56 000 $",
      'mls': 24442001,
      'urlRealtor': "https://www.realtor.ca/immobilier/20876767/2-chambre-unifamiliale-unifamilial-180-rue-dorilda-saint-calixte",

      'size': 10,
      'url': 'assets/calixte/',
      'Description': ['Joli chalet pour se reposer le week-end, près de plusieurs activités hiver comme été.', 'Nouveau revêtement de sol ( planchers flottant) 2018 Nouvelle pompe pour puits 2018 Porte extérieur avant blanche 2018 Toiture + ou- 5 ans', 'Inclus : Tout meublé, tel quel', 'Exclus : Les outils', "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [['Terrain superficie', '12486 PC'], ['Terrain dim.', '100x124 P'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Inconnu'], ["Système d'égouts", 'puits absorbant pour 2 chambres, Fosse septique'], ['Zonage', 'Résidentiel']],
    }, {
      'id': 5,
      'title': "Febvre",

      'sellType': 'Édifice commercial',
      'adress': "129 Route Marie-Victorin",
      'city': "Baie-Du-Febvre, J0G 1A0",
      'urlMap': 'https://goo.gl/maps/tjDThZQaJgDfJf89A',
      'prix': "59 000$",
      'nbMetreCarre': 2111.2,

      'AConstruction': 2007,
      'EvalMuni': "69 800$",
      'mls': 16059725,
      'urlRealtor': "https://www.realtor.ca/immobilier/20626453/d%C3%A9tail-d%C3%A9tail-129-route-marie-victorin-baie-du-febvre",

      'size': 2,
      'url': "assets/febvre/",
      'Description': ['Endroit stratégique, bâtiment commercial pour entreposage de tout genre.', "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [["Terrain superficie", "22 725 PC"], ["Terrain dim.", "302' X 62'"], ["Terrain dim.", "Irrégulier"]],

      'carac': [["Zonage", "Agricole, Commercial"], ["Énergie pour le chauffage", "Électricité"], ["Approvisionnement en eau", "Municipalité"], ["Système d'égouts", "Municipalité"]]
    }, {
      'id': 7,
      'title': "Les-Becquets",

      'sellType': 'Terrain vacant',
      'adress': "1 Route Marie-Victorin",
      'city': "Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': 'https://goo.gl/maps/cbacnPPDr3ZEE9JA7',
      'prix': "25 000$",
      'nbMetreCarre': 1045,

      'mls': 12874911,
      'urlRealtor': "https://www.realtor.ca/immobilier/20626450/terrain-vague-1-route-marie-victorin-saint-pierre-les-becquets",

      'size': 1,
      'url': "assets/marie-victorin/",
      'Description': ["Terrain asphalté. Peut être vendu avec le centre du camion (voir MLS)", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'carac': [["Zonage", "Commercial"], ["Approvisionnement en eau", "Aucun"], ["Système d'égouts", "Aucun"]]
    }, {
      'id': 8,
      'title': 'Montcalm',

      'sellType': 'Maison à étages',
      'adress': '88 - 90 Rue Principale',
      'city': "Montcalm (Laurentides), J0T2V0",
      'urlMap': 'https://goo.gl/maps/sLQ1AgZtQMZ8PKUb7',
      'prix': "90 000$",
      'nbChambre': 3,
      'nbSalleBain': 2,
      'nbMetreCarre': 552.8,

      'AConstruction': 1925,
      'EvalMuni': "115 200 $",
      'mls': 23562010,
      'urlRealtor': "https://www.realtor.ca/immobilier/20880041/3-chambre-unifamiliale-unifamilial-88-90-rue-principale-montcalm",

      'size': 8,
      'url': 'assets/montcalm/',
      'Description': ['À qui la chance !Maison unifamiliale ou Duplex en plein coeur du village de Montcalm avec un accès direct à la piste cyclable du Corridor Aérobic, 58 km de piste.Zonage résidentiel et commercial. Rénovations à prévoir', 'Inclus : aucunes', 'Exclus : aucunes', "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [['Terrain dim.', '50x119 P'], ['Terrain dim.', 'Irrégulier'], ['Batisse dim.', '29x46 P'], ['Batisse dim.', 'Irrégulier']],

      'carac': [['Mode de chauffage', 'Plinthes électriques'], ['Approvisionnement en eau', 'à vérifier, Puits artésien'], ['Énergie pour le chauffage', 'Électricité'], ['Fondation', 'Bloc de béton'], ['Particularités', 'Coin de rue'], ['Proximité', 'Piste cyclable, Ski de fond'], ['Sous-sol', 'Vide sanitaire'], ["Système d'égouts", 'puits absorbant, Fosse septique'], ['Toiture', "Bardeaux d'asphalte"], ['Topographie', 'Plat'], ['Zonage', 'Commercial, Résidentiel']],
    },
    {
      'id': 9,
      'title': 'Terrain Bequets',

      'sellType': 'Terrain commercial',
      'adress': '1 Rue Du Centre',
      'city': "Saint-Pierre-Les-Becquets, G0X 2Z0",
      'urlMap': 'https://goo.gl/maps/7vGdwBPaeyeMfr9u5',
      'prix': "35 000$",
      'nbMetreCarre': 7308,

      'EvalMuni': "30 500$",
      'mls': 14685853,
      'urlRealtor': "https://www.realtor.ca/immobilier/20626452/terrain-vague-1-rue-du-centre-saint-pierre-les-becquets",

      'size': 1,
      'url': 'assets/terrain_bequets/',
      'Description': ["Terrain asphalté idéal pour entretien d'équipement ou stationnement. Situé au coeur de St-Pierre les Becquets.", "Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],
      'Dimensions': [["Terrain superficie", "7 307,5 M2"]],

      'carac': [["Terrain", "Asphalté"], ["Topographie", "Plat"], ["Zonage", "Commercial"], ["Approvisionnement en eau", "Aucun"], ["Système d'égouts", "Aucun"]]
    }, {
      'id': 10,
      'title': "Saint-Adolphe-d'Howard",

      'sellType': 'Terrain vacant',
      'adress': '18e Avenue',
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': 'https://maps.google.com?q=%2018e%20Avenue%20J0T2B0',
      'prix': "10 000$",
      'nbMetreCarre': 1564,

      'EvalMuni': "10 800 $",
      'mls': 12097798,
      'urlRealtor': "https://www.realtor.ca/immobilier/20891425/terrain-vague-18e-avenue-saint-adolphe-dhoward",

      'size': 1,
      'url': "assets/Saint-Adolphe-d'Howard/",
      'Description': ["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'Dimensions': [['Terrain superficie', '1564 MC'], ['Terrain dim.', '45.97x35.05 M'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']]
    }, {
      'id': 11,
      'title': "Héritage",

      'sellType': 'Terrain vacant',
      'adress': "Ch. de l'Héritage",
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': 'https://maps.google.com?q=%20Ch%2E%20de%20l%27H%C3%A9ritage%20J0T2B0',
      'prix': "18 000$",
      'nbMetreCarre': 5482,

      'EvalMuni': "18 000 $",
      'mls': 11274386,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888518/terrain-vague-ch-de-lh%C3%A9ritage-saint-adolphe-dhoward",

      'size': 2,
      'url': "assets/Héritage/",
      'Description': ["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'Dimensions': [['Terrain superficie', '5482 MC'], ['Terrain dim.', '50.12x110.1 M'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Aucun'], ['Particularités', 'chemin privé, milieu humide,'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']]
    }, {
      'id': 12,
      'title': "Harel",

      'sellType': 'Terrain vacant',
      'adress': "Ch. du Lac-Harel",
      'city': "Lac-Supérieur (Laurentides), J0T1P0",
      'urlMap': 'https://maps.google.com?q=%20Ch%2E%20du%20Lac%2DHarel%20J0T1P0',
      'prix': "19 000$",
      'nbMetreCarre': 6275,

      'EvalMuni': "19 100 $",
      'mls': 27811021,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888529/terrain-vague-ch-du-lac-harel-lac-sup%C3%A9rieur",

      'size': 2,
      'url': "assets/Lac-Harel/",
      'Description': ["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'Dimensions': [['Terrain superficie', '6275 MC'], ['Terrain dim.', '65.41x95 M'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']]

    }, {
      'id': 13,
      'title': "Flamingo",

      'sellType': 'Terrain vacant',
      'adress': "Ch. Flamingo",
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': 'https://maps.google.com?q=%20Ch%2E%20Flamingo%20J0T2B0',
      'prix': "16 000$",
      'nbMetreCarre': 1591,

      'EvalMuni': "16 700 $",
      'mls': 25022339,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888524/terrain-vague-ch-flamingo-saint-adolphe-dhoward",

      'size': 1,
      'url': "assets/flamingo/",
      'Description': ["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'Dimensions': [['Terrain superficie', '1591 MC'], ['Terrain dim.', '15.24x88.7 M'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Aucun'], ["Système d'égouts", 'Aucun'], ['Particularités', 'Boisé'], ['Zonage', 'Résidentiel']]

    }, {
      'id': 14,
      'title': "Trembles",

      'sellType': 'Terrain vacant',
      'adress': "Ch. des Trembles",
      'city': "Saint-Adolphe-d'Howard (Laurentides), J0T2B0",
      'urlMap': 'https://maps.google.com?q=%20Ch%2E%20des%20Trembles%20J0T2B0',
      'prix': "18 000$",
      'nbMetreCarre': 4994,

      'EvalMuni': "18 200 $",
      'mls': 14590552,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888520/terrain-vague-ch-des-trembles-saint-adolphe-dhoward",

      'size': 2,
      'url': "assets/trembles/",
      'Description': ["Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'Dimensions': [['Terrain superficie', '4994 MC'], ['Terrain dim.', '115.98x32.19 M'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Aucun'], ['Particularités', 'Rue privée'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']]

    },{
      'id' : 15,
      'title' : "Val-Morin",
      'sellType': 'Terrain vacant',
      'adress': "22e Avenue",
      'city': "22e Avenue, Val-Morin (Laurentides), J0T2R0",
      'urlMap': 'https://maps.google.com?q=%2022e%20Avenue%20J0T2R0',
      'prix': "6 000$",
      'nbMetreCarre': 643.2,

      'EvalMuni': "13 400 $",
      'mls': 12780751,
      'urlRealtor': "https://www.realtor.ca/immobilier/20888519/terrain-vague-22e-avenue-val-morin",

      'size': 1,
      'url': "assets/vacant/",
      'Description': ["Terrain non constructible, zone humide selon l'urbaniste de la ville","Vente sans garantie légale de qualité, aux risques et périls de l'acheteur"],

      'Dimensions': [['Terrain superficie', '643.2 MC'], ['Terrain dim.', '20.6x31 M'], ['Terrain dim.', 'Irrégulier']],

      'carac': [['Approvisionnement en eau', 'Aucun'], ['Particularités', 'Rue privée'], ["Système d'égouts", 'Aucun'], ['Zonage', 'Résidentiel']]

    },{
      'id' : 16,
      'title' : "Laval Pont Viau",
      'sellType': 'Terrain vacant',
      'adress': "Boul des Laurentides",
      'city': "Laval Pont Viau, Boul des Laurentides",
      'prix': "3 500$",
      'nbMetreCarre': 40.9,

      'EvalMuni': "3 000$",
      'size': 1,
      'url': "assets/vacant/",
    },{
      'id' : 17,
      'title' : "Laval St Francois",
      'sellType': 'Terrain vacant',
      'adress': "Montee Masson",
      'city': "Laval St Francois, Montee Masson",
      'prix': "1 200$",
      'nbMetreCarre': 124.3,

      'EvalMuni': "1 500$",
      'size': 1,
      'url': "assets/vacant/",
    },{
      'id' : 18,
      'title' : "Pointe Calumet",
      'sellType': 'Terrain vacant',
      'adress': "16E avenue",
      'city': "	16E avenue, Pointe Calumet",
      'prix': "2 000$",
      'nbMetreCarre': 908,

      'EvalMuni': "2 500$",
      'size': 1,
      'url': "assets/vacant/",
    }

  ]
  
  constructor() {
  }
}
