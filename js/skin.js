document.addEventListener("DOMContentLoaded", () => {
    fetch("api/liste.json").then((response) =>
        response.json().then(fetchApiDone)
    );
});
const id_champ =  localStorage.getItem('name_champ');


const fetchApiDone = (json) => {
    const divCarrou = document.getElementById("carrou");
    const pTitle = document.getElementById("titre");
    json.forEach((champion) => {
        if(champion.name === id_champ){
            pTitle.textContent = "Skins "+champion.name;
            for(let i=0;i < champion[champion.name].totalSkin; i++){
                let divCarrousel = document.createElement("div");
                if(i == 0)
                    divCarrousel.className = "carousel-item active";
                else
                    divCarrousel.className = "carousel-item";
                divCarrou.appendChild(divCarrousel);

                let imgCarrousel = document.createElement("img");
                imgCarrousel.className = "d-block w-100";
                imgCarrousel.src = "Images/Skin/"+champion.name+"_"+i+".jpg";
                divCarrousel.appendChild(imgCarrousel);
            }
        }
    });
};

