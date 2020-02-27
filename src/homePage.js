import {createNavbar} from './navbar';

function contentClear(cont){
    cont.textContent='';
}

function renderGrid(content){
    let divRow= renderDiv('row',1);
    content.appendChild(divRow);

    let divCol1= renderDiv('column',1);
    divRow.appendChild(divCol1);

    let divCol2 = renderDiv('column',2);
    divRow.appendChild(divCol2);

    return {divRow, divCol1, divCol2}
}

function renderHome(content){
    
    contentClear(content);
    createNavbar(content);

    let divRow = renderDiv('row',1);
    content.appendChild(divRow);

    let divCol1= renderDiv('column',1);
    divRow.appendChild(divCol1);
    divCol1.appendChild(renderDiv('home',1));

    let divCol2= renderDiv('column',1);
    divRow.appendChild(divCol2);
    divCol2.appendChild(renderDiv('home',2));

    divCol1.appendChild(renderDiv('text',1));
    document.getElementById('text1').innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat,";
    

    divCol2.appendChild(renderDiv('text',2));
    
    document.getElementById('text2').appendChild(renderPara('h2','• Autentic Vietnamese Food'));
    document.getElementById('text2').appendChild(renderPara('p','Pho, Bun Bo, Bun Cha'));
    document.getElementById('text2').appendChild(renderPara('h2','• Delicious Asian Teas and Coffee'));
    document.getElementById('text2').appendChild(renderPara('p','Vietnamese, Chinese, Japanese'));
    document.getElementById('text2').appendChild(renderPara('h2','• Sweet desserts'));

}

function renderDiv(name,i){
    let div= document.createElement('div');
    div.setAttribute('class', name);
    
    if (name == 'home'){
        div.style.backgroundImage = `url('./img/img_${i}.jpg')`
        div.style.opacity= "0.7";
        div.id=name+i;   
        }
    else { div.id=name+i; } 
    
    return div;
}

function renderImage(i){
        let img = document.createElement('img');
        img.src = `./img/img_${i}.jpg`;
        img.setAttribute('class','images');
        img.id="img"+i;
        return img;
    }

function renderPara(el,text){
        let elem = document.createElement(el);
        elem.innerHTML= text;
       // para.setAttribute('class','text');
        return elem;
    }

export {renderHome, contentClear, renderDiv, renderGrid, renderImage, renderPara};