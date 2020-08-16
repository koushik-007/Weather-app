const inputValue = document.getElementById('searchBox');
const button = document.getElementById('button');
const inputCityName = document.getElementById('cityName');
const countryName = document.getElementById('country');
const temp = document.getElementById('temp');
const description = document.getElementById('description');


button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=d7c0ffc0ba061f0c4da975df0045542c`)
    .then(response => response.json())
    .then(data => {
        const cityTemp = data.main.temp;
        temp.innerText = (cityTemp - 272.15).toFixed(2);
        console.log(cityTemp);

        inputCityName.innerText = data.name;
        countryName.innerText = data.sys.country;
        description.innerText = data.weather[0].main;
        
        console.log(data);
    })
    .catch(error => console.log(error));    
})