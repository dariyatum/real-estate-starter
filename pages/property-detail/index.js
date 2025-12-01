const sectionPropertiesElement = document.getElementById("imgages");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      console.log(data);
      
      for (let i = 0; i < 4; i++) {
        sectionPropertiesElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="images-photo" src="${Array.isArray(data[i].images) ? data[i].images[0] : data[i].images}" alt="${data[i].title?.en ?? ''}" />
        </a>
      `;
      }
    }
  });



const cardDetailElement = document.getElementById("card-detail");
 fetch("../../public/data/properties.json")
    .then((response) => response.json())
    .then((data) => {{
        cardDetailElement.innerHTML = `
          <div class="card-detail">
            <h2>${property.title?.en ?? ''}</h2>
            <img class="card-detail__image" src="${data[i].images }"/>
            <p>${property.description?.en ?? ''}</p>
          </div>
        `;
      }
    })
    .catch((err) => console.error(err));
