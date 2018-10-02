const activate = (id1, id2, id3) => {
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
    document.getElementById(id3).style.display = "none";  
}

const active = (id1, id2, id3) => {
    document.getElementById(id1).style.backgroundColor = "rgba(50, 50, 50, 1)";
    document.getElementById(id2).style.backgroundColor = "gray";
    document.getElementById(id3).style.backgroundColor = "gray"; 
}