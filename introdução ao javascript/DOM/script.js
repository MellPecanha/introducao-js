const darkmodeclass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changemode(){
    changeclasses();
    changetext();
}

function changeclasses(){
    button.classList.toggle(darkmodeclass);
    h1.classList.toggle(darkmodeclass);
    body.classList.toggle(darkmodeclass);
    footer.classList.toggle(darkmodeclass);
}

function changetext(){
    const light = 'Light Mode';
    const dark = 'Dark Mode';

    if(body.classList.contains(darkmodeclass)){
        button.innerHTML = light;
        h1.innerHTML = dark + ' ON';
        return;
    }

    button.innerHTML = dark;
    h1.innerHTML = light + ' ON';
}

button.addEventListener('click', changemode);