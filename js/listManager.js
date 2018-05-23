$(document).ready(function () {
    var $testLi = $('.testLi'),
        $btnDone = $('.btnDone');

    function addStrick() {
        // get the traget element
        var liText = $testLi.html();
        // add tag to the target element
        liText = '<strike>' + liText + '</strike>';
        // add the result back to DOM
        $testLi.html(liText);
    }

    $btnDone.on('click', function () {
        addStrick();
    });
});