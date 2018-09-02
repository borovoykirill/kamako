/* add a option to close banner */
function diplay_hide (blockId) {
    if ($(blockId).css('display') == 'flex')
    {
        $(blockId).animate({height: 'hide'}, 500);
    }}

/* the function converts the search query to the lower case*/
function lowcase() {
    var str = document.getElementById("search-query").value;
    var res = str.toLowerCase();
    document.getElementById("search-query").value = res;
}