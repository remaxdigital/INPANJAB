// scroll font change 

var fonts = [
    'Russo One, sans-serif',
    'Georgia, serif',
    'Arial, sans-serif',
    'Helvetica, sans-serif',
    'Verdana, sans-serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Impact, sans-serif',
    'Comic Sans MS, cursive',
    'Trebuchet MS, sans-serif',
    'Arial Black, sans-serif',
    'Palatino Linotype, serif',
    'Lucida Console, monospace',
    'Garamond, serif',
    'Bookman, serif',
    'Copperplate, Copperplate Gothic Light, fantasy',
    'Brush Script MT, cursive',
    'Franklin Gothic Medium, sans-serif',
    'Century Gothic, sans-serif',
    'Bodoni MT, serif',
    'Arial Narrow, sans-serif'
];

window.addEventListener('scroll', function() {
    var nameElement = document.querySelector('#centered-name');
    var scrollPosition = window.pageYOffset;

    // Change font size based on scroll position
    nameElement.style.fontSize = 20 + scrollPosition * 0.01 + 'px';

    // Change font family based on scroll position
    var fontIndex = Math.floor(scrollPosition / 100) % fonts.length;
    nameElement.style.fontFamily = fonts[fontIndex];
});


// Cursor

(function () {

    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const heading = this.querySelector('h1');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 15,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          heading.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') heading.style.transform = '';
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();
