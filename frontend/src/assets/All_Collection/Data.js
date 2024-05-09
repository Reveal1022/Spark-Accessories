import Eimage1 from "./Images/accesories/Eimage1.jpeg";
import Eimage2 from "./Images/accesories/Eimage2.jpeg";
import Eimage3 from "./Images/accesories/Eimage3.webp";
import Eimage4 from "./Images/accesories/Eimage4.webp";
import Nimage1 from "./Images/accesories/Nimage1.webp";
import Nimage2 from "./Images/accesories/Nimage2.webp";
import Nimage3 from "./Images/accesories/Nimage3.jpeg";
import Rimage1 from "./Images/accesories/Rimage1.jpeg";
import Rimage2 from "./Images/accesories/Rimage2.webp";
import Rimage3 from "./Images/accesories/Rimage3.jpeg";
import Bimage1 from "./Images/accesories/Bimage1.webp";
import Bimage2 from "./Images/accesories/Bimage2.webp";
import Bimage3 from "./Images/accesories/Bimage3.webp";

let collection = [
  // Earrings
  {
    id: 1,
    name: "Silver Hoop Earrings",
    category: "earrings",
    image: Eimage1,
    description: "Classic silver hoop earrings for everyday wear",
    new_price: 25.99,
    old_price: 29.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 2,
    name: "Crystal Stud Earrings",
    category: "earrings",
    image: Eimage2,
    description: "Elegant crystal stud earrings suitable for formal occasions",
    new_price: 19.99,
    old_price: 24.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 3,
    name: "Gold Dangle Earrings",
    category: "earrings",
    image: Eimage3,
    description: "Chic gold dangle earrings with intricate design",
    new_price: 34.99,
    old_price: 39.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 4,
    name: "Pearl Drop Earrings",
    category: "earrings",
    image: Eimage4,
    description: "Timeless pearl drop earrings for a touch of sophistication",
    new_price: 29.99,
    old_price: 34.99,
    newArrivals: true,
    trending: true,
  },
  // Add more earrings here...

  // Necklaces
  {
    id: 16,
    name: "Silver Chain Necklace",
    category: "necklaces",
    image: Nimage1,
    description: "Simple silver chain necklace for everyday wear",
    new_price: 39.99,
    old_price: 44.99,
    newArrivals: false,
    trending: false,
  },
  {
    id: 17,
    name: "Pearl Pendant Necklace",
    category: "necklaces",
    image: Nimage2,
    description: "Classic pearl pendant necklace for a touch of elegance",
    new_price: 49.99,
    old_price: 54.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 18,
    name: "Gold Choker Necklace",
    category: "necklaces",
    image: Nimage3,
    description: "Trendy gold choker necklace for a modern look",
    new_price: 29.99,
    old_price: 34.99,
    newArrivals: true,
    trending: false,
  },
  // Add more necklaces here...

  // Rings
  {
    id: 31,
    name: "Diamond Engagement Ring",
    category: "rings",
    image: Rimage1,
    description: "Exquisite diamond engagement ring for the special moment",
    new_price: 599.99,
    old_price: 699.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 32,
    name: "Rose Gold Wedding Band",
    category: "rings",
    image: Rimage2,
    description: "Elegant rose gold wedding band for timeless love",
    new_price: 199.99,
    old_price: 249.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 33,
    name: "Sapphire Cocktail Ring",
    category: "rings",
    image: Rimage3,
    description: "Stunning sapphire cocktail ring for glamorous nights",
    new_price: 179.99,
    old_price: 199.99,
    newArrivals: false,
    trending: true,
  },
  // Add more rings here...

  // Bracelets
  {
    id: 46,
    name: "Silver Charm Bracelet",
    category: "bracelets",
    image: Bimage1,
    description: "Charming silver bracelet adorned with meaningful charms",
    new_price: 49.99,
    old_price: 54.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 47,
    name: "Gold Bangle Bracelet",
    category: "bracelets",
    image: Bimage2,
    description: "Classic gold bangle bracelet for a touch of sophistication",
    new_price: 69.99,
    old_price: 79.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 48,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    image: Bimage3,
    description: "Extravagant diamond tennis bracelet for luxurious style",
    new_price: 999.99,
    old_price: 1199.99,
    newArrivals: true,
    trending: true,
  },

  // Add more bracelets here...
];

export default collection;
