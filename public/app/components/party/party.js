"use strict";

const party = {
    templateUrl: "./app/components/party/party.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {

        const self = this;

        self.goMap = () => {
            $location.path('map');
        }

        self.goLog = () => {
            $location.path('log');
        }

        self.goLanding = () => {
            $location.path('landing');
        }

    }]

}

angular
    .module("D&D")
    .component("party", party)