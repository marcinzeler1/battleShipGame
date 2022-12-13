
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	maxBoxNumber: 66,
	allSpaceBookedUp: [],
	
	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],

	spaceBookedUp: function(table) {
		var ear = table.concat(this.allSpaceBookedUp);
		this.allSpaceBookedUp = ear;
		//var conver = Number(X);
		//this.allSpaceBookedUp.push(conver)
		//console.log(typeof(conver));
	},

	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			if (ship.hits[index] === "hit") {
				view.displayMessage("Ups, już wcześnej trafiłeś to pole!");
				return true;
			} else if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("TRAFIONY!");

				if (this.isSunk(ship)) {
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
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
	    return true;
	},

	generateShipLocations: function() {
		var locations;
		var spaceNext;
		for (var k = 0; k < this.numShips; k++) {
			do {
				locations = this.generateShip();
				
			} while (this.collision(locations));
			
				this.ships[k].locations = locations;

				//locations.forEach(e=>this.spaceBookedUp(e));
				spaceNext = this.spaceBookedUp(locations);

				if ((Number(locations[0]) + 2) === Number(locations[2])) { // if horizonatl

					var spaceWindow = Number(locations[0]) + 3;
					var spaceWindow1 = Number(locations[0]) - 1;

					if (spaceWindow >=0 && spaceWindow < 10) {
						spaceWindow = "0" + spaceWindow;
						//var con = Number(spaceWindow); ////////////////////////////////////////
						this.allSpaceBookedUp.push(spaceWindow);//////////////////////////////////////
					} else if (spaceWindow >= 10 && spaceWindow < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow));
					} else {
						console.log("liczby poza skala");
					}


					if (spaceWindow1 >=0 && spaceWindow1 < 10) {
						spaceWindow1 = "0" + spaceWindow1;
						//var con = Number(spaceWindow1);
						this.allSpaceBookedUp.push(spaceWindow1);
					} else if (spaceWindow1 >= 10 && spaceWindow1 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow1));
					} else {
						console.log("liczby poza skala");
					}
					//console.log(this.space.push = Number(locations[0]) + 3);

					//console.log(this.space.push = Number(locations[0]) - 1);
					
					for (var i = 8; i <= 12; i++) {
						var spaceWindow2 = Number(locations[1]) + i;
						if (spaceWindow2 >=0 && spaceWindow2 < 10) {
							spaceWindow2 = "0" + spaceWindow2;
							//var con = Number(spaceWindow2);
							this.allSpaceBookedUp.push(spaceWindow2);
						} else if (spaceWindow2 >= 10 && spaceWindow2 < this.maxBoxNumber) {
							this.allSpaceBookedUp.push(String(spaceWindow2));
						} else {
							console.log("liczby poza skala");
						}

						var spaceWindow3 = Number(locations[1]) - i;
						if (spaceWindow3 >=0 && spaceWindow3 < 10) {
							spaceWindow3 = "0" + spaceWindow3;
							//var con = Number(spaceWindow3);
							this.allSpaceBookedUp.push(spaceWindow3);
						} else if (spaceWindow3 >= 10 && spaceWindow3 < this.maxBoxNumber) {
							this.allSpaceBookedUp.push(String(spaceWindow3));
						} else {
							console.log("liczby poza skala");
						}
					}

				} else {
					var spaceWindow4 = Number(locations[1]) + 1;
					var spaceWindow5 = Number(locations[1]) - 1;
					var spaceWindow6 = Number(locations[1]) + 9;
					var spaceWindow7 = Number(locations[1]) - 9;
					var spaceWindow10 = Number(locations[1]) + 11;
					var spaceWindow11 = Number(locations[1]) - 11;

					if (spaceWindow4 >=0 && spaceWindow4 < 10) {
						spaceWindow4 = "0" + spaceWindow4;
						//var con = Number(spaceWindow4);
						this.allSpaceBookedUp.push(spaceWindow4);
					} else if (spaceWindow4 >= 10 && spaceWindow4 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow4));
					} else {
						console.log("liczby poza skala");
					}

					if (spaceWindow5 >=0 && spaceWindow5 < 10) {
						spaceWindow5 = "0" + spaceWindow5;
						//var con = Number(spaceWindow5);
						this.allSpaceBookedUp.push(spaceWindow5);
					} else if (spaceWindow5 >= 10 && spaceWindow5 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow5));
					} else {
						console.log("liczby poza skala");
					}

					if (spaceWindow6 >=0 && spaceWindow6 < 10) {
						spaceWindow6 = "0" + spaceWindow6;
						//var con = Number(spaceWindow6);
						this.allSpaceBookedUp.push(spaceWindow6);
					} else if (spaceWindow6 >= 10 && spaceWindow6 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow6));
					} else {
						console.log("liczby poza skala");
					}

					if (spaceWindow7 >=0 && spaceWindow7 < 10) {
						spaceWindow7 = "0" + spaceWindow7;
						//var con = Number(spaceWindow7);
						this.allSpaceBookedUp.push(spaceWindow7);
					} else if (spaceWindow7 >= 10 && spaceWindow7 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow7));
					} else {
						console.log("liczby poza skala");
					}

					if (spaceWindow10 >=0 && spaceWindow10 < 10) {
						spaceWindow10 = "0" + spaceWindow10;
						//var con = Number(spaceWindow10);
						this.allSpaceBookedUp.push(spaceWindow10);
					} else if (spaceWindow10 >= 10 && spaceWindow10 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow10));
					} else {
						console.log("liczby poza skala");
					}

					if (spaceWindow11 >=0 && spaceWindow11 < 10) {
						spaceWindow11 = "0" + spaceWindow11;
						//var con = Number(spaceWindow11);
						this.allSpaceBookedUp.push(spaceWindow11);
					} else if (spaceWindow11 >= 10 && spaceWindow11 < this.maxBoxNumber) {
						this.allSpaceBookedUp.push(String(spaceWindow11));
					} else {
						console.log("liczby poza skala");
					}

					for (var i = 19; i <= 21; i++) {
						var spaceWindow8 = Number(locations[1]) + i;
						if (spaceWindow8 >=0 && spaceWindow8 < 10) {
							spaceWindow8 = "0" + spaceWindow8;
							//var con = Number(spaceWindow8);
							this.allSpaceBookedUp.push(spaceWindow8);
						} else if (spaceWindow8 >= 10 && spaceWindow8 < this.maxBoxNumber) {
							this.allSpaceBookedUp.push(String(spaceWindow8));
						} else {
							console.log("liczby poza skala");
						}

						var spaceWindow9 = Number(locations[1]) - i;
						if (spaceWindow9 >=0 && spaceWindow9 < 10) {
							spaceWindow9 = "0" + spaceWindow9;
							//var con = Number(spaceWindow9);
							this.allSpaceBookedUp.push(spaceWindow9);
						} else if (spaceWindow9 >= 10 && spaceWindow9 < this.maxBoxNumber) {
							this.allSpaceBookedUp.push(String(spaceWindow9));
						} else {
							console.log("liczby poza skala");
						}
					}			
				}
		}
		console.log(this.allSpaceBookedUp);
		console.log(this.ships);
		//console.log(typeof(locations));
	},

	

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { 
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else { 
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			//var ship = this.ships[i]; // pierwotny kod
			for (var j = 0; j < locations.length; j++) {
				if (this.allSpaceBookedUp.indexOf(locations[j]) >= 0) {
				//if (ship.locations.indexOf(locations[j]) >= 0) { pierwotny kod
					return true;
				}
			}
		}
		return false;
	}
	
};
//console.log(space);

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
	}

};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
               view.displayMessage("Zatopiłeś wszystkie moje okręty, w " +
                        this.guesses + " próbach.");
			}
		}
	}
}

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Ups, proszę wpisać literę i cyfrę.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Ups, to nie są współrzędne!");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Ups, pole poza planszą!");
		} else {
			return row + column;
		}
	}
	return null;
}


function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();

	controller.processGuess(guess);

	guessInput.value = "";
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");

	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

window.onload = init;

function init() {
	
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;


	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	
	model.generateShipLocations();
}

var pole;

  function getid(obj) {
    pole = obj.id;
    console.log(pole);
}

  function WhichButton(event) {
    if (event.button === 0) {
		if (pole) {
			controller.guesses++;
			var hit = model.fire(pole);
			if (hit && model.shipsSunk === model.numShips) {
               view.displayMessage("Zatopiłeś wszystkie moje okręty, w " +
                        controller.guesses + " próbach.");
			}
		}
    } else {
      alert("Ups, pole poza planszą!");
    }
  }