let parent = document.getElementById("parent");
let secondParent = document.getElementById("secondParent");
parent.addEventListener("click",e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
})
secondParent.addEventListener("click",e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
})