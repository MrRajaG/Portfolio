console.log("Running");
document.querySelector(".cross").style.display = "none";
document.querySelector(".cheeseBurger").addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
})