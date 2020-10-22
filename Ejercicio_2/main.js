
document.addEventListener('keypress', logKey);

function logKey(e) {
  removeAllClass("tests", "red");
  removeAllClass("tests", "yellow");
  removeAllClass("tests", "white");
  if(e.code == 'KeyD'){
    document.getElementById("tests").classList.add("red");
  } else if(e.code == 'KeyY'){
    document.getElementById("tests").classList.add("yellow");
  } else if(e.code == 'KeyW'){
    document.getElementById("tests").classList.add("white");
  }
}

function removeAllClass(idName, className){
  document.getElementById(idName).classList.remove(className);
  document.getElementById(idName).classList.remove(className);
  document.getElementById(idName).classList.remove(className);
}
