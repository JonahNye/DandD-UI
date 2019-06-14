"use strict";

const landing = {
    templateUrl: "./app/components/landing/landing.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {

        const self = this;

        //more svg templates in favorites, or at game-icons.net

        //svg manipulation: map

        const worlds = document.querySelectorAll(".world");

        document.querySelector(".map-cover").addEventListener("mouseenter", () =>{
            
            worlds[0].removeAttribute("class", "world-hide");
            worlds[1].setAttribute("class","world-hide");
            worlds[2].setAttribute("class", "world-hide");
            worlds[3].removeAttribute("class","world-hide");

            worlds[0].setAttribute("class", "world");
            worlds[3].setAttribute("class", "world");

        })

        document.querySelector(".map-cover").addEventListener("mouseout", () =>{
            
            worlds[1].removeAttribute("class", "world-hide");
            worlds[0].setAttribute("class","world-hide");
            worlds[3].setAttribute("class", "world-hide");
            worlds[2].removeAttribute("class","world-hide");

            worlds[1].setAttribute("class", "world");
            worlds[2].setAttribute("class", "world");


        })

        //svg manipulation: log

        const books = document.querySelectorAll(".log");

        document.querySelector(".log-cover").addEventListener("mouseenter", () =>{
            
            books[0].removeAttribute("class", "log-hide");
            books[1].setAttribute("class","log-hide");
            books[2].setAttribute("class", "log-hide");
            books[3].removeAttribute("class","log-hide");

            books[0].setAttribute("class", "log");
            books[3].setAttribute("class", "log");

        })

        document.querySelector(".log-cover").addEventListener("mouseout", () =>{
            
            books[1].removeAttribute("class", "log-hide");
            books[0].setAttribute("class","log-hide");
            books[3].setAttribute("class", "log-hide");
            books[2].removeAttribute("class","log-hide");

            books[1].setAttribute("class", "log");
            books[2].setAttribute("class", "log");


        })

        //svg manipulation: party

        const party = document.querySelectorAll(".party");

        document.querySelector(".party-cover").addEventListener("mouseenter", () =>{
            
            party[0].removeAttribute("class", "party-hide");
            party[1].setAttribute("class","party-hide");
            party[2].setAttribute("class", "party-hide");
            party[3].removeAttribute("class","party-hide");

            party[0].setAttribute("class", "party");
            party[3].setAttribute("class", "party");

        })

        document.querySelector(".party-cover").addEventListener("mouseout", () =>{
            
            party[1].removeAttribute("class", "party-hide");
            party[0].setAttribute("class","party-hide");
            party[3].setAttribute("class", "party-hide");
            party[2].removeAttribute("class","party-hide");

            party[1].setAttribute("class", "party");
            party[2].setAttribute("class", "party");


        })

        //svg manipulation: board

        const boards = document.querySelectorAll(".board");

        document.querySelector(".board-cover").addEventListener("mouseenter", () =>{
            
            boards[0].removeAttribute("class", "board-hide");
            boards[1].setAttribute("class","board-hide");
            boards[2].setAttribute("class", "board-hide");
            boards[3].removeAttribute("class","board-hide");

            boards[0].setAttribute("class", "board");
            boards[3].setAttribute("class", "board");

        })

        document.querySelector(".board-cover").addEventListener("mouseout", () =>{
            
            boards[1].removeAttribute("class", "board-hide");
            boards[0].setAttribute("class","board-hide");
            boards[3].setAttribute("class", "board-hide");
            boards[2].removeAttribute("class","board-hide");

            boards[1].setAttribute("class", "board");
            boards[2].setAttribute("class", "board");


        })


        //load screen animation


        //app paths

        self.goMap = () => {
            $location.path('map');
        }

        self.goLog = () => { //alter w/load
            $location.path('log');
            
        }

        self.goParty = () => {
            $location.path('party');
        }

        self.goBoard = () => {
            $location.path('board');
        }

    }]

}

angular
    .module("D&D")
    .component("landing", landing)