type Operation = 'multiply' | 'add' | 'divide';
type Result = number|string
const multiplicator = (a:number, b:number, operation:Operation):Result => {
if(operation === "divide"){
    if (b === 0){ 
        throw new Error('Can\'t divide by 0!');
    }
    return a / b
}else if (operation === "add"){
    return a + b
}
    return "not valid operation"
}
  

 try {
    console.log(multiplicator(2, 0, "divide"));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong: '
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
  }