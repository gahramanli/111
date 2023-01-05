const btn =document.getElementById('onhand')
const modal=document.getElementById('s22cond')




function Clicked(e){
    e.preventDefault()
    console.log(modal);
  
    modal.style.display="block"
}
btn.addEventListener('click',Clicked)