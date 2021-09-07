console.log('Welcome to the calculator');

let screen = document.getElementById('screen');
let screenVal  = '';

let button = document.querySelectorAll('button');
for( let item of button){
    item.addEventListener('click',(e)=>{
   let buttonText = e.target.innerText;
   if(buttonText == 'X')
   {
       screenVal += '*';
       screen.value = screenVal;
    }
    else if(buttonText == 'C')
    {
        screenVal = '';
        screen.value = screenVal;
    }
    else if(buttonText == '=')
    {
        screen.value= eval(screenVal);
    }
    else{
        // console.log(item);
       screenVal += buttonText;
screen.value = screenVal;
   }
 })
}












