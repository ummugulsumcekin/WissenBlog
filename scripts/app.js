$(document).ready(function () {
    // Varsayılan olarak "All" filtresini seç
    $(".filter-button[data-filter='all']").addClass("active");

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.blog-card').show('1000');
        } else {
            $('.blog-card').hide();
            $('.blog-card[data-filter="' + value + '"]').show('3000');
        }
        // Aktif düğmeyi işaretleme
        $(".filter-button").removeClass("active");
        $(this).addClass("active");

        // Ekrana kaydır
        if (value == "kurslar") {
            $('html, body').animate({
                scrollTop: $(".filter-buttons").offset().top - 50
            }, 1000);
        }
    });
});
