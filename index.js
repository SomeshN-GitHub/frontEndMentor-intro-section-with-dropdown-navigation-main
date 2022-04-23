window.onclick =(event)=>{
    if (!event.target.matches('.menu_link')){
        if(event.target.id == 'menu'){
            event.target.src = event.target.src.includes('close') ?
         './images/icon-menu.svg' : '/images/icon-close-menu.svg';
         document.getElementsByClassName('nav_links_container')[0].classList.toggle("show");
         document.getElementsByTagName('body')[0].classList.toggle('body_overlay');
        }

        Array.from(document.getElementsByClassName("sub_list")).forEach(element => {
            element.classList.remove("show");
        });
        Array.from(document.getElementsByClassName("menu_link")).forEach(element => {
            element.firstElementChild.src = "/images/icon-arrow-down.svg";
        });
        
    }else {
        event.target.children[1].classList.toggle("show");
        event.target.firstElementChild.src =
        event.target.firstElementChild.src.includes('up') ? 
        '/images/icon-arrow-down.svg' :
        '/images/icon-arrow-up.svg';
    }
}

