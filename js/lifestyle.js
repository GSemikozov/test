/**
 * Created by gera on 04.07.15.
 */
$(function() {
    $(".load").each(function(i, el){
        if ( i == 0 ) {
            $(el).delay(300).fadeIn(1000);
        }
        if ( i == 1 ) {
            $(el).delay(1300).fadeIn(1000);
        }
        $(el).delay(2000).fadeIn(1000);
    });
});
