"use strict";

const map = {
    templateUrl: "./app/components/map/map.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {


    const vm = this;

    vm.openWestruun = () => {
        vm.westruunInfo = !vm.westruunInfo;
    }

    vm.openDrynna = () => {
        vm.drynnaInfo = !vm.drynnaInfo;
    }

    vm.openStillben = () => {
        vm.stillbenInfo = !vm.stillbenInfo;
    }

       
}]
}

angular
    .module("D&D")
    .component("map", map)