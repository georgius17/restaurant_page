
import {createNavbar} from './navbar';
import {renderHome} from './homePage';
import {renderContact} from './contactPage';
import {renderMenu} from './menuPage';


function mainRender(){
    let content = document.getElementById("content");
    renderHome(content);
    
    document.addEventListener("click", (elem) => {
        if (elem.target.getAttribute('id')=='Home') renderHome(content);
        if (elem.target.getAttribute('id')=='Menu') renderMenu(content);
        if (elem.target.getAttribute('id')=='Contact')renderContact(content);
    })
    
}

mainRender();
