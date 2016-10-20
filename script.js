(function() {
	console.log("Marine capture Board Game.");
	var marblesCount= document.querySelectorAll(".marble").length, marbles= document.querySelectorAll(".marble"),
	marbleClick = function(evt) {
		var isMarshPlant = isMarsh(evt.target), isFuelStation= isFuel(evt.target), markSelection = setSelection(isMarshPlant, isFuelStation);
		console.log(evt.target);
		resetSelection(marbles, marblesCount, "selected");
		if(markSelection === false) {
			evt.target.className += " selected";
		}
	},
	setSelection = function(bool1, bool2) {
		if(bool1 === false && bool2 === false) {
			return false;
		}
		else if(bool1 === false || bool2 === true) {
			return true;
		}
		else if(bool2 === false || bool1 === true) {
			return true;
		}
		else {
			return false;
		}
	}
	resetSelection = function(boardCells, cellCounts, className) {
		for(var i= 0 ; i < cellCounts; i++) {
		boardCells[i].classList.remove(className);
		}
	}, 
	isMarsh = function(dom) {
		return dom.classList.contains("marsh");
	}, 
	isFuel = function(dom) {
		return dom.classList.contains("fuel");
	};
	for(var i= 0 ; i < marblesCount; i++) {
		//var isNotMarsh = isMarsh(marbles[i]), isNotFuel = isFuel(marbles[i]);
		var isMarshPlant = isMarsh(marbles[i]), isFuelStation= isFuel(marbles[i]), markSelection = setSelection(isMarshPlant, isFuelStation);
		if(markSelection === false) {
			marbles[i].addEventListener("click", marbleClick, false);
		}
	}
	
	/* window.localStorage */
	if(window.localStorage) {
		console.log("local storage is avail");
	} else {
		console.log("No way to use local storage");
	}
	
}());