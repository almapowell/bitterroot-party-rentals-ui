export const categories = [
  {
    id: 1,
    title: "Tables",
    link: "tables",
    products: [
      {
        id: 1,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13664t.jpg",
        title: "Round Folding Table",
        price: "8.00",
      },
    ],
    icon: "https://wp.catalog.d.cpartyrentals.com/itemimages/SUPERCAT15.jpg",
  },
  {
    id: 2,
    title: "Chairs",
    link: "chairs",
    products: [
      {
        id: 2,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13975t.jpg",
        title: "White Folding Chair",
        price: "1.75",
      },
    ],
    icon: "https://wp.catalog.d.cpartyrentals.com/itemimages/SUPERCAT1.jpg",
  },
  {
    id: 3,
    title: "Linens",
    link: "linens",
    products: [
      {
        id: 3,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/CAT70.jpg",
        title: "Imperial Collection",
        price: "0.25",
      },
    ],
    icon: "https://wp.catalog.d.cpartyrentals.com/itemimages/SUPERCAT22.jpg",
  },
  {
    id: 4,
    title: "Games",
    link: "games",
    products: [
      {
        id: 4,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/12157t.jpg",
        title: "Giant Jenga",
        price: "1.75",
      },
    ],
    icon: "https://wp.catalog.d.cpartyrentals.com/itemimages/SUPERCAT6.jpg",
  },
];

export const cartItems = [
  {
    id: 1,
    cartQuantity: 1,
    image: "https://wp.catalog.d.cpartyrentals.com/itemimages/12157t.jpg",
    title: "Giant Jenga",
    price: "1.75",
  },
  {
    id: 2,
    cartQuantity: 1,
    image: "https://wp.catalog.d.cpartyrentals.com/itemimages/CAT70.jpg",
    title: "Imperial Collection",
    price: "0.25",
  },
  {
    id: 3,
    cartQuantity: 1,
    image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13975t.jpg",
    title: "White Folding Chair",
    price: "1.75",
  },
  {
    id: 4,
    cartQuantity: 1,
    image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13664t.jpg",
    title: "Round Folding Table",
    price: "8.00",
  },
];

export const backArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-arrow-left"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
    />
  </svg>
);

export const allRequests = [
  {
    id: 1,
    cartItems: [
      {
        id: 1,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13664t.jpg",
        title: "Round Folding Table",
        price: "8.00",
        cartQuantity: 5,
      },
    ],
    customerInformation: {
      first: "Alma",
      last: "Powell",
      email: "alma@gmail.com",
      address: "123 Main Street Urbandale IA 50322",
      phone: "4063816248",
      date: "2022-08-19",
      delivery: true,
      notes: "this is going to be a great day",
      referal: 1,
    },
    status: "Pending",
  },

  {
    id: 2,
    cartItems: [
      {
        id: 1,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13664t.jpg",
        title: "Round Folding Table",
        price: "8.00",
        cartQuantity: 2,
      },
    ],
    customerInformation: {
      first: "Megan",
      last: "Powell",
      email: "alma@gmail.com",
      address: "123 Main Street Urbandale IA 50322",
      phone: "8018548545",
      date: "2022-08-19",
      delivery: true,
      notes: "this is going to be a great day",
      referal: 1,
    },
    status: "Pending",
  },
  {
    id: 3,
    cartItems: [
      {
        id: 1,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13664t.jpg",
        title: "Round Folding Table",
        price: "8.00",
        cartQuantity: 2,
      },
    ],
    customerInformation: {
      first: "Machu",
      last: "Picu",
      email: "alma@gmail.com",
      address: "123 Main Street Urbandale IA 50322",
      phone: "8018548545",
      date: "2022-08-19",
      delivery: true,
      notes: "this is going to be a great day",
      referal: 1,
    },
    status: "Accepted",
  },
  {
    id: 4,
    cartItems: [
      {
        id: 1,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/13664t.jpg",
        title: "Round Folding Table",
        price: "8.00",
        cartQuantity: 2,
      },
    ],
    customerInformation: {
      first: "Statues",
      last: "AndAll",
      email: "italy@gmail.com",
      address: "123 Main Street Urbandale IA 50322",
      phone: "87934082",
      date: "2022-08-19",
      delivery: true,
      notes: "this is going to be a great day",
      referal: 1,
    },
    status: "Accepted",
  },
];
