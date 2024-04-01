// all images imported from images directory
import product_01_image_01 from "../images/p1.png";
import product_01_image_02 from "../images/p3.png";


import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";


import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";


import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";


import product_05_image_01 from "../images/p2.png";
import product_05_image_02 from "../images/p4.png";


import product_06_image_01 from "../images/p5.png";
import product_06_image_02 from "../images/p6.png";
import product_06_image_03 from "../images/p7.png";

import product_06_image_04 from "../images/p8.png";


const products = [
  {
    id: "01",
    title: "Couscous Marocain 🇲🇦",
    price: 45.00,
    image01: product_01_image_01,
   
    category: "Plat nord Africain",

    desc: "Savourez le délicieux Couscous Marocain de Global Bites, préparé avec soin en utilisant des ingrédients authentiques du Maroc. Un plat qui vous transporte directement dans les ruelles parfumées de Marrakech.",
  },

  {
    id: "02",
    title: "Pizza Végétarienne 🇮🇹",
    price: 30.0,
    image01: product_02_image_01,
   
    category: "Pizza",

    desc: "Découvrez notre délicieuse Pizza Végétarienne, une explosion de saveurs avec une généreuse garniture de légumes frais. Un festin végétarien qui ravira vos papilles à chaque bouchée.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita 🇮🇹",
    price: 25.0,
    image01: product_03_image_01,
 
    category: "Pizza",

    desc: "La Double Cheese Margherita de Global Bites est une symphonie de fromages délicieusement fondants sur une base de pâte moelleuse. Un classique italien qui vous fera succomber à chaque dégustation.",
  },

  {
    id: "04",
    title: "Vague Verte Mexicaine 🇲🇽",
    price: 30.0,
    image01: product_04_image_01,

    category: "Pizza",

    desc: "Laissez-vous emporter par les saveurs de la Vague Verte Mexicaine, une pizza qui marie harmonieusement les épices mexicaines avec des ingrédients frais. Une expérience gustative unique en son genre.",
  },

  {
    id: "05",
    title: "Couscous Algérien 🇩🇿",
    price: 44.0,
    image01: product_05_image_01,
  
    category: "Plat nord Africain",

    desc: "Dégustez le succulent Couscous Algérien de Global Bites, préparé avec soin en respectant les traditions culinaires algériennes. Une expérience gastronomique qui éveillera vos sens.",
  },
  {
    id: "06",
    title: "Couscous Tunisien 🇹🇳",
    price: 46.0,
    image01: product_01_image_02,
 
    category: "Plat nord Africain",

    desc: "Savourez l'authentique Couscous Tunisien de Global Bites, préparé avec des ingrédients de première qualité. Une explosion de saveurs méditerranéennes qui vous transporte directement en Tunisie.",
  },

  {
    id: "07",
    title: "Pizza aux Fruits de Mer 🇮🇹",
    price: 40.0,
    image01: product_02_image_02,
    
    category: "Pizza",

    desc: "Notre Pizza aux Fruits de Mer vous offre une expérience gastronomique maritime, avec une sélection de fruits de mer frais et savoureux. Une délicieuse escapade culinaire.",
  },

  {
    id: "08",
    title: "Pizza au Fromage Fin 🇮🇹",
    price: 24.0,
    image01: product_03_image_02,
 
    category: "Pizza",

    desc: "La Pizza au Fromage Fin de Global Bites est une création délicate avec une garniture légère de fromage sur une base de pâte fine. Un choix parfait pour les amateurs de simplicité et de saveurs raffinées.",
  },

  {
    id: "09",
    title: "Pizza aux Champignons 🇮🇹",
    price: 25.0,
    image01: product_04_image_02,
   
    category: "Pizza",

    desc: "Découvrez notre Pizza aux Champignons, une combinaison parfaite de champignons savoureux et de fromage fondant. Une option délicieuse pour les amateurs de saveurs terre-mer.",
  },

  {
    id: "10",
    title: "Foul Mudammas 🇪🇬",
    price: 19.0,
    image01: product_05_image_02,

    category: "Plat nord Africain",

    desc: "Plongez dans la richesse culinaire de l'Égypte avec notre Foul Mudammas, préparé avec soin et garni d'épices authentiques. Une expérience gustative qui vous transporte au cœur de la cuisine égyptienne.",
  },

  {
    id: "11",
    title: "Bol Thaï 🇹🇭",
    price: 20.0,
    image01: product_06_image_01,
  
    category: "Plat asiatique",

    desc: "Découvrez le délicieux Bol Thaï de Global Bites, une fusion parfaite de saveurs thaïlandaises authentiques. Un plat qui vous transporte directement dans les rues animées de Bangkok.",
  },

  {
    id: "12",
    title: "Ramen 🇯🇵",
    price: 25.0,
    image01: product_06_image_02,
    

    category: "Plat asiatique",

    desc: "Laissez-vous séduire par notre Ramen japonais, préparé avec des ingrédients de qualité et des saveurs authentiques. Un classique japonais qui ravira vos papilles à chaque dégustation.",
  },

  {
    id: "13",
    title: "Assiette Japonaise 🇯🇵",
    price: 39.99,
    image01: product_06_image_03,
   
    category: "Plat asiatique",

    desc: "Découvrez l'authenticité de la cuisine japonaise avec notre Assiette Japonaise, une sélection exquise de plats traditionnels. Une expérience culinaire qui vous transporte directement au Japon.",
  },
  {
    id: "14",
    title: "Cari rouge 🇹🇭",
    price: 29.99,
    image01: product_06_image_04,
   
    category: "Plat asiatique",

    desc: "Découvrez l'authenticité de la cuisine thaïlandaise avec notre Assiette Thaïlandaise, une sélection délicieuse de plats traditionnels. Un voyage culinaire qui vous transporte directement au cœur de la Thaïlande.",
  },
];

export default products;