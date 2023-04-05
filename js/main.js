const body = document.querySelector('body');

body.addEventListener('mousemove', (e) => {
    //console.log('moving');
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    const x = e.offsetX;
    const y = e.offsetY;

    //Creating the span
    const newSpan = document.createElement('span');
    //Moving to the right and the left
    newSpan.style.left = x + 'px'; 
    //Moving to the top and the bottom 
    newSpan.style.top = y + 'px'; 

    const s = Math.random() * 100;
    //Changing the width
    newSpan.style.width = s + 'px';

    //Changing the height
    newSpan.style.height = s + 'px';
    //Appending the span to the body
    body.appendChild(newSpan);

    setTimeout(() => {
        newSpan.remove();
    }, 3000)
})
