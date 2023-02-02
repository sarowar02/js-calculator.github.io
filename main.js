let buttons=document.querySelectorAll('.btn');
var result=document.querySelector("#res");

let scrvalue="",val;

for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",(e)=>{
       let val=e.target.value;
       if(val=='C'){
        result.value="";
        val=0;
        scrvalue="";
       }
       else if(val=='=')
       {
        result.value=eval(scrvalue);
       }
       else 
       {
        scrvalue += val;
        result.value=scrvalue;
        
       }
       
    });
}