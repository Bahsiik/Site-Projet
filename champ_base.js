document.addEventListener("DOMContentLoaded", () => {
    fetch("api/liste.json").then((response) =>
        response.json().then(fetchApiDone)
    );
});

const fetchApiDone = (json) => {
    const pStory = document.getElementById("story");
    const imgOpentab1 = document.getElementById("img_opentab1");
    const imgOpentab2 = document.getElementById("img_opentab2");
    const imgOpentab3 = document.getElementById("img_opentab3");
    const imgOpentab4 = document.getElementById("img_opentab4");
    const imgOpentab5 = document.getElementById("img_opentab5");
    const pPassif = document.getElementById("passif");
    const pA = document.getElementById("A");
    const pZ = document.getElementById("Z");
    const pE = document.getElementById("E");
    const pR = document.getElementById("R");
    const pGameplay = document.getElementById("gameplay");
    const imgObjets = document.getElementById("img_objets");
    const imgSkills = document.getElementById("img_skills");
    const imgSorts = document.getElementById("img_sorts");
    const imgRunes = document.getElementById("img_runes");



    // console.log("json: ", json)
    json.forEach((champion) => {
        console.log("champion: ", champion)
        console.log("champion.name: ", champion.name)
        console.log("champion.championName.totalSkin: ", champion[champion.name].totalSkin)
console.log("img_objets", img_objets)
        if(champion.name === "Aatrox"){
            pStory.textContent = champion[champion.name].story;
            imgOpentab1.src="Images/Comp/"+champion.name+"P.png"
            imgOpentab2.src="Images/Comp/"+champion.name+"E.png"
            imgOpentab3.src="Images/Comp/"+champion.name+"Q.png"
            imgOpentab4.src="Images/Comp/"+champion.name+"R.png"
            imgOpentab5.src="Images/Comp/"+champion.name+"W.png"
            pPassif.textContent = champion[champion.name].skills[0];
            pA.textContent = champion[champion.name].skills[1];
            pZ.textContent = champion[champion.name].skills[2];
            pE.textContent = champion[champion.name].skills[3];
            pR.textContent = champion[champion.name].skills[4];
            pGameplay.textContent = champion[champion.name].gameplay;
            imgObjets.src="Images/Gameplay/"+champion.name+"_objets.png"
            imgSkills.src="Images/Gameplay/"+champion.name+"_runes.png"
            imgSorts.src="Images/Gameplay/"+champion.name+"_skills.png"
            imgRunes.src="Images/Gameplay/"+champion.name+"_sorts.png"
        }
    });
};

