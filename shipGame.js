var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },

};
//view.displayMessage("kjsfljsldjflk");
//view.displayHit("00");


var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
    ships: [{locations: ["06","16","26"], hits: ["","",""]},
            {locations: ["24","34","44"], hits: ["","",""]},
            {locations: ["10","11","12"], hits: ["","",""]}],
    fire: function(guess) {
        for(var i = 0; i<this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            //console.log(index);
            if (index >= 0) {
            ship.hits[index] = "hit";
            view.displayHit(guess);
            view.displayMessage("TRAFIONY!!!");
                if(this.isSunk(ship)) { //do sprawdzenia isSunk
                    view.displayMessage("Zatopiłeś mój okręt!");
                    this.shipsSunk++;
                }
            return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Spudłowałeś.");
        return false;  
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
            return true;
        }
    }
};
//model.fire("64");

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        var location = parseGuess(guess);//np.13
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipSunk === model.numShips) {
                view.displayMessage("Zatopiłes wszystkie moje okręty, w " + this.guesses + " próbach.");
            }

        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A","B","C","D","E","F","G"];
    if(guess === null || guess.length !== 2) {
        alert("Ups, proszę wpisać literę i cyfrę");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if(isNaN(row) || isNaN(column)) {
            alert("Ups, to nie są współrzędne!");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Ups, pole poza planszą!");
        } else {
            return row + column;
        }
    }
    return null;
}
//controller.processGuess("B3");

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    /*var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;*/ //uruchomienie przycisku enter
}

/*function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}*/ //cd dalszy obsługi przycisku enter

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);

    guessInput.value = "";
}
window.onload = init;