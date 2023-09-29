function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert(){
    alert('I was clicked');
}

if (input) {
    input.addEventListener('click', clickAlert);
    return true;  
  } else {
    return false; 
  }
}
addingEventListener();

