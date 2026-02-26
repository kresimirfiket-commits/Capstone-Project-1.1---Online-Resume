function changePic() {

    var string = document.querySelector("img").getAttribute("src");
    var nrPic = Number(string[13]);
    var newNr = nrPic + 1;
    if (newNr < 6) {
        var newAtt = "./Images/pic_" + newNr + ".jpg";
        document.querySelector("#image").setAttribute("src", newAtt);
    } else {
        var newAtt = "./Images/pic_1.jpg";
        document.querySelector("#image").setAttribute("src", newAtt);
    }

}