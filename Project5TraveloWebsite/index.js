console.log("This is index.js")

let xhr = new XMLHttpRequest();
xhr.open('GET','index.json',true);

xhr.onload = function(){
    if(this.status===200){
        // console.log(this.responseText)

        let json = JSON.parse(this.responseText);
        console.log(json)

        let TouristPlaces = document.getElementById('TouristPlaces');
        let indexHtml = "";
        json.forEach(function(element){
             let data =`<div class="box">
                            <img src="${element.image}" alt="">
                             <h1 class="heading">${element.title}</h1>
                             <button class="btnHeading">07 places</button>
                        </div>`
          indexHtml += data;
        })
        TouristPlaces.innerHTML=indexHtml;
    }
}
xhr.send();