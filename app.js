const wrapper = document.querySelector(".sliderwrapper")
const menuitems =document.querySelectorAll(".menu")

menuitems.forEach((item,index) => {
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-80 * index}vw)`;    
    });
});