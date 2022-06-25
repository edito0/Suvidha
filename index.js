function menu() {
    const humbuerger = document.querySelector('.humburger');
    const humbuergerLine = document.querySelectorAll('.humburger-line');

    humbuergerLine.forEach((element) => {
        element.classList.toggle('menu');
    });

    const navbar = document.querySelector('.itemsContaiener')
    navbar.classList.toggle('itemsContaiener-menu');
}