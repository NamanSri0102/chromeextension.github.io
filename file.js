
let myleads=[];
const inputel=document.getElementById("input-el");
const inputbutton = document.getElementById("input-button");
const ulel=document.getElementById("ul-el");
const deletebutton = document.getElementById("delete-button");
const tabbutton= document.getElementById("save-tab");
let leadsfromlocal=JSON.parse(localStorage.getItem("myleads"));

if(leadsfromlocal)
{
    myleads=leadsfromlocal;
    renderleads();
}



tabbutton.addEventListener("click", function(){

    chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderleads();
    })
})

deletebutton.addEventListener("dblclick",function(){
    localStorage.clear();
    myleads=[];
    renderleads();
})
inputbutton.addEventListener("click",function(){
    myleads.push(inputel.value);
    inputel.value="";

    localStorage.setItem("myleads",JSON.stringify(myleads))

 renderleads();
})



function renderleads(){

    let listitems=""
for(let i=0;i<myleads.length;i++)
{
   
      listitems += `
      <li>
      <a target='_blank' href = '${myleads[i]}'>
          ${myleads[i]}
          </a>
     </li>      
      `
}
ulel.innerHTML = listitems;
}


