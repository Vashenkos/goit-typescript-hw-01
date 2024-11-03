function showMessage(message: string): void {  
  console.log(message);  
}  

function calc(num1: number, num2: number): number {  
  return num1 + num2;  
}  

function customError(): never {  
  throw new Error("An error has occurred");  
}  


showMessage("Hello, world!");  

const result = calc(5, 10);
showMessage(`The result of 5 + 10 is: ${result}`); 

try {  
  customError(); 
} catch (error: unknown) {  
  if (error instanceof Error) {  
    showMessage(`Caught an error: ${error.message}`); 
  } else {  
    showMessage("Caught an unknown error."); 
  }  
}