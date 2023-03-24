import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";


const tours = [
  {
    id: "01",
    title: "Maharaja Sayajirao University",
    place: "Alkapuri",
    distance: 300,
    address:"Pratapgunj, Vadodara, Gujarat 390002",
    price: 199,
    maxGroupSize: 10,
    desc: "Maharaja Sayajirao University of Baroda, formerly Baroda College, is a public university in the city of Vadodara, Gujarat, India. Originally established as a college in 1881, it became a university in 1949 after India's independence.",
    reviews: [
      {
        name: "Adarsh Jha",
        rating: 4.6,
      },
    ],
    avgRating: 4.0,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Laxmi Vilas Palace ",
    place: "Moti Baug",
    distance: 400,
    address:"address",
    price: 499,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Devanshu",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Pavagad",
    place: "Halol",
    distance: 500,
    address:"address",
    price: 199,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Sayaji Baug",
    place: "Fatehgunj",
    distance: 500,
    address:"address",
    price: 299,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Maharaja Fatesingh Museum",
    place: "Moti Baug",
    distance: 500,
    address:"address",
    price: 399,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Sardar Patel National Memorial",
    place: "Ahmedabad",
    distance: 500,
    address:"address",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 3,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "07",
    title: "Gir National Park",
    place: "Sasan-Gir",
    distance: 500,
    address:"address",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Statue of Unity",
    place: "Bharuch",
    distance: 500,
    address:"address",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      // {
      //   name: "jhon doe",
      //   rating: 4.6,
      // },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
];

export default tours;
