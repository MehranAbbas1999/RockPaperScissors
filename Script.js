var a = 0;
var b = 0;
var i = 0;
var j = 0;
var t = 0;
var total = 0;

 

function getUserValue(X) {
    a = X;
    window.scrollTo(0, 190);
   
    if (X == 1) {
        setUserinputImage("Images/rock.png", 210, 210, "rockImg");
        setComputerinputImage("", 0, 0, "");
        document.getElementById("winnerComputer").innerHTML = "";
        document.getElementById("winnerUser").innerHTML = "";
    }

    if (X == 2) {
        setUserinputImage("Images/paper.png", 210, 210, "paperImg");
        setComputerinputImage("", 0, 0, "");
        document.getElementById("winnerComputer").innerHTML = "";
        document.getElementById("winnerUser").innerHTML = "";
    }

    if (X == 3) {
        setUserinputImage("Images/scissor.png", 210, 210, "scissorImg");
        setComputerinputImage("", 0, 0, "");
        document.getElementById("winnerComputer").innerHTML = "";
        document.getElementById("winnerUser").innerHTML = "";
    }
}

function setUserinputImage(src, alt) {
    var img = document.getElementById("userInputImgID");
    img.src = src;
    img.alt = alt;
}

function computerInputValue() {
    var InputValue = Math.floor(1 + Math.random() * 3);
    getComputerImage(InputValue);
}

function getComputerImage(C) {
    b = C;

    if (C == 1) {
        setComputerinputImage("Images/rock_inverse.png", 210, 210, "rockImg");
    }

    if (C == 2) {
        setComputerinputImage("Images/paper_inverse.png", 210, 210, "paperImg");
    }

    if (C == 3) {
        setComputerinputImage("Images/scissor_inverse.png", 210, 210, "scissorImg");
    }
    winnerAnnoucement();
}

function setComputerinputImage(src, alt) {
    var img = document.getElementById("computerInputImgID");
    img.src = src;
    img.alt = alt;
}

function winnerAnnoucement() {
    document.getElementById("totalMatches").value = ++total;

    if (a == 1 && b == 1) {

        document.getElementById("winnerComputer").innerHTML = "Match Tied";
        document.getElementById("winnerUser").innerHTML = "Match Tied";
        document.getElementById("tieScore").value = ++t;
    }
    if (a == 2 && b == 2) {
        document.getElementById("winnerComputer").innerHTML = "Match Tied";
        document.getElementById("winnerUser").innerHTML = "Match Tied";
        document.getElementById("tieScore").value = ++t;
    }
    if (a == 3 && b == 3) {
        document.getElementById("winnerComputer").innerHTML = "Match Tied";
        document.getElementById("winnerUser").innerHTML = "Match Tied";
        document.getElementById("tieScore").value = ++t;
    }
    // 1 is Rock 2 is paper 3 is scissors
    if (a == 1 && b == 2) {

        document.getElementById("winnerComputer").innerHTML = "Computer Won";
        document.getElementById("winnerUser").innerHTML = "You Lost";
        document.getElementById("computerScore").value = ++j;
    }

    if (a == 2 && b == 3) {

        document.getElementById("winnerComputer").innerHTML = "Computer Won";
        document.getElementById("winnerUser").innerHTML = "You Lost";
        document.getElementById("computerScore").value = ++j;
    }

    if (a == 3 && b == 1) {

        document.getElementById("winnerComputer").innerHTML = "Computer Won";
        document.getElementById("winnerUser").innerHTML = "You Lost";
        document.getElementById("computerScore").value = ++j;

    }

    if (a == 1 && b == 3) {

        document.getElementById("winnerUser").innerHTML = "You Won";
        document.getElementById("winnerComputer").innerHTML = "Computer Lost";
        document.getElementById("userScore").value = ++i;

    }

    if (a == 3 && b == 2) {
        document.getElementById("winnerUser").innerHTML = "You Won";
        document.getElementById("winnerComputer").innerHTML = "Computer Lost";
        document.getElementById("userScore").value = ++i;;

    }

    if (a == 2 && b == 1) {

        document.getElementById("winnerUser").innerHTML = "You Won";
        document.getElementById("winnerComputer").innerHTML = "Computer Lost";
        document.getElementById("userScore").value = ++i;
    }

}
