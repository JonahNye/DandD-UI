"use strict"

function Service ($http) {

    const self = this;

    self.getLog  = () => {
        return $http({
            url: "/DnD",
            method: "Get"
        });
    };

}

angular
    .module("D&D")
    .service("Service", Service)