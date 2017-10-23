var myfruits = ["Apple","Banana","Orange","Plum","Cherry","Peach"];

function  displayfruit() {
    for(var i=0;i<myfruits.length;i++){
        var show = $('<li></li>');
        show.text(myfruits[i]);
        show.appendTo('#fruits');
   }
}

function choosefruit() {
    var realfruit = false;
    var fruitName = $('#newfruit').val();
    var listb = $('#basket');
    var addfruit = $('<li></li>');
    
    $.each(myfruits, function(i, item){
        if(item == fruitName){
            addfruit.append((fruitName));
            listb.append(addfruit);
            myfruits.splice($.inArray(fruitName, myfruits),1);
            realfruit = true;
            $('#fruits').empty();
            displayfruit();
            return;
        }
    });
    if(!realfruit){
        alert("This fruit is not available");
    }
    $('#newfruit').val("");
}


