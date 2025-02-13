// _id: string;
// name: string;
// email: string;
// password: string;
// role: "customer" | "admin";
//   address?: {
//     street?: string;
//     city?: string;
//     zip?: string;
//   };
// createdAt: Date;
// updatedAt: Date;
let users = [
  {
    name: "zula",
    password: "1234",
    email: "test",
    address: {
      street: "dasd",
      city: "dasd",
      zip: "aaaaa",
    },
    _id: "1",
    role: "customer",
    createdAt: "date",
    updatedAt: "date",
  },
];
module.exports = { users };
