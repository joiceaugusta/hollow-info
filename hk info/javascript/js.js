function scrollPara(id) {
    const elemento = document.querySelector(id);
    
    if (elemento) {
        elemento.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}