"use strict";

const landing = {
    templateUrl: "./app/components/landing/landing.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {

        const self = this;

        self.goMap = () => {
            $location.path('map');
        }

    }]

}

angular
    .module("D&D")
    .component("landing", landing)