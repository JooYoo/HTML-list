$(document).ready(function () {
    // 获取选择器所选取的变量
    var $btnDone = $('.btnDone'),
        $btnNotDone = $('.btnNotDone');

    // 添加或者不添加删除线
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

    //点击按键删除所在列表项
    $('button').click(function(e){
        // capture clicked element by id
        var targetID = e.target.id;
        var targetEle = document.getElementById(targetID);

    // 找到ID包含有 "item" 的项目，并且删除
    if((targetEle.parentElement.id).indexOf("item")>=0){
         document.getElementById(targetEle.parentElement.id).remove();
    }

    });
});