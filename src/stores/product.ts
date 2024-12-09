import { defineStore } from "pinia";
import { IProduct } from "@/types";

interface IState {
  products: IProduct[];
}

export const useProductStore = defineStore("product", {
  state: (): IState => ({
    products: [
      {
        id: "NH001",
        name: "Dior Sauvage EDP",
        gender: "men",
        season: "spring",
        quantity: 50,
        image: "Dior Sauvage EDP.png",
        prices: [
          {
            capacity: 10,
            price: 440000,
          },
          {
            capacity: 20,
            price: 780000,
          },
          {
            capacity: 50,
            price: 1950000,
          },
          {
            capacity: 100,
            price: 4000000,
          },
        ],
        slug: "dior-sauvage-edp",
      },
      {
        id: "NH002",
        name: "Dior Sauvage EDT",
        gender: "men",
        season: "summer",
        quantity: 50,
        image: "Dior Sauvage EDT.png",
        prices: [
          {
            capacity: 10,
            price: 420000,
          },
          {
            capacity: 20,
            price: 740000,
          },
          {
            capacity: 50,
            price: 1850000,
          },
          {
            capacity: 100,
            price: 3800000,
          },
        ],
        slug: "dior-sauvage-edt",
      },
      {
        id: "NH003",
        name: "Saint Laurent YVES",
        gender: "men",
        season: "fall",
        quantity: 50,
        image: "Saint Laurent YVES.png",
        prices: [
          {
            capacity: 10,
            price: 240000,
          },
          {
            capacity: 20,
            price: 380000,
          },
          {
            capacity: 50,
            price: 950000,
          },
          {
            capacity: 100,
            price: 2000000,
          },
        ],
        slug: "saint-laurent-yves",
      },
      {
        id: "NH004",
        name: "Versace Blue",
        gender: "men",
        season: "winter",
        quantity: 50,
        image: "Versace Blue.png",
        prices: [
          {
            capacity: 10,
            price: 600000,
          },
          {
            capacity: 20,
            price: 1100000,
          },
          {
            capacity: 50,
            price: 2750000,
          },
        ],
        slug: "versace-blue",
      },
      {
        id: "NH005",
        name: "Giorgio Black",
        gender: "men",
        season: "spring",
        quantity: 50,
        image: "Giorgio Black.png",
        prices: [
          {
            capacity: 10,
            price: 380000,
          },
          {
            capacity: 20,
            price: 660000,
          },
          {
            capacity: 50,
            price: 1650000,
          },
        ],
        slug: "giorgio-black",
      },
      {
        id: "NH006",
        name: "Dolce & Gabbana White",
        gender: "men",
        season: "summer",
        quantity: 50,
        image: "Dolce & Gabbana White.png",
        prices: [
          {
            capacity: 10,
            price: 476000,
          },
          {
            capacity: 20,
            price: 852000,
          },
        ],
        slug: "dolce-gabbana-white",
      },
      {
        id: "NH007",
        name: "Maison Francis",
        gender: "men",
        season: "fall",
        quantity: 50,
        image: "Maison Francis.png",
        prices: [
          {
            capacity: 10,
            price: 240000,
          },
          {
            capacity: 20,
            price: 380000,
          },
          {
            capacity: 50,
            price: 950000,
          },
        ],
        slug: "maison-francis",
      },
      {
        id: "NH008",
        name: "Giorgio White",
        gender: "men",
        season: "winter",
        quantity: 50,
        image: "Giorgio White.png",
        prices: [
          {
            capacity: 10,
            price: 400000,
          },
          {
            capacity: 20,
            price: 700000,
          },
          {
            capacity: 50,
            price: 1750000,
          },
        ],
        slug: "giorgio-white",
      },
      {
        id: "NH009",
        name: "Dolce & Gabbana Brown",
        gender: "men",
        season: "spring",
        quantity: 50,
        image: "Dolce & Gabbana Brown.png",
        prices: [
          {
            capacity: 10,
            price: 300000,
          },
          {
            capacity: 20,
            price: 500000,
          },
        ],
        slug: "dolce-gabbana-brown",
      },
      {
        id: "NH010",
        name: "Jean Paul Gaultier ",
        gender: "men",
        season: "summer",
        quantity: 50,
        image: "Jean Paul Gaultier .png",
        prices: [
          {
            capacity: 10,
            price: 440000,
          },
          {
            capacity: 20,
            price: 780000,
          },
        ],
        slug: "jean-paul-gaultier",
      },
      {
        id: "NH011",
        name: "Ralph Laurent ",
        gender: "men",
        season: "fall",
        quantity: 50,
        image: "Ralph Laurent .png",
        prices: [
          {
            capacity: 10,
            price: 180000,
          },
          {
            capacity: 20,
            price: 260000,
          },
        ],
        slug: "ralph-laurent",
      },
      {
        id: "NH012",
        name: "Moschino Black",
        gender: "men",
        season: "winter",
        quantity: 50,
        image: "Moschino Black.png",
        prices: [
          {
            capacity: 10,
            price: 360000,
          },
          {
            capacity: 20,
            price: 620000,
          },
        ],
        slug: "moschino-black",
      },
      {
        id: "NH013",
        name: "Narciso Rodriguez",
        gender: "women",
        season: "spring",
        quantity: 50,
        image: "Narciso Rodriguez.png",
        prices: [
          {
            capacity: 10,
            price: 480000,
          },
          {
            capacity: 20,
            price: 860000,
          },
        ],
        slug: "narciso-rodriguez",
      },
      {
        id: "NH014",
        name: "Chanel Coco EDP",
        gender: "women",
        season: "summer",
        quantity: 50,
        image: "Chanel Coco EDP.png",
        prices: [
          {
            capacity: 10,
            price: 360000,
          },
          {
            capacity: 20,
            price: 620000,
          },
          {
            capacity: 50,
            price: 1550000,
          },
        ],
        slug: "chanel-coco-edp",
      },
      {
        id: "NH015",
        name: "Dior Miss Dior",
        gender: "women",
        season: "fall",
        quantity: 50,
        image: "Dior Miss Dior.png",
        prices: [
          {
            capacity: 10,
            price: 476000,
          },
          {
            capacity: 20,
            price: 852000,
          },
          {
            capacity: 50,
            price: 2130000,
          },
          {
            capacity: 100,
            price: 4360000,
          },
        ],
        slug: "dior-miss-dior",
      },
      {
        id: "NH016",
        name: "Versace Pink",
        gender: "women",
        season: "winter",
        quantity: 50,
        image: "Versace Pink.png",
        prices: [
          {
            capacity: 10,
            price: 240000,
          },
          {
            capacity: 20,
            price: 380000,
          },
        ],
        slug: "versace-pink",
      },
      {
        id: "NH017",
        name: "Saint Laurent EDP",
        gender: "women",
        season: "spring",
        quantity: 50,
        image: "Saint Laurent EDP.png",
        prices: [
          {
            capacity: 10,
            price: 480000,
          },
          {
            capacity: 20,
            price: 860000,
          },
        ],
        slug: "saint-laurent-edp",
      },
      {
        id: "NH018",
        name: "Armaf Woman EDP",
        gender: "women",
        season: "summer",
        quantity: 50,
        image: "Armaf Woman EDP.png",
        prices: [
          {
            capacity: 10,
            price: 160000,
          },
          {
            capacity: 20,
            price: 220000,
          },
          {
            capacity: 50,
            price: 550000,
          },
          {
            capacity: 100,
            price: 1200000,
          },
        ],
        slug: "armaf-woman-edp",
      },
      {
        id: "NH019",
        name: "Chanel Coco",
        gender: "women",
        season: "fall",
        quantity: 50,
        image: "Chanel Coco.png",
        prices: [
          {
            capacity: 10,
            price: 860000,
          },
          {
            capacity: 20,
            price: 1620000,
          },
          {
            capacity: 50,
            price: 4050000,
          },
          {
            capacity: 100,
            price: 8200000,
          },
        ],
        slug: "chanel-coco",
      },
      {
        id: "NH020",
        name: "Marc Jacobs",
        gender: "women",
        season: "winter",
        quantity: 50,
        image: "Marc Jacobs.png",
        prices: [
          {
            capacity: 10,
            price: 220000,
          },
          {
            capacity: 20,
            price: 340000,
          },
          {
            capacity: 50,
            price: 850000,
          },
        ],
        slug: "marc-jacobs",
      },
      {
        id: "NH021",
        name: "Dolce & Gabbana Blue",
        gender: "women",
        season: "spring",
        quantity: 50,
        image: "Dolce & Gabbana Blue.png",
        prices: [
          {
            capacity: 10,
            price: 660000,
          },
          {
            capacity: 20,
            price: 1220000,
          },
          {
            capacity: 50,
            price: 3050000,
          },
        ],
        slug: "dolce-gabbana-blue",
      },
      {
        id: "NH022",
        name: "Lancome",
        gender: "women",
        season: "summer",
        quantity: 50,
        image: "Lancome.png",
        prices: [
          {
            capacity: 10,
            price: 460000,
          },
          {
            capacity: 20,
            price: 820000,
          },
        ],
        slug: "lancome",
      },
      {
        id: "NH023",
        name: "Saint Laurent",
        gender: "women",
        season: "fall",
        quantity: 50,
        image: "Saint Laurent.png",
        prices: [
          {
            capacity: 10,
            price: 800000,
          },
          {
            capacity: 20,
            price: 1500000,
          },
          {
            capacity: 50,
            price: 3750000,
          },
          {
            capacity: 100,
            price: 7600000,
          },
        ],
        slug: "saint-laurent",
      },
      {
        id: "NH024",
        name: "Jean Gaultier EDT",
        gender: "women",
        season: "winter",
        quantity: 50,
        image: "Jean Gaultier EDT.png",
        prices: [
          {
            capacity: 10,
            price: 580000,
          },
          {
            capacity: 20,
            price: 1060000,
          },
          {
            capacity: 50,
            price: 2650000,
          },
        ],
        slug: "jean-gaultier-edt",
      },
      {
        id: "NH025",
        name: "Mancera EDP",
        gender: "unisex",
        season: "spring",
        quantity: 50,
        image: "Mancera EDP.png",
        prices: [
          {
            capacity: 10,
            price: 150000,
          },
          {
            capacity: 20,
            price: 200000,
          },
          {
            capacity: 50,
            price: 500000,
          },
          {
            capacity: 100,
            price: 1100000,
          },
        ],
        slug: "mancera-edp",
      },
      {
        id: "NH026",
        name: "Jo Malone",
        gender: "unisex",
        season: "summer",
        quantity: 50,
        image: "Jo Malone.png",
        prices: [
          {
            capacity: 10,
            price: 190000,
          },
          {
            capacity: 20,
            price: 280000,
          },
        ],
        slug: "jo-malone",
      },
      {
        id: "NH027",
        name: "Maison Francis Red",
        gender: "unisex",
        season: "fall",
        quantity: 50,
        image: "Maison Francis Red.png",
        prices: [
          {
            capacity: 10,
            price: 800000,
          },
          {
            capacity: 20,
            price: 1500000,
          },
          {
            capacity: 50,
            price: 3750000,
          },
        ],
        slug: "maison-francis-red",
      },
      {
        id: "NH028",
        name: "MCM",
        gender: "unisex",
        season: "winter",
        quantity: 50,
        image: "MCM.png",
        prices: [
          {
            capacity: 10,
            price: 180000,
          },
          {
            capacity: 20,
            price: 260000,
          },
        ],
        slug: "mcm",
      },
      {
        id: "NH029",
        name: "Tom Ford",
        gender: "unisex",
        season: "spring",
        quantity: 50,
        image: "Tom Ford.png",
        prices: [
          {
            capacity: 10,
            price: 260000,
          },
          {
            capacity: 20,
            price: 420000,
          },
        ],
        slug: "tom-ford",
      },
      {
        id: "NH030",
        name: "Diptyque",
        gender: "unisex",
        season: "summer",
        quantity: 50,
        image: "Diptyque.png",
        prices: [
          {
            capacity: 10,
            price: 860000,
          },
          {
            capacity: 20,
            price: 1620000,
          },
          {
            capacity: 50,
            price: 4050000,
          },
        ],
        slug: "diptyque",
      },
      {
        id: "NH031",
        name: "Tom Ford Red",
        gender: "unisex",
        season: "fall",
        quantity: 50,
        image: "Tom Ford Red.png",
        prices: [
          {
            capacity: 10,
            price: 416000,
          },
          {
            capacity: 20,
            price: 732000,
          },
          {
            capacity: 50,
            price: 1830000,
          },
        ],
        slug: "tom-ford-red",
      },
      {
        id: "NH032",
        name: "Tom Ford EDT",
        gender: "unisex",
        season: "winter",
        quantity: 50,
        image: "Tom Ford EDT.png",
        prices: [
          {
            capacity: 10,
            price: 556000,
          },
          {
            capacity: 20,
            price: 1012000,
          },
          {
            capacity: 50,
            price: 2530000,
          },
        ],
        slug: "tom-ford-edt",
      },
      {
        id: "NH033",
        name: "Maison Margiela",
        gender: "unisex",
        season: "spring",
        quantity: 50,
        image: "Maison Margiela.png",
        prices: [
          {
            capacity: 10,
            price: 476000,
          },
          {
            capacity: 20,
            price: 852000,
          },
        ],
        slug: "maison-margiela",
      },
      {
        id: "NH034",
        name: "Calvin Klein",
        gender: "unisex",
        season: "summer",
        quantity: 50,
        image: "Calvin Klein.png",
        prices: [
          {
            capacity: 10,
            price: 140000,
          },
          {
            capacity: 20,
            price: 180000,
          },
          {
            capacity: 50,
            price: 450000,
          },
        ],
        slug: "calvin-klein",
      },
      {
        id: "NH035",
        name: "Killian EDP",
        gender: "unisex",
        season: "fall",
        quantity: 50,
        image: "Killian EDP.png",
        prices: [
          {
            capacity: 10,
            price: 740000,
          },
          {
            capacity: 20,
            price: 1380000,
          },
          {
            capacity: 50,
            price: 3450000,
          },
        ],
        slug: "killian-edp",
      },
      {
        id: "NH036",
        name: "Le Labo 13",
        gender: "unisex",
        season: "fall",
        quantity: 50,
        image: "Le Labo 13.png",
        prices: [
          {
            capacity: 10,
            price: 400000,
          },
          {
            capacity: 20,
            price: 700000,
          },
        ],
        slug: "le-labo-13",
      },
    ],
  }),
  actions: {},
});
