const sectionAgentsElement = document.getElementById("agents__card-container")

fetch("/public/data/agents.json")
    .then((response) => response.json())
    .then((data) => {
        if (data.length > 0){
            for (let i = 0; i < 8; i++){
                sectionAgentsElement.innerHTML += `
                <div class="agents__artist-card agent__cart">
                    <div class="agents__card-image ">
                        <img class="agents__card-image-img" src="${data[i].profile_photo}" alt="Artist Image">
                    </div>
                    <div class="agents__card-content">
                        <h2 class="agents_card-name">${data[i].full_name}</h2>
                        <p class="agent__card-role">${data[i].address}</p>
                        <a href="#"><button class="agents__card-profile-btn">View profile</button></a>
                    </div>
                </div>
                `;
            }
        }
    });