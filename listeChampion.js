const divChampion = `
    <div class="champion">
        <a href="Champions/__name__/Aatrox.html">
            <img src="Champions/akali/ChampionList_akali.jpg" alt="champion___name__"/>
            __name__
        </a>
    </div>`
;
console.log("js")
document.addEventListener("DOMContentLoaded", () => {
    fetch("api/liste.json").then((response) =>
        response.json().then(fetchApiDone)
    );
});

const fetchApiDone = (json) => {
    const divList = document.getElementById("list");
    console.log("json: ", json)
    json.forEach((champion) => {
        console.log("champion: ", champion)
        console.log("champion.name: ", champion.name)

        let divChampion = document.createElement("div");
        divChampion.className = "champion";
        divList.appendChild(divChampion);

        let aChampion = document.createElement("a");
        aChampion.textContent = champion.name;
        aChampion.href = "Champions/"+champion.name+"/"+champion.name+".html"
        divChampion.appendChild(aChampion);

        let imgChampion = document.createElement("img");
        imgChampion.src = "Champions/"+champion.name+"/ChampionList_"+champion.name.toLowerCase()+".jpg";
        imgChampion.alt = "champion_"+champion.name;
        aChampion.appendChild(imgChampion);


    });
};

