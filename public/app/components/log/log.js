"use strict";

const log = {
    templateUrl: "./app/components/log/log.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {

    const vm = this;

    //let inventory = Service.getLog()

    function updateSupplies() {
        Service.getLog().then((result) => {
        vm.logObj = result.data;
        console.log(vm.logObj);
    })
    }

    updateSupplies();

    //Supply Open / Close

    let supplyState = false;

    const suppliesPage = document.querySelector(".supplies-page");

    vm.toggleSupplies =() => {
        supplyState = !supplyState;
        if (supplyState === false) {
            suppliesPage.style.display="none";
            console.log("hi 1");
        }
    
        if (supplyState  === true) {
            suppliesPage.style.display="flex";
            console.log("hi2");
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
                {name: "Westrunn", prices: new Prices(5, 20, 60, 120)}
                
            ]
        }

        display(){
            //address book display
        }
    }

    const cityPriceObj = new CityPrices();

    console.log(cityPriceObj); //use this to display

    

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