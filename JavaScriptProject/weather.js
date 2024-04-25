let input = document.getElementById('inp')
let type = document.getElementById('type')
let temp = document.getElementById('temp')
let city = document.getElementById('city')
let API_KEY = '80f4797e6994727b78502522e5f0d12e'

const data = async function (search) {

    let myData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`)
    console.log(myData)
    let jsondata = await myData.json()
    console.log(jsondata)
    city.innerHTML = input.value;
    temp.innerHTML = Math.floor(jsondata.main.temp) + '°C'
    type.innerHTML = jsondata.weather[0].main

}

function getdata() {
    search = input.value;
    data(search)



}

// add to cart-api
// filter


// react-javascript
// local stoage session storage-