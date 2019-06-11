"use strict";

const log = {
    templateUrl: "./app/components/log/log.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {

    const vm = this;



    //cursor image:   cursor: url('path-to-image.png'), auto;	

        //use this for log!!!  Really utilize that svg generator


    //let inventory = Service.getLog()

    function logGet() {
        Service.getLog().then((result) => {
        vm.logObj = result.data;
        vm.upDateLog(vm.logObj);
    })
    }

    logGet();

    function supplyGet() {
        Service.getSupply().then((answer) => {
            vm.supplyObj = answer.data;
            vm.upDateSupply(vm.supplyObj);
        })
    }

    supplyGet();

    vm.upDateLog = () => {
        console.log(vm.logObj);
        document.querySelector(".item").innerHTML = ``;
        for (let entry of vm.logObj) {

            const newEntry = document.createElement("section");
            newEntry.classList.add("newEntry");
            newEntry.innerHTML = `
                <p class="entry-num"> ${entry.id}.</p>
                <p class="item-name"> Item: ${entry.item}</p>
                <p class="net">Transaction Total: ${entry.price * entry.quantity}</p>
            `;

            document.querySelector(".item").appendChild(newEntry);
            
        }

    }

    vm.upDateSupply = () => {
        console.log(vm.supplyObj);
        // document.querySelector(".product").innerHTML = ``;
        for (let crate of vm.supplyObj) {

            let imgURL = "";

            if (crate.name === "cloth") {imgURL = "resources/rolled-cloth.svg"}
            else if (crate.name === "lumber") {imgURL = "resources/wood-pile.svg"}
            else if (crate.name === "iron ore") {imgURL = "resources/iron-ore.svg"}
            else if (crate.name === "spices") {imgURL = "resources/hot-spices.svg"}

            const newCrate = document.createElement("section");
            newCrate.classList.add("crate");
            newCrate.innerHTML = `
            <img class="product-icon" src="${imgURL}">
            <p class="product-quantity">${crate.quantity}</p>
        `

            document.querySelector(".product").appendChild(newCrate);
        }
    }

    vm.buy = (newEntry)=> {
        vm.newEntry["type"] = "bought";
        Service.postLog(newEntry).then(logGet());
        //call put to new table, supply update
    }

    vm.sell = (newEntry) => {
        vm.newEntry["type"] = "sold";
        Service.postLog(newEntry).then(logGet());
        //call put to new table, call supply update
    }



    //supplies as own table. only post for each commodity, allows for partial sales. uses same newEntry object. 

    //Supply Open / Close

    let supplyState = false;

    const suppliesPage = document.querySelector(".supplies-page");

    vm.toggleSupplies =() => {
        supplyState = !supplyState;
        if (supplyState === false) {
            suppliesPage.style.display="none";
        }
    
        if (supplyState  === true) {
            suppliesPage.style.display="flex";
        }    
    }

    //Ledger Open / Close

    let ledgerState = false;

    const ledgerPage = document.querySelector(".ledger-page");

    vm.toggleLedger =() => {
        ledgerState = !ledgerState;
        if (ledgerState === false) {
            ledgerPage.style.display="none";
            console.log("hi 1");
        }
    
        if (ledgerState  === true) {
            ledgerPage.style.display="flex";
            console.log("hi2");
        }    
    }



    //cities and products

    class Prices {
        constructor(clothPrice, lumberPrice, ironOrePrice, spicesPrice){
            this.cloth = clothPrice,
            this.lumber = lumberPrice,
            this.ironOre = ironOrePrice,
            this.spices = spicesPrice

        }
    }

    class CityPrices {
        constructor(){
            this.CPPackage= [

                {name: "Stillben", prices: new Prices(6, 14, 50, 100)},
                {name: "Drymma", prices: new Prices(6, 14, 50, 100)},
                {name: "Westrunn", prices: new Prices(5, 20, 60, 120)},
                {name: "Emon", prices: new Prices(7, 25, 70, 125)}
                
            ]
        }

        display(){

            document.querySelector(".item").innerHTML = ``;
        for (let city of this.CPPackage) {

            const newEntry = document.createElement("section");
            newEntry.classList.add("location");
            newEntry.innerHTML = `
              <h3> ${city.name}</h3>
              <section class="price-pop-up">

                    <p> <img class="item-thumb" src="resources/rolled-cloth.svg"> ${city.prices.cloth}</p>
                    <p> <img class="item-thumb" src="resources/wood-pile.svg"> ${city.prices.lumber}</p>
                    <p> <img class="item-thumb" src="resources/iron-ore.svg"> ${city.prices.ironOre}</p>
                    <p> <img class="item-thumb" src="resources/hot-spices.svg"> ${city.prices.spices}</p>
        
              </section>
            `;

            document.querySelector(".prices").appendChild(newEntry);
            
        }
            
        }
    }

    const cityPriceObj = new CityPrices();
    cityPriceObj.display();

    

    //App Nav

    vm.goLanding = () => {
        $location.path('landing');
    }

    vm.goMap = () => {
        $location.path('map');
    }

    vm.goParty = () => {
        $location.path('party');
    }
}]
}

angular
    .module("D&D")
    .component("log", log)