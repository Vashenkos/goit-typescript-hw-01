interface User {  
  name: string;  
  age: number;  
  email: string;  
  address?: {  
    city: string;  
    country: string;  
  };  
}  

const ManWithAddress: User = {  
  name: "Mango",  
  age: 30,  
  email: "john@example.com",  
  address: {  
    city: "New York",  
    country: "USA",  
  },  
};  

const ManWithoutAddress : User = {  
  name: "Mango",  
  age: 30,  
  email: "john@example.com",  
};