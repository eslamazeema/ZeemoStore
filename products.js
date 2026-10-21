// ZeemoStore Unified Product Catalog Data (200 Products)
const DEFAULT_PRODUCTS = [
  {
    "id": "prod-audio-1",
    "name": "Aura Monitors Pro",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "sound",
    "price": 7550,
    "originalPrice": 11863,
    "rating": 4.11,
    "reviewsCount": 45,
    "badge": "NEW",
    "image": "./assets/speaker.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-2",
    "name": "Apex Pod Pro Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 6830,
    "originalPrice": null,
    "rating": 4.25,
    "reviewsCount": 243,
    "badge": "NEW",
    "image": "./assets/speaker.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-3",
    "name": "Vortex Monitors Pro",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 14287,
    "originalPrice": 17102,
    "rating": 4.02,
    "reviewsCount": 182,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 18,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-4",
    "name": "Quantum Soundbar Pro",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "sound",
    "price": 23725,
    "originalPrice": 26973,
    "rating": 4.94,
    "reviewsCount": 110,
    "badge": "HOT ITEM",
    "image": "./assets/speaker.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-5",
    "name": "Nova Headphones Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "sound",
    "price": 19876,
    "originalPrice": null,
    "rating": 4.48,
    "reviewsCount": 34,
    "badge": "LIMITED",
    "image": "./assets/headphone.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-6",
    "name": "Spectral Speaker Pro",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "sound",
    "price": 5993,
    "originalPrice": null,
    "rating": 4.76,
    "reviewsCount": 115,
    "badge": "BESTSELLER",
    "image": "./assets/headphone.png",
    "inStock": 29,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-7",
    "name": "Nova Earbuds Pro",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 17900,
    "originalPrice": 21736,
    "rating": 4.07,
    "reviewsCount": 45,
    "badge": "POPULAR",
    "image": "./assets/speaker.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-8",
    "name": "Apex Audio Dome Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 23436,
    "originalPrice": 25260,
    "rating": 4.39,
    "reviewsCount": 285,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-9",
    "name": "Tesla Headphones Pro",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 7303,
    "originalPrice": 11185,
    "rating": 4.01,
    "reviewsCount": 241,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-10",
    "name": "Tesla Soundbar Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "sound",
    "price": 14820,
    "originalPrice": 17342,
    "rating": 4.41,
    "reviewsCount": 40,
    "badge": "HOT ITEM",
    "image": "./assets/speaker.png",
    "inStock": 12,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-11",
    "name": "Cyber Audio Dome V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 12547,
    "originalPrice": null,
    "rating": 4.83,
    "reviewsCount": 168,
    "badge": "BESTSELLER",
    "image": "./assets/speaker.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-12",
    "name": "Tesla Earbuds V1",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "sound",
    "price": 6974,
    "originalPrice": 10748,
    "rating": 4.8,
    "reviewsCount": 113,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 10,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-13",
    "name": "Zenith Soundbar V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 8628,
    "originalPrice": 12879,
    "rating": 4.49,
    "reviewsCount": 277,
    "badge": "SALE",
    "image": "./assets/headphone.png",
    "inStock": 15,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-14",
    "name": "Tesla Earbuds V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 6317,
    "originalPrice": null,
    "rating": 4.01,
    "reviewsCount": 38,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 15,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-15",
    "name": "Nova Earbuds V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 10221,
    "originalPrice": null,
    "rating": 4.62,
    "reviewsCount": 51,
    "badge": "",
    "image": "./assets/speaker.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-16",
    "name": "Tesla Pod Pro V1",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "sound",
    "price": 11069,
    "originalPrice": 13318,
    "rating": 4.97,
    "reviewsCount": 239,
    "badge": "HOT ITEM",
    "image": "./assets/speaker.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-17",
    "name": "Zenith Earbuds V1",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 5950,
    "originalPrice": null,
    "rating": 4.77,
    "reviewsCount": 261,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 27,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-18",
    "name": "Orbit Monitors V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 17981,
    "originalPrice": 20731,
    "rating": 4.92,
    "reviewsCount": 20,
    "badge": "NEW",
    "image": "./assets/speaker.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-19",
    "name": "Orbit Earbuds V1",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "sound",
    "price": 9548,
    "originalPrice": 10956,
    "rating": 4.93,
    "reviewsCount": 57,
    "badge": "",
    "image": "./assets/speaker.png",
    "inStock": 13,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-20",
    "name": "Chronos Speaker V2",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 8611,
    "originalPrice": null,
    "rating": 4.38,
    "reviewsCount": 65,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-21",
    "name": "Quantum Speaker V2",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "sound",
    "price": 15707,
    "originalPrice": 19498,
    "rating": 4.68,
    "reviewsCount": 153,
    "badge": "SALE",
    "image": "./assets/headphone.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-22",
    "name": "Orbit Pod Pro V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "sound",
    "price": 3054,
    "originalPrice": 3706,
    "rating": 4.84,
    "reviewsCount": 36,
    "badge": "POPULAR",
    "image": "./assets/speaker.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-23",
    "name": "Titan Soundbar V2",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 6362,
    "originalPrice": null,
    "rating": 4.79,
    "reviewsCount": 63,
    "badge": "BESTSELLER",
    "image": "./assets/headphone.png",
    "inStock": 9,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-24",
    "name": "Pulse Soundbar V2",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 19485,
    "originalPrice": null,
    "rating": 4.41,
    "reviewsCount": 115,
    "badge": "SALE",
    "image": "./assets/headphone.png",
    "inStock": 17,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-25",
    "name": "Quantum Monitors V2",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 9356,
    "originalPrice": 11922,
    "rating": 4.98,
    "reviewsCount": 146,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-26",
    "name": "Orbit Speaker V2",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 5827,
    "originalPrice": null,
    "rating": 4.27,
    "reviewsCount": 156,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-27",
    "name": "Quantum Speaker V2",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 16247,
    "originalPrice": 20592,
    "rating": 4.58,
    "reviewsCount": 225,
    "badge": "BESTSELLER",
    "image": "./assets/headphone.png",
    "inStock": 17,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-28",
    "name": "Helios Pod Pro V2",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 2436,
    "originalPrice": 7462,
    "rating": 4.42,
    "reviewsCount": 264,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-29",
    "name": "Zenith Monitors V2",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 20003,
    "originalPrice": 23668,
    "rating": 4.76,
    "reviewsCount": 169,
    "badge": "BESTSELLER",
    "image": "./assets/speaker.png",
    "inStock": 10,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-30",
    "name": "Alpha Audio Dome V3",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 20932,
    "originalPrice": 23476,
    "rating": 4.39,
    "reviewsCount": 213,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-31",
    "name": "Matrix Pod Pro V3",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "sound",
    "price": 21517,
    "originalPrice": 22524,
    "rating": 4.5,
    "reviewsCount": 270,
    "badge": "SALE",
    "image": "./assets/speaker.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-32",
    "name": "Quantum Headphones V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 5487,
    "originalPrice": 10240,
    "rating": 4.53,
    "reviewsCount": 97,
    "badge": "LIMITED",
    "image": "./assets/speaker.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-33",
    "name": "Matrix Earbuds V3",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 21520,
    "originalPrice": null,
    "rating": 4.24,
    "reviewsCount": 130,
    "badge": "",
    "image": "./assets/speaker.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-34",
    "name": "Hyper Audio Dome V3",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "sound",
    "price": 10707,
    "originalPrice": null,
    "rating": 4.98,
    "reviewsCount": 22,
    "badge": "HOT ITEM",
    "image": "./assets/speaker.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-35",
    "name": "Aura Pod Pro V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "sound",
    "price": 3563,
    "originalPrice": null,
    "rating": 4.52,
    "reviewsCount": 131,
    "badge": "BESTSELLER",
    "image": "./assets/headphone.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-36",
    "name": "Specter Monitors V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "sound",
    "price": 11073,
    "originalPrice": null,
    "rating": 4.53,
    "reviewsCount": 85,
    "badge": "BESTSELLER",
    "image": "./assets/speaker.png",
    "inStock": 13,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-37",
    "name": "Neutron Soundbar V3",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 22901,
    "originalPrice": 25214,
    "rating": 4.45,
    "reviewsCount": 298,
    "badge": "LIMITED",
    "image": "./assets/headphone.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-38",
    "name": "Specter Audio Dome V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 21668,
    "originalPrice": null,
    "rating": 4.78,
    "reviewsCount": 35,
    "badge": "POPULAR",
    "image": "./assets/speaker.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-39",
    "name": "Specter Pod Pro V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "sound",
    "price": 1771,
    "originalPrice": 5208,
    "rating": 4.91,
    "reviewsCount": 220,
    "badge": "",
    "image": "./assets/speaker.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-40",
    "name": "Aura Pod Pro V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "sound",
    "price": 12314,
    "originalPrice": 14264,
    "rating": 4.94,
    "reviewsCount": 190,
    "badge": "LIMITED",
    "image": "./assets/headphone.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-41",
    "name": "Hyper Headphones V4",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "sound",
    "price": 7718,
    "originalPrice": 10035,
    "rating": 4.27,
    "reviewsCount": 152,
    "badge": "SALE",
    "image": "./assets/speaker.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-42",
    "name": "Nexus Monitors V4",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "sound",
    "price": 19072,
    "originalPrice": null,
    "rating": 4.3,
    "reviewsCount": 120,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-43",
    "name": "Vinci Headphones V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "sound",
    "price": 8678,
    "originalPrice": null,
    "rating": 4.51,
    "reviewsCount": 94,
    "badge": "NEW",
    "image": "./assets/speaker.png",
    "inStock": 29,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-44",
    "name": "Nexus Soundbar V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "sound",
    "price": 16922,
    "originalPrice": null,
    "rating": 4.41,
    "reviewsCount": 68,
    "badge": "SALE",
    "image": "./assets/speaker.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-45",
    "name": "Helios Audio Dome V4",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 16114,
    "originalPrice": 20961,
    "rating": 4.25,
    "reviewsCount": 167,
    "badge": "",
    "image": "./assets/headphone.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-46",
    "name": "Pulse Audio Dome V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "sound",
    "price": 5211,
    "originalPrice": 5853,
    "rating": 4.81,
    "reviewsCount": 215,
    "badge": "POPULAR",
    "image": "./assets/headphone.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-47",
    "name": "Alpha Headphones V4",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "sound",
    "price": 24582,
    "originalPrice": 27956,
    "rating": 4.23,
    "reviewsCount": 79,
    "badge": "BESTSELLER",
    "image": "./assets/headphone.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-48",
    "name": "Zenith Earbuds V4",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "sound",
    "price": 10361,
    "originalPrice": 13128,
    "rating": 4.97,
    "reviewsCount": 32,
    "badge": "SALE",
    "image": "./assets/speaker.png",
    "inStock": 13,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-49",
    "name": "Specter Speaker V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "sound",
    "price": 7827,
    "originalPrice": 9785,
    "rating": 4.31,
    "reviewsCount": 225,
    "badge": "POPULAR",
    "image": "./assets/speaker.png",
    "inStock": 17,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-audio-50",
    "name": "Pulse Audio Dome V5",
    "tagline": "Precision engineered for pure performance.",
    "category": "sound",
    "price": 9676,
    "originalPrice": null,
    "rating": 4.15,
    "reviewsCount": 85,
    "badge": "NEW",
    "image": "./assets/speaker.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic audio gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-1",
    "name": "Neutron Bio Chrono Pro",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 1300,
    "originalPrice": 4691,
    "rating": 4.72,
    "reviewsCount": 127,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-2",
    "name": "Hyper Wrist Monitor Pro",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 23854,
    "originalPrice": 28112,
    "rating": 4.61,
    "reviewsCount": 223,
    "badge": "",
    "image": "./assets/smartwatch.png",
    "inStock": 1,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-3",
    "name": "Alpha Wrist Monitor Pro",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 3224,
    "originalPrice": 3934,
    "rating": 4.26,
    "reviewsCount": 148,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 3,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-4",
    "name": "Nova Smartwatch Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "wearables",
    "price": 9312,
    "originalPrice": null,
    "rating": 4.21,
    "reviewsCount": 64,
    "badge": "",
    "image": "./assets/smartwatch.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-5",
    "name": "Matrix Wrist Monitor Pro",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 14960,
    "originalPrice": 19603,
    "rating": 4.16,
    "reviewsCount": 292,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 3,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-6",
    "name": "Tesla Tracker Band Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "wearables",
    "price": 21167,
    "originalPrice": 24521,
    "rating": 4.34,
    "reviewsCount": 278,
    "badge": "",
    "image": "./assets/smartwatch.png",
    "inStock": 13,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-7",
    "name": "Hyper Health Ring Pro",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "wearables",
    "price": 13043,
    "originalPrice": 16950,
    "rating": 4.02,
    "reviewsCount": 171,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-8",
    "name": "Nexus Bio Chrono Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "wearables",
    "price": 2252,
    "originalPrice": 4816,
    "rating": 4.55,
    "reviewsCount": 268,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-9",
    "name": "Aura Smartwatch Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "wearables",
    "price": 24760,
    "originalPrice": 27188,
    "rating": 4.74,
    "reviewsCount": 236,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 18,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-10",
    "name": "Matrix Health Ring Pro",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 23676,
    "originalPrice": 24325,
    "rating": 4.36,
    "reviewsCount": 28,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 2,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-11",
    "name": "Chronos Bio Chrono V1",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 22054,
    "originalPrice": 26870,
    "rating": 4.17,
    "reviewsCount": 191,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 9,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-12",
    "name": "Orbit Bio Chrono V1",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 17971,
    "originalPrice": 20944,
    "rating": 4.39,
    "reviewsCount": 52,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-13",
    "name": "Lumina Health Ring V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 8005,
    "originalPrice": 8528,
    "rating": 4.36,
    "reviewsCount": 32,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-14",
    "name": "Vortex Health Ring V1",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "wearables",
    "price": 13152,
    "originalPrice": 17374,
    "rating": 4.29,
    "reviewsCount": 87,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 28,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-15",
    "name": "Chronos Bio Chrono V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 22574,
    "originalPrice": 23608,
    "rating": 4.79,
    "reviewsCount": 275,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 29,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-16",
    "name": "Tesla Smartwatch V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 12738,
    "originalPrice": null,
    "rating": 4.34,
    "reviewsCount": 194,
    "badge": "LIMITED",
    "image": "./assets/smartwatch.png",
    "inStock": 13,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-17",
    "name": "Pulse Smartwatch V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 24506,
    "originalPrice": 28568,
    "rating": 4.41,
    "reviewsCount": 279,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-18",
    "name": "Lumina Bio Chrono V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "wearables",
    "price": 22352,
    "originalPrice": 23811,
    "rating": 4.83,
    "reviewsCount": 78,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-19",
    "name": "Lumina Tracker Band V1",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "wearables",
    "price": 14240,
    "originalPrice": 17730,
    "rating": 4.35,
    "reviewsCount": 254,
    "badge": "",
    "image": "./assets/smartwatch.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-20",
    "name": "Alpha Health Ring V2",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "wearables",
    "price": 12812,
    "originalPrice": 14187,
    "rating": 4.34,
    "reviewsCount": 172,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 15,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-21",
    "name": "Quantum Health Ring V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "wearables",
    "price": 24572,
    "originalPrice": null,
    "rating": 4.54,
    "reviewsCount": 121,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-22",
    "name": "Cyber Wrist Monitor V2",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 3847,
    "originalPrice": 6657,
    "rating": 4.11,
    "reviewsCount": 196,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-23",
    "name": "Lumina Wrist Monitor V2",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "wearables",
    "price": 15659,
    "originalPrice": null,
    "rating": 4.96,
    "reviewsCount": 108,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-24",
    "name": "Zenith Tracker Band V2",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "wearables",
    "price": 3377,
    "originalPrice": null,
    "rating": 4.91,
    "reviewsCount": 220,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 10,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-25",
    "name": "Specter Health Ring V2",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "wearables",
    "price": 22899,
    "originalPrice": 24782,
    "rating": 4.31,
    "reviewsCount": 35,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-26",
    "name": "Pulse Health Ring V2",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 14422,
    "originalPrice": null,
    "rating": 4.3,
    "reviewsCount": 205,
    "badge": "LIMITED",
    "image": "./assets/smartwatch.png",
    "inStock": 3,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-27",
    "name": "Hyper Tracker Band V2",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "wearables",
    "price": 21062,
    "originalPrice": 22454,
    "rating": 4.77,
    "reviewsCount": 214,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-28",
    "name": "Lumina Health Ring V2",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "wearables",
    "price": 2103,
    "originalPrice": null,
    "rating": 4.66,
    "reviewsCount": 117,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 3,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-29",
    "name": "Matrix Health Ring V2",
    "tagline": "Precision engineered for pure performance.",
    "category": "wearables",
    "price": 3497,
    "originalPrice": 7463,
    "rating": 4.33,
    "reviewsCount": 49,
    "badge": "POPULAR",
    "image": "./assets/smartwatch.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-30",
    "name": "Alpha Health Ring V3",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "wearables",
    "price": 11808,
    "originalPrice": null,
    "rating": 4.22,
    "reviewsCount": 84,
    "badge": "POPULAR",
    "image": "./assets/smartwatch.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-31",
    "name": "Neutron Tracker Band V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "wearables",
    "price": 20668,
    "originalPrice": 22421,
    "rating": 4.27,
    "reviewsCount": 43,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 15,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-32",
    "name": "Zenith Tracker Band V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "wearables",
    "price": 2575,
    "originalPrice": null,
    "rating": 4.91,
    "reviewsCount": 138,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-33",
    "name": "Lumina Bio Chrono V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "wearables",
    "price": 12507,
    "originalPrice": 15044,
    "rating": 4.1,
    "reviewsCount": 91,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 18,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-34",
    "name": "Quantum Tracker Band V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "wearables",
    "price": 9417,
    "originalPrice": 12828,
    "rating": 4.36,
    "reviewsCount": 137,
    "badge": "NEW",
    "image": "./assets/smartwatch.png",
    "inStock": 10,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-35",
    "name": "Titan Bio Chrono V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "wearables",
    "price": 22444,
    "originalPrice": null,
    "rating": 4.62,
    "reviewsCount": 123,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-36",
    "name": "Hyper Bio Chrono V3",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "wearables",
    "price": 12288,
    "originalPrice": 13603,
    "rating": 4.75,
    "reviewsCount": 234,
    "badge": "",
    "image": "./assets/smartwatch.png",
    "inStock": 17,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-37",
    "name": "Aura Health Ring V3",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 5174,
    "originalPrice": null,
    "rating": 4.34,
    "reviewsCount": 13,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-38",
    "name": "Matrix Wrist Monitor V3",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 15690,
    "originalPrice": null,
    "rating": 4.19,
    "reviewsCount": 166,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-39",
    "name": "Vortex Wrist Monitor V3",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "wearables",
    "price": 10198,
    "originalPrice": null,
    "rating": 4.77,
    "reviewsCount": 292,
    "badge": "",
    "image": "./assets/smartwatch.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-40",
    "name": "Quantum Wrist Monitor V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "wearables",
    "price": 23884,
    "originalPrice": null,
    "rating": 4.89,
    "reviewsCount": 219,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-41",
    "name": "Helios Tracker Band V4",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "wearables",
    "price": 16387,
    "originalPrice": null,
    "rating": 4.84,
    "reviewsCount": 25,
    "badge": "POPULAR",
    "image": "./assets/smartwatch.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-42",
    "name": "Orbit Smartwatch V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "wearables",
    "price": 2981,
    "originalPrice": 6292,
    "rating": 4.03,
    "reviewsCount": 181,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-43",
    "name": "Apex Tracker Band V4",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "wearables",
    "price": 2618,
    "originalPrice": 3454,
    "rating": 4.35,
    "reviewsCount": 272,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-44",
    "name": "Cipher Smartwatch V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "wearables",
    "price": 21531,
    "originalPrice": 23670,
    "rating": 4.17,
    "reviewsCount": 90,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 29,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-45",
    "name": "Cyber Health Ring V4",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "wearables",
    "price": 22367,
    "originalPrice": 24282,
    "rating": 4.58,
    "reviewsCount": 127,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-46",
    "name": "Tesla Wrist Monitor V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "wearables",
    "price": 15968,
    "originalPrice": 18701,
    "rating": 4.62,
    "reviewsCount": 120,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-47",
    "name": "Pulse Smartwatch V4",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "wearables",
    "price": 20213,
    "originalPrice": 22312,
    "rating": 4.94,
    "reviewsCount": 208,
    "badge": "SALE",
    "image": "./assets/smartwatch.png",
    "inStock": 28,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-48",
    "name": "Tesla Tracker Band V4",
    "tagline": "Precision engineered for pure performance.",
    "category": "wearables",
    "price": 7388,
    "originalPrice": null,
    "rating": 4.53,
    "reviewsCount": 244,
    "badge": "BESTSELLER",
    "image": "./assets/smartwatch.png",
    "inStock": 20,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-49",
    "name": "Nova Bio Chrono V4",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "wearables",
    "price": 6490,
    "originalPrice": 8133,
    "rating": 4.12,
    "reviewsCount": 263,
    "badge": "HOT ITEM",
    "image": "./assets/smartwatch.png",
    "inStock": 2,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-wearables-50",
    "name": "Alpha Bio Chrono V5",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "wearables",
    "price": 15801,
    "originalPrice": null,
    "rating": 4.61,
    "reviewsCount": 67,
    "badge": "POPULAR",
    "image": "./assets/smartwatch.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic wearables gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-1",
    "name": "Lumina Desk Light Pro",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 8263,
    "originalPrice": 12643,
    "rating": 4.72,
    "reviewsCount": 178,
    "badge": "SALE",
    "image": "./assets/lamp.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-2",
    "name": "Tesla Macro Pad Pro",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 16699,
    "originalPrice": 20964,
    "rating": 4.05,
    "reviewsCount": 196,
    "badge": "LIMITED",
    "image": "./assets/keyboard.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-3",
    "name": "Orbit Keyboard Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 12537,
    "originalPrice": null,
    "rating": 4.62,
    "reviewsCount": 183,
    "badge": "SALE",
    "image": "./assets/lamp.png",
    "inStock": 28,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-4",
    "name": "Helios Mouse Pad Pro",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "workspace",
    "price": 7225,
    "originalPrice": 8801,
    "rating": 4.1,
    "reviewsCount": 18,
    "badge": "NEW",
    "image": "./assets/lamp.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-5",
    "name": "Vinci Mouse Pad Pro",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 13537,
    "originalPrice": null,
    "rating": 4.25,
    "reviewsCount": 60,
    "badge": "POPULAR",
    "image": "./assets/lamp.png",
    "inStock": 11,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-6",
    "name": "Cyber Keyboard Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 16506,
    "originalPrice": 20615,
    "rating": 4.83,
    "reviewsCount": 186,
    "badge": "POPULAR",
    "image": "./assets/lamp.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-7",
    "name": "Aura Mouse Pad Pro",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "workspace",
    "price": 22221,
    "originalPrice": null,
    "rating": 4.2,
    "reviewsCount": 9,
    "badge": "SALE",
    "image": "./assets/lamp.png",
    "inStock": 11,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-8",
    "name": "Nova Mouse Pad Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 4038,
    "originalPrice": 6146,
    "rating": 4.88,
    "reviewsCount": 90,
    "badge": "SALE",
    "image": "./assets/keyboard.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-9",
    "name": "Vortex Desk Light Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 21002,
    "originalPrice": null,
    "rating": 4.43,
    "reviewsCount": 211,
    "badge": "SALE",
    "image": "./assets/keyboard.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-10",
    "name": "Nexus Mouse Pad Pro",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "workspace",
    "price": 6607,
    "originalPrice": null,
    "rating": 4.4,
    "reviewsCount": 77,
    "badge": "",
    "image": "./assets/lamp.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-11",
    "name": "Nexus Vertical Mouse V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "workspace",
    "price": 6940,
    "originalPrice": 10225,
    "rating": 4.32,
    "reviewsCount": 48,
    "badge": "NEW",
    "image": "./assets/lamp.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-12",
    "name": "Alpha Vertical Mouse V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 12511,
    "originalPrice": 13559,
    "rating": 4.67,
    "reviewsCount": 218,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-13",
    "name": "Vinci Macro Pad V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 12605,
    "originalPrice": null,
    "rating": 4.44,
    "reviewsCount": 300,
    "badge": "SALE",
    "image": "./assets/lamp.png",
    "inStock": 11,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-14",
    "name": "Zenith Desk Light V1",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "workspace",
    "price": 10043,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 38,
    "badge": "LIMITED",
    "image": "./assets/keyboard.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-15",
    "name": "Nexus Desk Light V1",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 18991,
    "originalPrice": 19567,
    "rating": 4.94,
    "reviewsCount": 266,
    "badge": "",
    "image": "./assets/keyboard.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-16",
    "name": "Cyber Keyboard V1",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 8045,
    "originalPrice": null,
    "rating": 4.86,
    "reviewsCount": 138,
    "badge": "",
    "image": "./assets/lamp.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-17",
    "name": "Vortex Vertical Mouse V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "workspace",
    "price": 2455,
    "originalPrice": 4403,
    "rating": 4.86,
    "reviewsCount": 107,
    "badge": "POPULAR",
    "image": "./assets/lamp.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-18",
    "name": "Nexus Monitor Arm V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "workspace",
    "price": 11611,
    "originalPrice": 12258,
    "rating": 4.95,
    "reviewsCount": 101,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-19",
    "name": "Spectral Desk Light V1",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "workspace",
    "price": 24855,
    "originalPrice": 26798,
    "rating": 4.57,
    "reviewsCount": 84,
    "badge": "BESTSELLER",
    "image": "./assets/lamp.png",
    "inStock": 15,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-20",
    "name": "Aura Keyboard V2",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 6079,
    "originalPrice": null,
    "rating": 4.98,
    "reviewsCount": 188,
    "badge": "",
    "image": "./assets/keyboard.png",
    "inStock": 12,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-21",
    "name": "Hyper Mouse Pad V2",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 11666,
    "originalPrice": 16140,
    "rating": 4.57,
    "reviewsCount": 255,
    "badge": "BESTSELLER",
    "image": "./assets/lamp.png",
    "inStock": 15,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-22",
    "name": "Nexus Mouse Pad V2",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "workspace",
    "price": 17203,
    "originalPrice": 20872,
    "rating": 4.39,
    "reviewsCount": 41,
    "badge": "LIMITED",
    "image": "./assets/lamp.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-23",
    "name": "Cyber Desk Light V2",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "workspace",
    "price": 2278,
    "originalPrice": 4915,
    "rating": 4.71,
    "reviewsCount": 160,
    "badge": "HOT ITEM",
    "image": "./assets/keyboard.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-24",
    "name": "Lumina Keyboard V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 14327,
    "originalPrice": null,
    "rating": 4.52,
    "reviewsCount": 208,
    "badge": "BESTSELLER",
    "image": "./assets/lamp.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-25",
    "name": "Pulse Desk Light V2",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 24669,
    "originalPrice": 29060,
    "rating": 4.7,
    "reviewsCount": 49,
    "badge": "POPULAR",
    "image": "./assets/keyboard.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-26",
    "name": "Pulse Mouse Pad V2",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "workspace",
    "price": 8099,
    "originalPrice": 8802,
    "rating": 4.14,
    "reviewsCount": 254,
    "badge": "LIMITED",
    "image": "./assets/keyboard.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-27",
    "name": "Hyper Vertical Mouse V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 11093,
    "originalPrice": 13934,
    "rating": 4.86,
    "reviewsCount": 268,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-28",
    "name": "Aura Vertical Mouse V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 4548,
    "originalPrice": 5897,
    "rating": 4.01,
    "reviewsCount": 282,
    "badge": "LIMITED",
    "image": "./assets/lamp.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-29",
    "name": "Vortex Vertical Mouse V2",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "workspace",
    "price": 22402,
    "originalPrice": 27492,
    "rating": 4.46,
    "reviewsCount": 101,
    "badge": "",
    "image": "./assets/keyboard.png",
    "inStock": 17,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-30",
    "name": "Matrix Mouse Pad V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 11700,
    "originalPrice": 17033,
    "rating": 4.78,
    "reviewsCount": 193,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-31",
    "name": "Specter Monitor Arm V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "workspace",
    "price": 17182,
    "originalPrice": null,
    "rating": 4.99,
    "reviewsCount": 211,
    "badge": "HOT ITEM",
    "image": "./assets/lamp.png",
    "inStock": 13,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-32",
    "name": "Apex Mouse Pad V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 13425,
    "originalPrice": 15744,
    "rating": 4.99,
    "reviewsCount": 271,
    "badge": "",
    "image": "./assets/lamp.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-33",
    "name": "Zenith Desk Light V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 16885,
    "originalPrice": 19714,
    "rating": 4.82,
    "reviewsCount": 61,
    "badge": "POPULAR",
    "image": "./assets/lamp.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-34",
    "name": "Cyber Macro Pad V3",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 12646,
    "originalPrice": null,
    "rating": 4.22,
    "reviewsCount": 248,
    "badge": "SALE",
    "image": "./assets/lamp.png",
    "inStock": 11,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-35",
    "name": "Alpha Desk Light V3",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "workspace",
    "price": 1536,
    "originalPrice": 3587,
    "rating": 4.02,
    "reviewsCount": 126,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-36",
    "name": "Apex Macro Pad V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "workspace",
    "price": 5634,
    "originalPrice": 9575,
    "rating": 4.25,
    "reviewsCount": 80,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 12,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-37",
    "name": "Alpha Desk Light V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "workspace",
    "price": 8025,
    "originalPrice": null,
    "rating": 4.43,
    "reviewsCount": 119,
    "badge": "NEW",
    "image": "./assets/keyboard.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-38",
    "name": "Alpha Macro Pad V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "workspace",
    "price": 23813,
    "originalPrice": 25742,
    "rating": 4.57,
    "reviewsCount": 101,
    "badge": "NEW",
    "image": "./assets/keyboard.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-39",
    "name": "Nova Monitor Arm V3",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "workspace",
    "price": 20608,
    "originalPrice": 25292,
    "rating": 4.53,
    "reviewsCount": 144,
    "badge": "POPULAR",
    "image": "./assets/keyboard.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-40",
    "name": "Nexus Monitor Arm V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "workspace",
    "price": 9665,
    "originalPrice": 10786,
    "rating": 4.76,
    "reviewsCount": 32,
    "badge": "NEW",
    "image": "./assets/keyboard.png",
    "inStock": 18,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-41",
    "name": "Alpha Mouse Pad V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "workspace",
    "price": 8299,
    "originalPrice": null,
    "rating": 4.5,
    "reviewsCount": 128,
    "badge": "BESTSELLER",
    "image": "./assets/lamp.png",
    "inStock": 20,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-42",
    "name": "Hyper Keyboard V4",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 17198,
    "originalPrice": 22482,
    "rating": 4.03,
    "reviewsCount": 76,
    "badge": "HOT ITEM",
    "image": "./assets/lamp.png",
    "inStock": 10,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-43",
    "name": "Cipher Vertical Mouse V4",
    "tagline": "Precision engineered for pure performance.",
    "category": "workspace",
    "price": 5533,
    "originalPrice": null,
    "rating": 4.35,
    "reviewsCount": 272,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 27,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-44",
    "name": "Nexus Desk Light V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "workspace",
    "price": 15502,
    "originalPrice": null,
    "rating": 4.88,
    "reviewsCount": 211,
    "badge": "LIMITED",
    "image": "./assets/lamp.png",
    "inStock": 17,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-45",
    "name": "Quantum Macro Pad V4",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "workspace",
    "price": 17110,
    "originalPrice": 21319,
    "rating": 4.34,
    "reviewsCount": 107,
    "badge": "HOT ITEM",
    "image": "./assets/keyboard.png",
    "inStock": 28,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-46",
    "name": "Cyber Mouse Pad V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "workspace",
    "price": 17282,
    "originalPrice": 21814,
    "rating": 4.32,
    "reviewsCount": 89,
    "badge": "HOT ITEM",
    "image": "./assets/keyboard.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-47",
    "name": "Helios Monitor Arm V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "workspace",
    "price": 17383,
    "originalPrice": 19374,
    "rating": 4.26,
    "reviewsCount": 122,
    "badge": "BESTSELLER",
    "image": "./assets/lamp.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-48",
    "name": "Quantum Macro Pad V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "workspace",
    "price": 8009,
    "originalPrice": 13473,
    "rating": 4.16,
    "reviewsCount": 102,
    "badge": "BESTSELLER",
    "image": "./assets/keyboard.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-49",
    "name": "Chronos Keyboard V4",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "workspace",
    "price": 15086,
    "originalPrice": 16313,
    "rating": 4.38,
    "reviewsCount": 191,
    "badge": "NEW",
    "image": "./assets/lamp.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-workspace-50",
    "name": "Chronos Mouse Pad V5",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "workspace",
    "price": 8694,
    "originalPrice": null,
    "rating": 4.84,
    "reviewsCount": 125,
    "badge": "LIMITED",
    "image": "./assets/lamp.png",
    "inStock": 23,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic workspace gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-1",
    "name": "Vinci Backpack Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 15525,
    "originalPrice": null,
    "rating": 4.95,
    "reviewsCount": 115,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-2",
    "name": "Spectral Backpack Pro",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 2049,
    "originalPrice": null,
    "rating": 4.45,
    "reviewsCount": 75,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-3",
    "name": "Chronos Backpack Pro",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 15708,
    "originalPrice": 18140,
    "rating": 4.68,
    "reviewsCount": 232,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-4",
    "name": "Vortex Tech Vest Pro",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "apparel",
    "price": 3469,
    "originalPrice": 8312,
    "rating": 4.24,
    "reviewsCount": 80,
    "badge": "POPULAR",
    "image": "./assets/backpack.png",
    "inStock": 9,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-5",
    "name": "Nova Tech Vest Pro",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "apparel",
    "price": 8338,
    "originalPrice": null,
    "rating": 4.92,
    "reviewsCount": 57,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-6",
    "name": "Alpha Backpack Pro",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "apparel",
    "price": 19947,
    "originalPrice": 24443,
    "rating": 4.59,
    "reviewsCount": 47,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 11,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-7",
    "name": "Apex Tech Vest Pro",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 6710,
    "originalPrice": null,
    "rating": 4.13,
    "reviewsCount": 188,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 16,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-8",
    "name": "Quantum Duffel Pack Pro",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "apparel",
    "price": 20514,
    "originalPrice": 24240,
    "rating": 4.64,
    "reviewsCount": 106,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-9",
    "name": "Lumina Duffel Pack Pro",
    "tagline": "Precision engineered for pure performance.",
    "category": "apparel",
    "price": 13435,
    "originalPrice": 16540,
    "rating": 4.75,
    "reviewsCount": 145,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-10",
    "name": "Nova Sling Bag Pro",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 8783,
    "originalPrice": null,
    "rating": 4.91,
    "reviewsCount": 225,
    "badge": "POPULAR",
    "image": "./assets/backpack.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-11",
    "name": "Orbit Transit Jacket V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 12721,
    "originalPrice": null,
    "rating": 4.63,
    "reviewsCount": 294,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 7,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-12",
    "name": "Matrix Tech Vest V1",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 15980,
    "originalPrice": null,
    "rating": 4.47,
    "reviewsCount": 217,
    "badge": "POPULAR",
    "image": "./assets/backpack.png",
    "inStock": 3,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-13",
    "name": "Zenith Backpack V1",
    "tagline": "Precision engineered for pure performance.",
    "category": "apparel",
    "price": 23487,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 142,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 1,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-14",
    "name": "Nexus Tech Vest V1",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "apparel",
    "price": 8041,
    "originalPrice": 8731,
    "rating": 4.79,
    "reviewsCount": 260,
    "badge": "POPULAR",
    "image": "./assets/backpack.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-15",
    "name": "Tesla Duffel Pack V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 19677,
    "originalPrice": 21797,
    "rating": 4.71,
    "reviewsCount": 85,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 12,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-16",
    "name": "Spectral Transit Jacket V1",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 24031,
    "originalPrice": 26292,
    "rating": 4.76,
    "reviewsCount": 99,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-17",
    "name": "Cyber Sling Bag V1",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 22927,
    "originalPrice": 27994,
    "rating": 4.09,
    "reviewsCount": 178,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-18",
    "name": "Vinci Tech Vest V1",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 24325,
    "originalPrice": 28869,
    "rating": 4.21,
    "reviewsCount": 19,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 29,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-19",
    "name": "Hyper Duffel Pack V1",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 4748,
    "originalPrice": null,
    "rating": 4.52,
    "reviewsCount": 84,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-20",
    "name": "Vinci Duffel Pack V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 13326,
    "originalPrice": null,
    "rating": 4.12,
    "reviewsCount": 159,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-21",
    "name": "Cipher Tech Vest V2",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "apparel",
    "price": 6595,
    "originalPrice": 7899,
    "rating": 4.98,
    "reviewsCount": 253,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-22",
    "name": "Matrix Tech Vest V2",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 15565,
    "originalPrice": 19390,
    "rating": 4.65,
    "reviewsCount": 233,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 6,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-23",
    "name": "Nova Tech Vest V2",
    "tagline": "Seamless connectivity and minimalist modern design.",
    "category": "apparel",
    "price": 21691,
    "originalPrice": 24713,
    "rating": 4.84,
    "reviewsCount": 244,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-24",
    "name": "Nova Backpack V2",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "apparel",
    "price": 13400,
    "originalPrice": 14615,
    "rating": 4.61,
    "reviewsCount": 210,
    "badge": "NEW",
    "image": "./assets/backpack.png",
    "inStock": 21,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-25",
    "name": "Aura Backpack V2",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 24461,
    "originalPrice": null,
    "rating": 4.91,
    "reviewsCount": 218,
    "badge": "POPULAR",
    "image": "./assets/backpack.png",
    "inStock": 2,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-26",
    "name": "Zenith Sling Bag V2",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 16989,
    "originalPrice": 21948,
    "rating": 4.77,
    "reviewsCount": 35,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 2,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-27",
    "name": "Titan Tech Vest V2",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "apparel",
    "price": 9474,
    "originalPrice": null,
    "rating": 4.82,
    "reviewsCount": 165,
    "badge": "POPULAR",
    "image": "./assets/backpack.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-28",
    "name": "Vortex Backpack V2",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 20475,
    "originalPrice": null,
    "rating": 4.45,
    "reviewsCount": 121,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 14,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-29",
    "name": "Nova Sling Bag V2",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 10990,
    "originalPrice": null,
    "rating": 4.07,
    "reviewsCount": 101,
    "badge": "NEW",
    "image": "./assets/backpack.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-30",
    "name": "Cyber Transit Jacket V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 6947,
    "originalPrice": 10260,
    "rating": 4.2,
    "reviewsCount": 195,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 10,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-31",
    "name": "Specter Transit Jacket V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 23261,
    "originalPrice": null,
    "rating": 4.87,
    "reviewsCount": 118,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 27,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-32",
    "name": "Aura Backpack V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 18136,
    "originalPrice": 22418,
    "rating": 4.26,
    "reviewsCount": 234,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-33",
    "name": "Aura Tech Vest V3",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "apparel",
    "price": 15753,
    "originalPrice": null,
    "rating": 4.46,
    "reviewsCount": 258,
    "badge": "NEW",
    "image": "./assets/backpack.png",
    "inStock": 11,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-34",
    "name": "Alpha Transit Jacket V3",
    "tagline": "Precision engineered for pure performance.",
    "category": "apparel",
    "price": 24442,
    "originalPrice": 29117,
    "rating": 4.65,
    "reviewsCount": 233,
    "badge": "NEW",
    "image": "./assets/backpack.png",
    "inStock": 22,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-35",
    "name": "Apex Transit Jacket V3",
    "tagline": "Gasket mount design with perimeter RGB lighting.",
    "category": "apparel",
    "price": 7172,
    "originalPrice": null,
    "rating": 4.29,
    "reviewsCount": 20,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 9,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-36",
    "name": "Hyper Transit Jacket V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 16136,
    "originalPrice": 19572,
    "rating": 4.71,
    "reviewsCount": 214,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 9,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-37",
    "name": "Lumina Transit Jacket V3",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 2113,
    "originalPrice": 5637,
    "rating": 4.71,
    "reviewsCount": 167,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 9,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-38",
    "name": "Pulse Tech Vest V3",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "apparel",
    "price": 21633,
    "originalPrice": null,
    "rating": 4.61,
    "reviewsCount": 302,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 5,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-39",
    "name": "Cipher Transit Jacket V3",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 3693,
    "originalPrice": 6564,
    "rating": 4.54,
    "reviewsCount": 121,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 25,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-40",
    "name": "Vortex Duffel Pack V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 9102,
    "originalPrice": 10129,
    "rating": 4.55,
    "reviewsCount": 101,
    "badge": "SALE",
    "image": "./assets/backpack.png",
    "inStock": 19,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-41",
    "name": "Vinci Tech Vest V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "apparel",
    "price": 23714,
    "originalPrice": null,
    "rating": 4.31,
    "reviewsCount": 255,
    "badge": "LIMITED",
    "image": "./assets/backpack.png",
    "inStock": 4,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-42",
    "name": "Titan Duffel Pack V4",
    "tagline": "Ultra-smooth construction with customized profiles.",
    "category": "apparel",
    "price": 5474,
    "originalPrice": null,
    "rating": 4.33,
    "reviewsCount": 96,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 24,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-43",
    "name": "Alpha Duffel Pack V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "apparel",
    "price": 12442,
    "originalPrice": 13910,
    "rating": 4.35,
    "reviewsCount": 163,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-44",
    "name": "Matrix Duffel Pack V4",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 9789,
    "originalPrice": 13635,
    "rating": 4.83,
    "reviewsCount": 243,
    "badge": "NEW",
    "image": "./assets/backpack.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-45",
    "name": "Hyper Backpack V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 20254,
    "originalPrice": 22960,
    "rating": 4.84,
    "reviewsCount": 104,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 20,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-46",
    "name": "Vortex Sling Bag V4",
    "tagline": "Aircraft-grade aluminum materials built to last.",
    "category": "apparel",
    "price": 22468,
    "originalPrice": 23336,
    "rating": 4.88,
    "reviewsCount": 261,
    "badge": "BESTSELLER",
    "image": "./assets/backpack.png",
    "inStock": 20,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-47",
    "name": "Cipher Duffel Pack V4",
    "tagline": "Curved sapphire display and adaptive bio-sensors.",
    "category": "apparel",
    "price": 15013,
    "originalPrice": null,
    "rating": 4.33,
    "reviewsCount": 250,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 26,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-48",
    "name": "Hyper Backpack V4",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 9986,
    "originalPrice": 15402,
    "rating": 4.62,
    "reviewsCount": 44,
    "badge": "HOT ITEM",
    "image": "./assets/backpack.png",
    "inStock": 18,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-49",
    "name": "Matrix Backpack V4",
    "tagline": "Ergonomic design tailored for premium comfort.",
    "category": "apparel",
    "price": 6824,
    "originalPrice": null,
    "rating": 4.07,
    "reviewsCount": 289,
    "badge": "",
    "image": "./assets/backpack.png",
    "inStock": 0,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  },
  {
    "id": "prod-apparel-50",
    "name": "Pulse Sling Bag V5",
    "tagline": "Next-generation micro-weave fabric for daily use.",
    "category": "apparel",
    "price": 24983,
    "originalPrice": 28088,
    "rating": 4.01,
    "reviewsCount": 268,
    "badge": "NEW",
    "image": "./assets/backpack.png",
    "inStock": 8,
    "colors": [
      "Space Black",
      "Lunar White",
      "Titanium Gray"
    ],
    "description": "This premium futuristic apparel gear combines cutting-edge technology with high-performance metrics. Features ergonomic craft, intelligent integrations, and lightweight construct.",
    "specs": {
      "Condition": "Brand New",
      "Warranty": "2 Years ZeemoCare",
      "Material": "Eco-Polymer & Anodized Aluminum"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DEFAULT_PRODUCTS;
}
