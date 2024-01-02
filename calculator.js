let input=document.getElementById('inputbox')
let buttons = document.querySelectorAll('button');
let string="";
let arr = Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        // For evaluate  the value After click on the Equal button
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            
        }
        // Click on button AC after clear Screen
        else if(e.target.innerHTML == 'AC'){
            string=""
            input.value=string;
    
        }
        // Remove last digit inside display
        else if(e.target.innerHTML=="Del"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        // For add the string into value or operator 
        else {string += e.target.innerHTML;
            input.value = string;}   
    })
})


