let subWrap = document.querySelector(".sub_wrap");


let depth = subWrap.children;
let ds = Array.from(depth);

ds.forEach((sub)=>{
    sub.addEventListener('mouseenter',function(){
        this.lastElementChild.classList.add('show');
    })
    sub.addEventListener("mouseleave",function(){
        console.log(this.lastElementChild.classList.contains("category_sub"))
        if(this.lastElementChild.classList.contains("category_sub")){
        this.lastElementChild.classList.remove('show');
        }
    })
})




