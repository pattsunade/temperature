function changeCity() {
    
    let city = prompt('Which city are you in?');
    let time = prompt('what timperature is it?');
    

    if (time < 0) {

        let h1 = document.querySelector('h1');
        h1.innerHTML = ` 😥 </br >  Currently ${time} º in ${city}`;
    } else {
        
        let h1 = document.querySelector('h1');
        h1.innerHTML = ` 😁 </br >  Currently ${time} º in ${city}`;
    }

        
}

    


let cityButton = document.querySelector('button');

    cityButton.addEventListener('click', changeCity);