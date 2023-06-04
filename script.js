console.log("Running");
document.querySelector(".cross").style.display = "none";
document.querySelector(".cheeseBurger").addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".cheese").style.display = "inline";
        document.querySelector(".cross").style.display = "none";
    }
    else{
        document.querySelector(".cheese").style.display = "none";
        setTimeout(()=>{
            document.querySelector(".cross").style.display = "inline";
        }, 300);
    }
})