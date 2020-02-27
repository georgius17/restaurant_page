import {createNavbar} from './navbar';
import {contentClear} from './homePage';
import {renderDiv} from './homePage';
import {renderGrid} from './homePage';
import {renderImage} from './homePage';
import {renderPara} from './homePage';


function renderContact(content){
    contentClear(content);
    createNavbar(content);
    renderGrid(content);

    //render img_4 in left column
    document.getElementById('column1').appendChild(renderImage(4));

    let div4Form = renderDiv('form',1);
    let form = document.createElement('form');
    form.appendChild(renderPara('h4','Make your reservation here:'));
    formItem('fname','First name','text', form);
    formItem('lname','Last name','text', form);
    formItem('email','Email    ','text', form);
    formItem('appt','Select a time','time', form);

    formItem('submit','Submit','submit', form)

    div4Form.appendChild(form);
    document.getElementById('column2').appendChild(div4Form);

}

function formItem(name, text, type, form){
    if (name=='submit'){
        let input=document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', text);
        input.id = name;
        form.appendChild(input);
        return
    }

    let label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerHTML= text;
    form.appendChild(label);

    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', name);
    input.setAttribute('name', name);
    form.appendChild(input);
}


export {renderContact};

