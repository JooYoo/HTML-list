$(document).ready(function () {
    var $testLi = $('.testLi'),
        $btnDone = $('.btnDone'),
        $btnNotDone = $('.btnNotDone');

    function strikeSwitch(element) {
        if (element.parent().is("strike")) {
            element.unwrap();
        }
        else {
            element.wrap("<strike></strike>");
        }
    }
   
    // 点按返回点按的节点内容
    $('li').click(function (e) {
        // capture clicked element by id
        var targetID = e.target.id;
        var targetEle = document.getElementById(targetID);
        // save as jQery
        var listItem = $(targetEle)
        // call strike function
        strikeSwitch(listItem);
    });
});