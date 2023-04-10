// let arrow =document.querySelectorAll(".arrow")[0];
// let slider=document.querySelectorAll(".slider")[0];
// let header = document.querySelectorAll(".header")[0];
// arrow.addEventListener("click", ()=>{
//     slider.classList.toggle("close");
// });

// let togglebtn=document.querySelectorAll(".checkbox")[0];
// let body = document.querySelectorAll(".body")[0];
// let mainbody=document.querySelectorAll(".main__slider")[0];
// let search=document.querySelectorAll(".fa-magnifying-glass")[0];
// let navContainer = document.querySelectorAll(".nav")[0];
// let colorlogo = document.querySelectorAll(".nav__logo")[0];
// let bglist = document.querySelectorAll(".nav__menu")[0];
// let navlink = document.querySelectorAll(".nav__link")[0];

// togglebtn.addEventListener("click", ()=>{
//     body.classList.toggle("dark");
//     mainbody.classList.toggle("dark");
//     slider.classList.toggle("middark");
//     slider.classList.toggle("color");
//     search.classList.toggle("searchcolor");
//     header.classList.toggle("middark");
//     header.classList.toggle("dark");
//     navContainer.classList.toggle("middark");
//     colorlogo.classList.toggle("color");
//     bglist.classList.toggle("middark");
//     navlink.classList.toggle("color");
// })


let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e)=>{
                let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
                arrowParent.classList.toggle("showMenu");
            });
        }
        let sidebar = document.querySelector(".siderbar");
        let sidebarBtn = document.querySelector(".bx-menu");
        console.log(sidebarBtn);
        sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        });


/* ================= SEARCH MENU ================ */
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, showMenu;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    // showMenu = li.querySelectorAll("sub-menu");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }