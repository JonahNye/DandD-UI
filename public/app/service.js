"use strict"

function Service ($http) {

    const self = this;

    self.getLog  = () => {
        return $http({
            url: "/DnD",
            method: "Get"
        });
    };

    self.postLog = (newEntry) => {
        return $http({
            url:"/DnD",
            method: "POST",
            data: newEntry
        });
    };


    //put to new table

    self.getSupply = () => {
        return $http({
            url: "/DnDSupply",
            method: "GET"
        });
    };

}

angular
    .module("D&D")
    .service("Service", Service)