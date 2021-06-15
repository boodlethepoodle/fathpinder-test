document.querySelector('#goblin').onclick = function() {
    alert('But now taller.');
}

let myImage = document.querySelector('#goblin');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pf2goblin2.png') {
      myImage.setAttribute('src','images/hobgoblin02.png');
    } else {
      myImage.setAttribute('src','images/hobgoblin02.png');
    }
}