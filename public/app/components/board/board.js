"use strict";


const board = {
    templateUrl: "./app/components/board/board.html",
    controller: ["Service", "$http", "$location", function(Service, $http, $location) {

        const self = this;
        //for menu
        let settingsDisplay = false;
        //for cell border
        let tiles = document.querySelectorAll(".tile")
        //for background
        let background = document.querySelector(".game-board");


        //app nav
        self.goMap = () => {
            $location.path('map');
        }

        self.goLog = () => {
            $location.path('log');
        }

        self.goLanding = () => {
            $location.path('landing');
        }

        
        //toggle menu
        document.querySelector(".settings-btn").addEventListener("click", (e) => {
            
            if (settingsDisplay === false) {
                document.querySelector(".settings-menu").style.display="flex";
                settingsDisplay = true;
                return;
            }

            else if (settingsDisplay === true) {
                document.querySelector(".settings-menu").style.display="none";
                settingsDisplay = false;
            }
        })


        //alter board 
        self.changeMap = (filePath) => {

            if (filePath === "dockSide") {
                background.style.backgroundImage = "url('resources/battle-maps/dock-side.jpg')";
            }

            else if (filePath === "swampOutpost") {
                background.style.backgroundImage = "url('resources/battle-maps/ShiftingSwamp.jpg')";
            }

            else if (filePath === "deepSwamp") {
                background.style.backgroundImage = "url('resources/battle-maps/Haunted-Marsh.jpg')";
            }

            else if (filePath === "desertRuins") {
                background.style.backgroundImage = "url('resources/battle-maps/DesertRuins.jpg')";
            }

            else if (filePath === "forestRoad") {
                background.style.backgroundImage = "url('resources/battle-maps/forest-road.jpg')";
            }

            else if (filePath === "rockyRoad") {
                background.style.backgroundImage = "url('resources/battle-maps/rocky-road.jpg')";
            }

            else if (filePath === "riverCrossing") {
                background.style.backgroundImage = "url('resources/battle-maps/river-crossing.jpg')";
            }



            //grid manipulation
            else if (filePath === "showBorder") {
               for (let i = 0; i < tiles.length; i++) {
                   tiles[i].style.border="1px solid black";
               }
            }

            else if (filePath === "hideBorder") {
                for (let i = 0; i < tiles.length; i++) {
                    tiles[i].style.border="none";
                }
            }

        }


    }]

}

angular
    .module("D&D")
    .component("board", board)