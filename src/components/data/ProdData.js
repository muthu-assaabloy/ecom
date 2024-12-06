const prodData = [
  {
    id: 1,
    title: "Canvas Bag",
    description:
      "Lightweight canvas bag with long handles. Made of 100% organic Fairtrade cotton. Reinforced at stress points. Neutral® and fairtrade flaglabels on the side of the bag.",
    price: 50,
    points: 10,
    quantity: 50,
    category: "Bags",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 2,
    title: "Steel Water Bottle",
    description:
      "This highly durable all-stainless vacuum bottle/mug offers superior thermal retention. Though its unique slim body is designed to occupy minimal space. Features include a flip-open lid with a lock, and a stick-resistant polished stainless interior.",
    price: 300,
    points: 20,
    quantity: 5,
    category: "Kitchen and Dining",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 3,
    title: "Lunch Boxes(Set of 2)",
    description:
      "Plastic Material, Leak Proof, Durable with Capacity of 290ML and dimensions of 18.5L x 15W x 9H Centimeters",
    price: 300,
    points: 20,
    quantity: 50,
    category: "Kitchen and Dining",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 4,
    title: "Notepad",
    description:
      "A5 notebook with matching colour elastic closure and ribbon. Includes 96 sheets (60g/m2) lined paper.",
    price: 30,
    points: 20,
    quantity: 50,
    category: "Office Supplies",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 5,
    title: "Tshirt",
    description: "This highly durable Polo Tshirt made up of cotton",
    price: 250,
    points: 20,
    quantity: 50,
    category: "Clothing",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 6,
    title: "Laptop Cover",
    description:
      "Gizga Essentials Nylon Laptop Bag Sleeve Case Cover Pouch for 13.3 Inch(33.78CM) Laptop MacBook, Free Accessories Pouch, Water Repellent, Ultra-Light, Easy Carry, Office Bag for Men & Women, Grey",
    price: 300,
    points: 20,
    quantity: 50,
    category: "Gadgets",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 7,
    title: "Earbuds",
    description:
      "Airpods Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
    price: 2000,
    points: 20,
    quantity: 50,
    category: "Gadgets",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },

  {
    id: 8,
    title: "Wireless Keyboard",
    description:
      "Bluetooth Wireless Keyboard with Easy-Switch for Up to 3 Devices for PC, Laptop, Windows, Mac, Chrome OS, Android, iPad OS, 6 Months Backup with Type C Charging ",
    price: 800,
    points: 20,
    quantity: 50,
    category: "Gadgets",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 9,
    title: "Umbrella",
    description:
      "Golf umbrella with EVA handle, fibreglass shaft and metal ribs. Polyester. ",
    price: 300,
    points: 20,
    quantity: 50,
    category: "Home Supplies",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 10,
    title: "Coffee Mug",
    description:
      "Stoneware mug with ASSA ABLOY logo on one side. Tagline on the opposite side of the mug. (250 ml)",
    price: 150,
    points: 20,
    quantity: 50,
    category: "Kitchen and Dining",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 11,
    title: "Amazon Card",
    description: "Amazon Pay EGift Voucher worth Rs. 1000",
    price: 1000,
    points: 200,
    quantity: 50,
    category: "Voucher",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
  {
    id: 12,
    title: "Star Performer Amazon Voucher",
    description: "Amazon Pay EGift Voucher worth Rs. 2000",
    price: 2000,
    points: 350,
    quantity: 50,
    category: "Voucher",
    isActive: true,
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/416V-a6G3eL.jpg",
      "https://m.media-amazon.com/images/I/31Cw95sHXsS._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/51rDrxUj5bS._SY445_SX342_QL70_FMwebp_.jpg",
    ],
    colour: ["#0000FF", "#0000CD", "#4169E1", "#1E90FF"],
  },
];
export default prodData;