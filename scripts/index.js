console.log("Main JavaScript");

fetch("../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error fetching JSON:", error));


  const sectionPropertiesElement = document.getElementById("section__properties");

fetch("/public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 4; i++) {
        sectionPropertiesElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="${data[i].images}"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                <span class="badge">Available</span>
            </div>
        </a>
      `;
      }
    }
  });

// FEATURE ROW2

 const sectionPropertiesElement2 = document.getElementById("section__properties2");

fetch("/public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 2; i < 4; i++) {
        sectionPropertiesElement2.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="${data[i].images}"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                <span class="badge">Available</span>
            </div>
        </a>
      `;
      }
    }
  });

  const latestPropertiesElement = document.getElementById ("Latest-Properties");

  fetch("/public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0){
      for(let i = 4; i<5; i++) {
        latestPropertiesElement.innerHTML += `
                  <article class="card-top  card-top__latest-properties-long">
                <img class="card-top__media card-top__media-latest" src="${data[i].images}" alt="Studio near BKK1" />

                <div class="card-top__body card-top__body-latest">
                    <h3 class="card-top__title card-top_title-latest-long">${data[i].title.en}</h3>
                    <div class="card-top__meta card-top__meta-latest-long">${data[i].price} ${data[i].currency}/ month</div>
                </div>
               
            </article>
            <article class="card-top card-top__latest-properties-short">
                <img class="card-top__media card-top__media-latest" src="${data[i].images}" alt="Condo in Chroy Changvar" />
                <div class="card-top__body card-top__body-latest">
                    <h3 class="card-top__title card-top_title-latest-short">${data[i].title.en}</h3>
                    <div class="card-top__meta card-top__meta-latest-short">${data[i].price} ${data[i].currency}/ month</div>
                </div>
            </article>
        `;
      }
    }
  });

  const latestPropertiesElement2 = document.getElementById("Latest-Properties2");
  
  fetch("/public/data/properties.json")
  .then((res)=> res.json())
  .then((data) => {
    if (data.length > 0){
      for(let i= 5; i<6; i++){
        latestPropertiesElement2.innerHTML += `
        <article class="card-top card-top__latest-properties-short">
                <img class="card-top__media card-top__media-latest" src="${data[i].images}" alt="Townhouse in Russey Keo" />
                <div class="card-top__body card-top__body-latest">
                    <h3 class="card-top__title card-top_title-latest-short">${data[i].title.en}</h3>
                    <div class="card-top__meta card-top__meta-latest-short">${data[i].price} ${data[i].currency}</div>
                </div>
            </article>
             <article class="card-top card-top__latest-properties-long">
                <img class="card-top__media card-top__media-latest" src="${data[i].images}" alt="Townhouse in Russey Keo" />
                <div class="card-top__body card-top__body-latest">
                    <h3 class="card-top__title card-top_title-latest-long">${data[i].title.en}</h3>
                    <div class="card-top__meta card-top__meta-latest-long">${data[i].price} ${data[i].currency}</div>
                </div>
            </article>

        `
      }
    }
  })



          