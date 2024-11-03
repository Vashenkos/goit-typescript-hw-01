interface User {
    name: string;
    age: number;
    email: string;
    address?: {
      city: string;
      country: string;
    };
  }
  
  const mang: User = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
  };
  const mang: User = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
  };