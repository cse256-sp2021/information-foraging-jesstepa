// Sticky header code (written for the studio by Jessica Stepanova and referenced from the W3S site linked by the studio instructions)
export function setupSticky() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.getElementById("main-menu-container");

    // Get the offset position of the navbar
    if (header == null){
        return
    }
    else{
        var sticky = header.offsetTop;
    }
    

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if(header==null){
            return
        }
        else{
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
            header.classList.remove("sticky");
            }
        }
    } 
}

