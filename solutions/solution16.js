(function () {
    const header = document.querySelector('h1');
    header.style.color = 'tomato';
    let bdy = document.querySelector('body');

    bdy.addEventListener('click', function () {
        header.style.color = 'blue';

    })
})();