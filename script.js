const tabsbtns = document.querySelectorAll(".tabs_nav button");
const tabsItems = document.querySelectorAll(".tabs_item");

tabsbtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs(); 
    showTab(index);
}));
//функция скрывает табы и убирает active у кнопки
function hideTabs(){
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsbtns.forEach(btn => btn.classList.remove("active"));
}

//функция показывает переданный номер таба и делает соответвующую ему кнопку активной
function showTab(index){
    tabsItems[index].classList.remove("hide");
    tabsbtns[index].classList.add("active");
}


//anchours

const anchours = document.querySelectorAll(".header_nav a")
anchours.forEach(a => {
    a.addEventListener("click", function(event){
        event.preventDefault();
        const id = a.getAttribute("href");
        const elem = document.querySelector(id);
        window.scroll({
            top: elem.offsetTop - 80, behavior:"smooth"
        });


    })
})