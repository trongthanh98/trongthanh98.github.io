
$('.front').click(function(){
    $(this).parent('.card-container').css({
            'transform'		: 	'rotateY(180deg) translateX(40%)',
    '-webkit-transform'		: 	'rotateY(180deg) translateX(40%)',
        '-ms-transform'		: 	'rotateY(180deg) translateX(40%)',
       '-moz-transform'		: 	'rotateY(180deg) translateX(40%)',
           'transition'		: 	'all 1.5s'
    });
    $('.card-container-content').css({
            'transform'		: 	'translateX(60%)',
    '-webkit-transform'		: 	'translateX(60%)',	 
       '-moz-transform'		: 	'translateX(-40%)',
           'transition'		: 	'all 1s'
    });
});
$('.back').click(function(){
    $(this).parent('.card-container').css({
            'transform'		: 	'rotateY(0deg) translateX(0)',
       '-moz-transform'		: 	'rotateY(0deg) translateX(0)',
    '-webkit-transform'		: 	'rotateY(0deg) translateX(0)',
        '-ms-transform'		: 	'rotateY(0deg) translateX(0)',
           'transition'		: 	'all 1s'
    });
    $('.card-container-content').css({
            'transform'		: 	'translateX(0)',
       '-moz-transform'		: 	'translateX(0)',
       '-moz-transform'		: 	'translateX(-100%)',
           'transition'		:  	'all 1.5s'
    });
});