function asideAnimation()
{
    document.addEventListener('scroll', (event) => {
        let altura = window.pageYOffset;
        if(altura > 50){
            document.getElementsByTagName("aside")[0].classList.add("active");
        }else{
            document.getElementsByTagName("aside")[0].classList.remove("active");
        }
    });
}

function pill(position)
{
    let carrosel = document.querySelector(".carrosel");
    let carroselPills = document.querySelectorAll(".pill");
    let carroselItemWidth = document.querySelector(".carrosel li").clientWidth + 32;
    
    carroselPills.forEach( i => {
        i.classList.remove("active");
    })
    
    carrosel.scroll({
        left: carroselItemWidth * position,
        top: 0,
        behavior: 'smooth'
    });

    event.target.classList.add("active");
}

function menu()
{
    if(document.getElementsByTagName("nav")[0].classList.contains("active")){
        document.getElementsByTagName("nav")[0].classList.remove("active");
        return;
    }
    document.getElementsByTagName("nav")[0].classList.add("active");
}

asideAnimation();