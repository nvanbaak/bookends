const input = $("#input")
var title = "Bookend!"

input.on("input", event => {

    // Get current input
    title = input.val();

    // Change title and header
    document.title = title;
    $("#title").text(title)

})