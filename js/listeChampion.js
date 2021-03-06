document.addEventListener("DOMContentLoaded", () => {
    fetch("api/liste.json").then((response) =>
        response.json().then(fetchApiDone)
    );
});

const fetchApiDone = (json) => {
    const divList = document.getElementById("list");
    // console.log("json: ", json)
    json.forEach((champion) => {
        /*console.log("champion: ", champion)
        console.log("champion.name: ", champion.name)*/

        let divChampion = document.createElement("div");
        divChampion.className = "champion";
        divChampion.id = champion.name;
        divChampion.addEventListener("click", function(){
            localStorage.setItem('name_champ', divChampion.id);
        })
        divList.appendChild(divChampion);

        let aChampion = document.createElement("a");
        aChampion.textContent = champion.name;
        aChampion.href = "champion.html"
        divChampion.appendChild(aChampion);

        let imgChampion = document.createElement("img");
        imgChampion.src = "Images/Icones/ChampionList_"+champion.name.toLowerCase()+".jpg";
        imgChampion.alt = "champion_"+champion.name;
        aChampion.appendChild(imgChampion);

    });
};