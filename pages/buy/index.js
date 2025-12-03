const sectionPropertiesElement = document.getElementById("listings");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      console.log(data);
      
      for (let i = 0; i < data.length; i++) {
        sectionPropertiesElement.innerHTML += `
               <a class="card" href="/pages/property/${data[i].title.en}">
            <img class="card__media" src="${data[i].images}"
                alt="${data[i].title.en}" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.en}</h3>
                <div class="card__location"> <i class="fa-solid fa-location-dot" style="color: #2ec27e;"></i>${data[i].location.city}  </div>
                <div class="card__tion">${data[i].location.district}  </div>
                <div class="card__meta"> ${data[i].price} ${data[i].currency} </div>
                <div class="card__icon"> <i class="fa-solid fa-bed" style="color: #2ec27e;"></i>${data[i].bedrooms} </div>
                <div class="card__icon"> <i class="fa-solid fa-bath" style="color: #2ec27e;"></i>${data[i].bathrooms} </div>
                <span class="badge">View</span>
            </div>
        </a>
        
      `;
      }
    }
  });