import $ from "jquery";
$(document).ready(function () {

    var tabContent = $('input[name="properties"]:checked').attr("id") + "_content";
    $("#" + tabContent).toggleClass("hidden");

    $('input[name=properties]').on('change', function () {
        $(".tab-content").map(element => {
            if (!$(element).hasClass("hidden")) {
                $(".tab-content").addClass("hidden")
            }
        });

        tabContent = $('input[name="properties"]:checked').attr("id") + "_content";
        $("#" + tabContent).toggleClass("hidden");
    });

    $("#writeComment").on("click", () => {
        $("#backDrop").fadeIn(300);
        $("#holderModal").fadeIn(300);
        $("#registerComment").toggleClass("closeModal");
        $("body").css({ overflowY: 'hidden' });
    })

    $("#holderModal *").on("click", function (e) {
        e.stopPropagation();
    });

    $("#holderModal,.close-btn").on("click", (e) => {
        e.stopPropagation();
        $("#backDrop").fadeOut();
        $("#holderModal").fadeOut();
        $(".modal").each(function () {
            if (!$(this).hasClass("closeModal")) {
                $(this).addClass("closeModal")
            }
        })
        $("body").css({ overflowY: 'auto' });
    })

    $(".btn-invoice").on("click", () => {
        $("#backDrop").fadeIn(300);
        $("#holderModal").fadeIn(300);
        $("#invoice").toggleClass("closeModal");
        $("body").css({ overflowY: 'hidden' });
    })

    $(".toggle-faq").on("click", function () {

        if ($(this).children("svg").hasClass("rotate-180")) {
            $(this).children("svg").toggleClass("rotate-180");
            $(this).children("svg").toggleClass("rotate-0");
        }
        else {
            $(".rotate-180").toggleClass("rotate-180");
            $(this).children("svg").toggleClass("rotate-180");
            $(this).children("svg").toggleClass("rotate-0");
        }



        var parent = $(this).parents(".faq-warp");

        if ($(parent).hasClass("active")) {
            $(parent).find(".answer-faq").slideUp();
            $(parent).removeClass("active");
            return;
        }

        var openSlide = $(".faq-warp.active");
        $(openSlide).removeClass("active");
        $(openSlide).find(".answer-faq").slideUp();



        $(parent).addClass("active");
        $(parent).find(".answer-faq").slideDown();
    })

    $(".btn-purchaseCp").on("click", function (e) {
        e.preventDefault();
        $("#backDrop").fadeIn(300);
        $("#holderModal").fadeIn(300);
        $("#buyCpModal").toggleClass("closeModal");
        $("body").css({ overflowY: 'hidden' });
    })
    $(".btn-purchaseGift").on("click", function (e) {
        e.preventDefault();
        $("#backDrop").fadeIn(300);
        $("#holderModal").fadeIn(300);
        $("#buyGiftModal").toggleClass("closeModal");
        $("body").css({ overflowY: 'hidden' });
    })

    $(".giftConfirm-btn").on("click", function (e) {
        e.preventDefault();
        $("#backDrop").fadeIn(300);
        $("#holderModal").fadeIn(300);
        $("#buyGiftModal").toggleClass("closeModal");
        $("#buyGiftConfirm").toggleClass("closeModal");
        $("body").css({ overflowY: 'hidden' });
    })

    $(".tracking-btn").on("click", () => {
        $("#backDrop").fadeIn(300);
        $("#holderModal").fadeIn(300);
        $("#trackingModal").toggleClass("closeModal");
        $("body").css({ overflowY: 'hidden' });
    })

   
});