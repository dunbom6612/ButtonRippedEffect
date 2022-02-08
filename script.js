const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    const mouseInButtonLeft = x - buttonLeft;
    const mouseInButtonTop = y - buttonTop;
    
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = mouseInButtonTop + 'px';
    circle.style.left = mouseInButtonLeft + 'px';
    button.appendChild(circle);
    
    console.log(button);
    setTimeout(() => {
      button.removeChild(circle);
    }, 500);
  });
});
