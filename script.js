function showPlayer(name, fullname, age, role, team, image) {
    document.getElementById("popup").style.display = "block";

    document.getElementById("playerImage").src = image;
    document.getElementById("name").innerHTML = name;
    document.getElementById("fullname").innerHTML = fullname;
    document.getElementById("age").innerHTML = age;
    document.getElementById("role").innerHTML = role;
    document.getElementById("position").innerHTML = team;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
