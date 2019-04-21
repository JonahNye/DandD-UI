angular
    .module("D&D", ['ngRoute'])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/landing", {
                template: "<landing></landing>"
            })

            .when("/log", {
                template: "<log></log>"
            })

            .when("/map", {
                template: "<map></map>"
            })

            .when("/", {
                template: "<landing></landing>"
            })
    }])