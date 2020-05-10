//  INIT tooltip on hover
        // $(document).ready(function(){
        //     $('[data-hover="tooltip"').tooltip();
        // });

        // Carousel Buttons function
        // $(document).ready(function(){
        //     $('#mycarousel').carousel({ interval: 2000});
        //     $('#carousel-pause').click(function(){
        //         $('#mycarousel').carousel('pause');
        //     });
        //     $('#carousel-play').click(function(){
        //         $('#mycarousel').carousel('cycle');
        //     });

        // });

        // carousel with single button
        $(document).ready(function(){
            $('#mycarousel').carousel({ interval: 2000});
            $('#carouselButton').click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause')){
                    $('#mycarousel').carousel('pause');
                    $($('#carouselButton').children('span').removeClass('fa-pause'));
                    $($('#carouselButton').children('span').addClass('fa-play'));

                }else{
                    $('#mycarousel').carousel('cycle');
                    $($('#carouselButton').children('span').removeClass('fa-play'));
                    $($('#carouselButton').children('span').addClass('fa-pause'));

                }
            });
        });
        // reserve Table Model js
        $(document).ready(function(){
            $('#reserveTableModalButton').click(function(){
                $('#reserveTableForm').modal('toggle');
            });

            // This adds attributes and show tooltip on hover
            $('#reserveTableModalButton').hover(function(){
                $('#reserveTableModalButton').attr('data-html', 'true');
                $('#reserveTableModalButton').attr('data-placement', 'bottom');
                $('#reserveTableModalButton').tooltip('toggle');
            });
        });

        // login Table Model js
        $(document).ready(function(){
            $('#loginModalButton').click(function(){
                $('#loginModal').modal('toggle');
            });
        });