import {createNavbar} from './navbar';
import {contentClear} from './homePage';

function renderMenu(content){
    contentClear(content);
    createNavbar(content);

    let menu1 = document.createElement('table');
    let rolls =['Bánh Cuon','3€','Steamed rice roll from Hanoi', 'Nem ran','3€','Fried roll from Saigon','Goi Cuon','3.5€','Soft summer roll'];
    let noodles= ['Bun Bo Hue','5€','Beef rice vermicelli soup with lemongrass', 'Bún Cha','5€','noodles with grilled pork meatballs served over salad', 
                   'Bún Oc','5€','noodles with snails', 'Pho','5.5€','Noodle soup served with various cuts of beef and onions'];
    let desserts= ['Bánh Bo','2€','Cow cake, made from glutinous rice flour and coconut milk', 'Bánh Chuoi','1.5€','banana cake', 
                   'Bánh pía','1.5€','Teochew-style with durian', 'Chè', '1.5€', 'Sweet dessert soup or pudding' ];
    let beverages= ['Homemade black tea','free','our freshly served hot tea',
                    'Vietnamese cold coffee','1.5€','traditional beverage',
                    'Ujicha Tea','2€','Japanese tea from Uji',
                    'Sencha Tea','2€','standard Japan tea',
                    'Jasmine Tea','2€','Chinese tea'];


    renderAll('Rolls',rolls);
    renderAll('Noodle dishes',noodles);
    renderAll('Desserts', desserts);
    renderAll('Tea and Coffee', beverages);

    function renderAll(name,array){
        let i=0;
        renderRow(menu1,name, ' ', 'first');

        do {
        renderRow(menu1,array[i],array[i+1],'second');
        renderRow(menu1,array[i+2],' ','third');
        i=i+3;
            }
        while (i<array.length)
    }
    
    content.appendChild(menu1);
}

function renderRow(table,col1,col2,status){
    let tr = document.createElement('tr');
    if (status=='first'){
        tr.appendChild(renderItem('th',col1));
        tr.appendChild(renderItem('th',col2));
    }
    else if (status=='second') {
        tr.appendChild(renderItem('td',col1));
        tr.appendChild(renderItem('td',col2));
    }

    else if (status=='third'){
        tr.appendChild(renderItem('td',col1));
        tr.appendChild(renderItem('td',col2));
        tr.setAttribute('class','dishDescription')
    }
    table.appendChild(tr);
}

function renderItem(elem,text){
    let item= document.createElement(elem);
    item.innerHTML=text;
    return item
}

export {renderMenu}