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

let cosmetics = [
  // Makeup
  {
    id: 1,
    name: "Matte Lipstick",
    category: "makeup",
    image: image1,
    hoverImage: eyeshadow,
    description: "Long-lasting matte lipstick in various shades",
    new_price: 12.99,
    old_price: 14.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 2,
    name: "Eyeshadow Palette",
    category: "makeup",
    image: eyeshadow,
    description: "Versatile eyeshadow palette with vibrant colors",
    new_price: 24.99,
    old_price: 29.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 3,
    name: "Foundation",
    category: "makeup",
    image: foundation,
    description: "Lightweight foundation for a flawless finish",
    new_price: 19.99,
    old_price: 21.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 4,
    name: "Mascara",
    category: "makeup",
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
    id: 11,
    name: "Moisturizing Cream",
    category: "skincare",
    image: Mcream,
    description: "Hydrating moisturizer for soft and supple skin",
    new_price: 29.99,
    old_price: 34.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 12,
    name: "Facial Cleanser",
    category: "skincare",
    image: cleanser,
    description: "Gentle facial cleanser for daily use",
    new_price: 14.99,
    old_price: 17.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 13,
    name: "Anti-Aging Serum",
    category: "skincare",
    image: serum,
    description: "Revitalizing anti-aging serum to reduce fine lines",
    new_price: 39.99,
    old_price: 44.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 14,
    name: "Sheet Mask Set",
    category: "skincare",
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
    id: 21,
    name: "Repairing Shampoo",
    category: "haircare",
    image: shampoo,
    description: "Nourishing shampoo for damaged hair",
    new_price: 16.99,
    old_price: 19.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 22,
    name: "Conditioning Hair Mask",
    category: "haircare",
    image: hairmask,
    description: "Deep conditioning hair mask for silky smooth locks",
    new_price: 22.99,
    old_price: 27.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 23,
    name: "Styling Gel",
    category: "haircare",
    image: gel,
    description: "Flexible hold styling gel for all-day control",
    new_price: 8.99,
    old_price: 10.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 24,
    name: "Hair Oil",
    category: "haircare",
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
    id: 31,
    name: "Eau de Parfum",
    category: "fragrance",
    image: perfume,
    description: "Luxurious eau de parfum with floral notes",
    new_price: 49.99,
    old_price: 54.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 32,
    name: "Cologne",
    category: "fragrance",
    image: colonge,
    description: "Fresh and invigorating cologne for men",
    new_price: 39.99,
    old_price: 44.99,
    newArrivals: true,
    trending: false,
  },
  {
    id: 33,
    name: "Roll-On Perfume Oil",
    category: "rollon",
    image: rollon,
    description: "Convenient roll-on perfume oil for on-the-go application",
    new_price: 12.99,
    old_price: 14.99,
    newArrivals: false,
    trending: true,
  },
  {
    id: 34,
    name: "Body Mist",
    category: "fragrance",
    image: bodymist,
    description: "Light and refreshing body mist for everyday use",
    new_price: 9.99,
    old_price: 11.99,
    newArrivals: true,
    trending: true,
  },
  // Add more fragrance products here...
];

export default cosmetics;
