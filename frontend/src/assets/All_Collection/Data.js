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
import image1 from "./Images/cosmetics/Limage1.webp";
import eyeshadow from "./Images/cosmetics/ESimage1.webp";
import foundation from "./Images/cosmetics/Fimage1.jpeg";
import mascara from "./Images/cosmetics/mascaraImage1.jpeg";
import Mcream from "./Images/cosmetics/MCimage.jpeg";
import cleanser from "./Images/cosmetics/FCimage1.jpeg";
import serum from "./Images/cosmetics/AASimage1.jpeg";
import mask from "./Images/cosmetics/SMSimage1.jpg";
import shampoo from "./Images/cosmetics/shampoo1.webp";
import hairmask from "./Images/cosmetics/CHMimage1.webp";
import gel from "./Images/cosmetics/HGimage1.jpeg";
import oil from "./Images/cosmetics/oilimage1.webp";
import perfume from "./Images/cosmetics/perfumeimage1.webp";
import rollon from "./Images/cosmetics/rollon1.webp";
import colonge from "./Images/cosmetics/colonge1.webp";
import bodymist from "./Images/cosmetics/bodymist1.webp";
import belt1 from "./Images/accessory/Belt.webp";
import gloves1 from "./Images/accessory/gloves1.webp";
import hat1 from "./Images/accessory/hat1.jpg";
import scarf1 from "./Images/accessory/scarf1.webp";
import sunglasses1 from "./Images/accessory/sunglasses.webp";
import wallet1 from "./Images/accessory/wallet1.webp";

let collection = [
  // Earrings
  {
    id: 1,
    name: "Silver Hoop Earrings",
    category: "jewelry",
    sub_category: "earrings",
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
    category: "jewelry",
    sub_category: "earrings",
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
    category: "jewelry",
    sub_category: "earrings",
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
    category: "jewelry",
    sub_category: "earrings",
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
    category: "jewelry",
    sub_category: "necklaces",
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
    category: "jewelry",
    sub_category: "necklaces",
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
    category: "jewelry",
    sub_category: "necklaces",
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
    category: "jewelry",
    sub_category: "rings",
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
    category: "jewelry",
    sub_category: "rings",
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
    category: "jewelry",
    sub_category: "rings",
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
    category: "jewelry",
    sub_category: "bracelets",
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
    category: "jewelry",
    sub_category: "bracelets",
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
    category: "jewelry",
    sub_category: "bracelets",
    image: Bimage3,
    description: "Extravagant diamond tennis bracelet for luxurious style",
    new_price: 999.99,
    old_price: 1199.99,
    newArrivals: true,
    trending: true,
  },

  // Add more bracelets here...

  //cosmetics

  {
    id: 111,
    name: "Matte Lipstick",
    category: "cosmetics",
    sub_category: "makeup",
    image: image1,
    hoverImage: eyeshadow,
    description: "Long-lasting matte lipstick in various shades",
    new_price: 12.99,
    old_price: 14.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 212,
    name: "Eyeshadow Palette",
    category: "cosmetics",
    sub_category: "makeup",
    image: eyeshadow,
    description: "Versatile eyeshadow palette with vibrant colors",
    new_price: 24.99,
    old_price: 29.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 233,
    name: "Foundation",
    category: "cosmetics",
    sub_category: "makeup",
    image: foundation,
    description: "Lightweight foundation for a flawless finish",
    new_price: 19.99,
    old_price: 21.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 234,
    name: "Mascara",
    category: "cosmetics",
    sub_category: "makeup",
    image: mascara,
    description: "Lengthening mascara for voluminous lashes",
    new_price: 9.99,
    old_price: 12.99,
    newArrivals: true,
    trending: true,
  },
  // Add more makeup products here...

  // Skincare
  {
    id: 114,
    name: "Moisturizing Cream",
    category: "cosmetics",
    sub_category: "skincare",
    image: Mcream,
    description: "Hydrating moisturizer for soft and supple skin",
    new_price: 29.99,
    old_price: 34.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 142,
    name: "Facial Cleanser",
    category: "cosmetics",
    sub_category: "skincare",
    image: cleanser,
    description: "Gentle facial cleanser for daily use",
    new_price: 14.99,
    old_price: 17.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 135,
    name: "Anti-Aging Serum",
    category: "cosmetics",
    sub_category: "skincare",
    image: serum,
    description: "Revitalizing anti-aging serum to reduce fine lines",
    new_price: 39.99,
    old_price: 44.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 124,
    name: "Sheet Mask Set",
    category: "cosmetics",
    sub_category: "skincare",
    image: mask,
    description: "Set of hydrating sheet masks for a spa-like experience",
    new_price: 19.99,
    old_price: 24.99,
    newArrivals: true,
    trending: true,
  },
  // Add more skincare products here...

  // Haircare
  {
    id: 241,
    name: "Repairing Shampoo",
    category: "cosmetics",
    sub_category: "haircare",
    image: shampoo,
    description: "Nourishing shampoo for damaged hair",
    new_price: 16.99,
    old_price: 19.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 522,
    name: "Conditioning Hair Mask",
    category: "cosmetics",
    sub_category: "haircare",
    image: hairmask,
    description: "Deep conditioning hair mask for silky smooth locks",
    new_price: 22.99,
    old_price: 27.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 2213,
    name: "Styling Gel",
    category: "cosmetics",
    sub_category: "haircare",
    image: gel,
    description: "Flexible hold styling gel for all-day control",
    new_price: 8.99,
    old_price: 10.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 214,
    name: "Hair Oil",
    category: "cosmetics",
    sub_category: "haircare",
    image: oil,
    description: "Nourishing hair oil for added shine and hydration",
    new_price: 15.99,
    old_price: 18.99,
    newArrivals: true,
    trending: true,
  },
  // Add more haircare products here...

  // Fragrance
  {
    id: 341,
    name: "Eau de Parfum",
    category: "cosmetics",
    sub_category: "fragrance",
    image: perfume,
    description: "Luxurious eau de parfum with floral notes",
    new_price: 49.99,
    old_price: 54.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 312,
    name: "Cologne",
    category: "cosmetics",
    sub_category: "fragrance",
    image: colonge,
    description: "Fresh and invigorating cologne for men",
    new_price: 39.99,
    old_price: 44.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 133,
    name: "Roll-On Perfume Oil",
    category: "cosmetics",
    sub_category: "rollon",
    image: rollon,
    description: "Convenient roll-on perfume oil for on-the-go application",
    new_price: 12.99,
    old_price: 14.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 343,
    name: "Body Mist",
    category: "cosmetics",
    sub_category: "fragrance",
    image: bodymist,
    description: "Light and refreshing body mist for everyday use",
    new_price: 9.99,
    old_price: 11.99,
    newArrivals: true,
    trending: true,
  },
  // Add more fragrance products here...

  //accessories
  {
    id: 1000,
    name: "Leather Belt",
    category: "accessories",
    sub_category: "belts",
    image: belt1,
    description: "Classic leather belt for a stylish look",
    new_price: 39.99,
    old_price: 44.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 1001,
    name: "Aviator Sunglasses",
    category: "accessories",
    sub_category: "sunglasses",
    image: sunglasses1,
    description: "Iconic aviator sunglasses for a cool vibe",
    new_price: 49.99,
    old_price: 54.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 1002,
    name: "Leather Wallet",
    category: "accessories",
    sub_category: "wallets",
    image: wallet1,
    description: "Sleek leather wallet with multiple compartments",
    new_price: 29.99,
    old_price: 34.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 1003,
    name: "Silk Scarf",
    category: "accessories",
    sub_category: "scarves",
    image: scarf1,
    description: "Luxurious silk scarf for added elegance",
    new_price: 19.99,
    old_price: 24.99,
    newArrivals: true,
    trending: true,
  },
  {
    id: 1004,
    name: "Beanie Hat",
    category: "accessories",
    sub_category: "hats",
    image: hat1,
    description: "Warm and cozy beanie hat for cold days",
    new_price: 14.99,
    old_price: 19.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 1005,
    name: "Leather Gloves",
    category: "accessories",
    sub_category: "gloves",
    image: gloves1,
    description: "Stylish leather gloves for a sophisticated touch",
    new_price: 34.99,
    old_price: 39.99,
    newArrivals: true,
    trending: false,
  },
];

export default collection;
