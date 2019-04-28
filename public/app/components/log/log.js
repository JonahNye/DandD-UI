"use strict";

const log = {
    templateUrl: "./app/components/log/log.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {


    const vm = this;

    vm.goLanding = () => {
        $location.path('landing');
    }

    vm.goMap = () => {
        $location.path('map');
    }

       
}]
}

angular
    .module("D&D")
    .component("log", log)