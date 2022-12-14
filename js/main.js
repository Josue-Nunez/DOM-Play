function highlight(el)
{
    if(el.style.backgroundColor =='white')
    {
        el.style.backgroundColor='yellow';
    }
    else
    {
        el.style.backgroundColor='white';
    }
}

function myAlert()
{
    alert("Im clicked")
}

function highlightActor(actor)
{
    
    let spans = document.querySelectorAll("#play span");
    for(const mySpan of spans) 
    {
        if(actor == mySpan.dataset.actor)
        {
            mySpan.style.backgroundColor='yellow';
        }
        else
        {
            mySpan.style.backgroundColor='white';
        }
    }
    
    
    
    //alert(actor)
}

let spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans)
{
    //mySpan.addEventListener("click", myAlert);
    //alert(mySpan.dataset.actor);
    mySpan.addEventListener("click",function(ev){highlightActor(mySpan.dataset.actor)});
}

let actors = document.querySelectorAll(".hamlet");
 
console.log(actors);
 
for (let i = 0; i < actors.length; i++) {
 actors[i].style.backgroundColor = "orange";
}
