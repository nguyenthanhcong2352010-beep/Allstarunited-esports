function showPlayer(name,position,role,fullname,age){

document.getElementById("popup").style.display="block";

document.getElementById("name").innerHTML=name;
document.getElementById("fullname").innerHTML=fullname;
document.getElementById("age").innerHTML=age;
document.getElementById("role").innerHTML=role;
document.getElementById("position").innerHTML=position;

}

function closePopup(){
document.getElementById("popup").style.display="none";
}
