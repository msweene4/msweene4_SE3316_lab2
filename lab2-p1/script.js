var myfruits = ["Apple","Banana","Orange","Plum","Cherry","Peach"];

function displayfruit(){
    for(var i=0; i<myfruits.length; i++){
        var flist = document.createElement('li');
        var textnode = document.createTextNode(myfruits[i]);
        flist.appendChild(textnode);
        document.getElementById('fruits').appendChild(flist);
    }
}

function choosefruit(){
    var realfruit = false;
    var fruitName = document.getElementById("newfruit").value;
    for(var i = 0; i < document.getElementById('fruits').childNodes.length; i++){
        if(fruitName == document.getElementById('fruits').childNodes[i].textContent){
            var blist = document.createElement('li');
            var node = document.createTextNode(fruitName);
            blist.appendChild(node);
            document.getElementById('basket').appendChild(blist);
            realfruit = true;
            
            document.getElementById('fruits').removeChild(document.getElementById('fruits').childNodes[i]);
        }
    }
    if(!realfruit){
        alert("This fruit is not available");
    }
    document.getElementById("newfruit").value=""
}