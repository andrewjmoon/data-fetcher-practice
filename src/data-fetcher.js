let data = [
  {
    _id: "5c94c8b93f76fd340d6652c9",
    index: 0,
    guid: "8d64e36a-db2b-4527-9cd5-313718702341",
    isActive: false,
    balance: "$1,594.38",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "brown",
    name: "Erika Pope",
    gender: "female",
    company: "ZENSURE",
    email: "erikapope@zensure.com",
    phone: "+1 (901) 490-3151"
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  },
  {
    name: "Bob Jones",
    age: 28
  }
];

export const fetchData = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 500);
  });
