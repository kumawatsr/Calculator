let string="";
let buttons=document.querySelectorAll('.b');
Array.from(buttons).forEach((b)=>{
    b.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='+/-')
        {
            string=string*(-1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='%')
        {
            string=string/100;
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
