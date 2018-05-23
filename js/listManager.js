$(document).ready(function () {
    var $testLi = $('.testLi'),
        $btnDone = $('.btnDone'),
        $btnNotDone = $('.btnNotDone');


    function addStrike() {
        // get the traget element
        var liText = $testLi.html();
        // add tag to the target element
        liText = '<strike class="strikeText">' + liText + '</strike>';
        // add the result back to DOM
        $testLi.html(liText);
    }

    function removeStrike(){
        //in <li> find <strike> contents;
        // unwrap() 去除找到的内容的父标签
        $testLi.find('strike').contents().unwrap();
    }

    $btnDone.on('click', function () {
        addStrike();
    });

    $btnNotDone.on('click', function(){
        removeStrike();
    });
});