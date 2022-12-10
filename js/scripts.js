

function asideAnimation(){
    document.addEventListener('scroll', (event) => {
        let altura = window.pageYOffset;
        if(altura > 50){
            document.getElementsByTagName("aside")[0].classList.add("active");
        }else{
            document.getElementsByTagName("aside")[0].classList.remove("active");
        }
    });
}

asideAnimation();
