$(document).ready(function(){
    var $testLi = $('.testLi'),
        $btnDone = $('.btnDone');

    function addStrick(){

        var liText = $testLi.text();
        $testLi.append("<strike>"+liText+"</strike>" );
    }

    $btnDone.on('click', function(){
        addStrick();
    });

});