// URI='mongodb+srv://almapowell:aWPYSxSewRXlbgLt@cluster0.wacp04q.mongodb.net/?retryWrites=true&w=majority'

export const API =
  "https://3y12d1go0i.execute-api.us-east-1.amazonaws.com/prod";

// export const API = "http://localhost:8080";

export const jordanError = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h1>Sorry there was an error.</h1>
    <span>Try again and if it persists I want you to: </span>
    <ol>
      <li>
        <b>1.</b> Right click the screen
      </li>
      <li>
        <b>2.</b> Go to inspect
      </li>
      <li>
        <b>3.</b> Accross the top bar, click on 'Console'
      </li>
      <li>
        <b>4.</b> Send me a screenshot of the error
      </li>
    </ol>
  </div>
);

export const categories = [
  {
    id: 1,
    title: "Tables",
    link: "tables",
    products: [
      {
        id: 1,
        image:
          "https://cdnimg.webstaurantstore.com/images/products/large/524156/1966886.jpg",
        title: "6' Round Folding Table",
        price: "12.00",
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
        image:
          "data:image/jpeg;base64,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",
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
        title: "White Table Covers",
        price: "16.00",
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
        price: "50",
      },
      {
        id: 5,
        image: "https://wp.catalog.d.cpartyrentals.com/itemimages/12157t.jpg",
        title: "Corn Hole",
        price: "50",
      },
    ],
    icon: "https://wp.catalog.d.cpartyrentals.com/itemimages/SUPERCAT6.jpg",
  },
];

export const mockProducts = [
  {
    id: 7,
    image:
      "https://tentandtable.net/media/catalog/product/cache/0a0b9fb17b890441148624e1fcaa5288/w/k/wkender20x30_white_whtbkgrd_1_.jpg",
    title: "30' x 40' Tent",
    price: "400.00",
  },
  {
    id: 1,
    image:
      "data:image/jpeg;base64,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",
    title: "8' Rectangle Banquet Table",
    price: "12.00",
  },
  {
    id: 2,
    image:
      "https://cdnimg.webstaurantstore.com/images/products/large/524156/1966886.jpg",
    title: "6' Round Folding Table",
    price: "12.00",
  },
  {
    id: 3,
    image:
      "data:image/jpeg;base64,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",
    title: "White Folding Chair",
    price: "1.75",
  },
  {
    id: 4,
    image: "https://wp.catalog.d.cpartyrentals.com/itemimages/CAT70.jpg",
    title: "White Table Covers",
    price: "16.00",
  },
  {
    id: 5,
    image: "https://wp.catalog.d.cpartyrentals.com/itemimages/12157t.jpg",
    title: "Giant Jenga",
    price: "50.00",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/41CFULBJ+fL._AC_SY1000_.jpg",
    title: "Corn Hole",
    price: "50.00",
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
        price: "12.00",
        quantity: 5,
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
        price: "12.00",
        quantity: 2,
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
        price: "12.00",
        quantity: 2,
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
        price: "12.00",
        quantity: 2,
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
