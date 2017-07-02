document.addEventListener("DOMContentLoaded", function () {


    //MENU
    var mainList = document.querySelectorAll("nav>ul>li");


    for (var i = 0; i < mainList.length; i++) {
        mainList[i].addEventListener("mouseover", function () {
            var nestedMenu = this.querySelector('ul');
            if(nestedMenu!=null){
                nestedMenu.style.display='block';


            }




        });

        mainList[i].addEventListener("mouseout", function () {
            var nestedMenu = this.querySelector('ul');
            if(nestedMenu!=null){
                nestedMenu.style.display='none';
            }
        });
    }

// UKRYTE BLOKI Z NAZWĄ
    var images = document.querySelectorAll(".chairs-section img");
    // var block = document.querySelectorAll(".transparent-rectangle");

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", function () {
            var block = this.nextElementSibling;
                block.style.display = "none";
        });

        images[i].addEventListener("mouseout", function () {
            var block = this.nextElementSibling;
            block.style.display = "initial";
        });
    }



//    SLIDER



        var next = document.querySelector(".greater-than-sign");
        var prev = document.querySelector(".less-than-sign");
        var listimg = document.querySelectorAll(".slider li");
        var counter = 0;

        var visibleEl = listimg[0].classList.add("visible");


        next.addEventListener("click", function () {

            if (counter < listimg.length-1) {
                listimg[counter].style.display = "none";
                counter++;
                listimg[counter].style.display = "block";
            }

        });

        prev.addEventListener("click", function () {
            if (counter >=1 ) {
                listimg[counter].style.display = "none";
                counter--;
                listimg[counter].style.display = "block";
            }
        });



//    FORMULARZ- zadanie niedokończone jeszcze, usunelam te sekcje z html

        // var arrows = document.querySelectorAll(".list_arrow");
        // var lists = document.querySelectorAll("drop_down_list");
        //
        // for (var i = 0; i < arrows.length; i++) {
        //     arrows[i].addEventListener("click", function (e) {
        //         var options = this.parentElement.querySelector(".list_panel");
        //             if (options.style.display == "none") {
        //                 options.style.display = "block";
        //             } else {
        //                 options.style.display = "none";
        //             }
        //
        //
        //
        //     });
            //
            // arrows[i].addEventListener("click", function (e) {
            //     var options1 = this.parentElement.querySelector(".list_panel");
            //
            //     if ( options1.style.display == "block") {
            //         options1.style.display = "none";
            //     }
            //
            //
            //
            // });



        // }




// arrows[i].addEventListener("click", function () {
//     var options = this.parentElement.querySelector("ul");
//     options.style.display = "none";
// });








});
