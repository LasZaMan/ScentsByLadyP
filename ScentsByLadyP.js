
//-----------------Add to Cart functionality------------------//

var addItemId = 0;
function addToCart(item){
    
    cartOn2();
    addItemId += 1;
var selectedItem = document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id', addItemId);
var img = document.createElement('img');
img.setAttribute('src', item.children[0].children[0].currentSrc);
img.setAttribute('id', 'cartImg')
var title = document.createElement('div');
title.setAttribute('class', 'lead');
title.innerText = item.children[1].innerText;
var label = document.createElement('div');
label.setAttribute('class', 'lead');
label.innerText = item.children[3].innerText;
var select = document.createElement('h6');
select.innerText = item.children[4].innerText;
var label2 = document.createElement('h6');
label2.setAttribute('class', 'lead text-success');
label2.innerText = item.children[5].value;
label2.append(select);
label.append(select);
var delBtn = document.createElement('button');
delBtn.innerText = 'Remove';
delBtn.setAttribute('onclick', 'del('+addItemId+')');
var cartItems = document.getElementById('title');
selectedItem.append(img);
selectedItem.append(title);
selectedItem.append(label);
selectedItem.append(label2);
selectedItem.append(delBtn);
cartItems.append(selectedItem);
alert('Item Successfully Added to Cart');
}

//-----------------Remove Item From Cart------------------//

function del(item){
    alert('Item Successfully Removed From Cart')
    document.getElementById(item).remove();
}

//-----------------Cart Visibility Toggler------------------//

//-----------Hide Cart------//

function cartOn(){
   var cartIcon = document.getElementById('cart');
   cartIcon.style.display = 'none';
}

//-----------Show Cart------//

function cartOn2(){
    var cartIcon = document.getElementById('cart');
    cartIcon.style.display = '';
 }
 