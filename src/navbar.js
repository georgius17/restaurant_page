

function createNavbar(content){
    let nav = document.createElement('nav');
    content.appendChild(nav);

    let logo = document.createElement('img');
    logo.src = './logo.png';
    logo.setAttribute('id','logo');
    nav.appendChild(logo);

    let ul = document.createElement('ul');
    nav.appendChild(ul);
    createNavItem('Home');
    createNavItem('Menu');
    createNavItem('Contact');

    function createNavItem(name){
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.setAttribute('id', name);
    link.textContent = name;
    ul.appendChild(li);
    li.appendChild(link);
}

}

export {createNavbar};