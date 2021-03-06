$(document).ready(function () {
    // 获取选择器所选取的变量
    var $btnDone = $('.btnDone'),
        $btnNotDone = $('.btnNotDone'),
        $h2Title = $('#h2Title'); // 当然可以用jQ，但如果js可以解决就尽量用纯js

    // 显示当天时间
    // document.getElementById("h2Title").innerHTML = new Date().toLocaleString();
    // document.getElementById("h2Title").innerHTML = createDate();
    document.getElementById("h2Title").innerHTML = createWeekDay();

    // 创建已经格式化好的年月日
    function createDate() {
        var date = new Date(); // 实例化日期类
       
        const monthNames = ["Jan", "Feb", "Mar", "Apr",  // 把所有名字在数组里，之后用getMonth()作为index来选择月份的名字
                            "May", "Jun", "Jul", "Aug",
                            "Sept", "Oct", "Nov", "Dec"];

        var year = date.getFullYear();
        var month = monthNames[date.getMonth()];
        var day = date.getDate();

        return  month + "-" + day +  "-" +year + "-" + dayOfWeek ;
    }

    function createWeekDay(){ // 同上
        var date = new Date();

        const dayOfWeek =['Monday','Tuesday','Wednesday',
                        'Thursday','Friday','Saturday','Sunday'];

        return dayOfWeek[date.getDay()-1];                        
    }


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
    $('button').click(function (e) {
        // capture clicked element by id
        var targetID = e.target.id;
        var targetEle = document.getElementById(targetID);

        // 找到ID包含有 "item" 的项目，并且删除
        if ((targetEle.parentElement.id).indexOf("item") >= 0) {
            document.getElementById(targetEle.parentElement.id).remove();
        }

    });
});