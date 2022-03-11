// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
        let sortedAstronauts = json.sort(function(a,b){return a.hoursInSpace-b.hoursInSpace});
        let container = document.getElementById("container");
        container.innerHtml +=`<h3>Astronaut Count: ${sortedAstronauts.length}</h3>`;
        let allMyHtml = "";
        for (let index = 0; index<json.length; index++){
            let myHtml = `
            <div class="astronaut">
            <div class="bio">
                <h3> ${json[index].firstName} ${json[index].lastName} </h3>
                <ul>
                <li>Hours in space: ${json[index].hoursInSpace}</li>
                <li ${json[index].active? 'style="color:green;"' : ''}>Active: ${json[index].active}</li>
                <li>Skills : ${json[index].skills}
                </ul>
                    <img class="avatar" src="${json[index].picture}"> </img>
            </div>
            </div>
        `;
        allMyHtml += myHtml;
        }
        container.innerHTML = allMyHtml;
      });
   });
