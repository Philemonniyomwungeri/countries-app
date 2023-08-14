let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let results = document.getElementById("results");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL =`https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.value(data[0].languages).toString().split(",").join(", ")
            // );
            results.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
        <h2>Capital:</h2>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h2>Continents</h2>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h2>Population:</h2>
        <span>${data[0].population}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h2>Currency</h2>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name
        } - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h2>Common languages</h2>
        <span>${Object.values(data[0].languages).toString().split(",").join(", ")
        }</span>
        </div>
        </div>
        `;
        })
        .catch (() => {
            if(countryName.length == 0){
                results.innerHTML=`<h3>the input field can not be empty</h3>`;
            }
            else{
                results.innerHTML=`<h3>please enter a valid country.name</h3>`;
            }
        })
    });