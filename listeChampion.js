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
        onclick="topList(this.id);"
        divChampion.addEventListener("click", ajout_storage(this))
        // divChampion.onclick=ajout_storage(this);
        divList.appendChild(divChampion);

        let aChampion = document.createElement("a");
        aChampion.textContent = champion.name;
        aChampion.href = "Vierge_champ.html"
        divChampion.appendChild(aChampion);

        let imgChampion = document.createElement("img");
        imgChampion.src = "Champions/"+champion.name+"/ChampionList_"+champion.name.toLowerCase()+".jpg";
        imgChampion.alt = "champion_"+champion.name;
        aChampion.appendChild(imgChampion);

    });
};

function ajout_storage(element){
    console.log("id: ", element.id);
    localStorage.setItem('name_champ', id);
}


//Javascript
// $(document).ready(function()
// {
//     $(#divChampion).click(function(event)
//     {
//         console.log(event.target.id); //Affiche enfantDeMaDiv
//         console.log(this.id); //Affiche divChampion
//     });
// });
// $(#divChampion).click(function(event)
// {
//     //Modifie l'identifiant de l'élément sur lequel l'internaute a cliqué
//     $(event.target).attr(id, toto);
//     //Modifie l'identifiant de l'élément auquel la fonction est liée
//     $(this).attr(id, toto);
// });
