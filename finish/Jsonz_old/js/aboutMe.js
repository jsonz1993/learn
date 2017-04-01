
(function($){
    $(function(){
        // 滚动栏
        $('#myCustom').mCustomScrollbar({
            scrollButtons:{
                        enable:true
            },
            theme:"dark"
        });

        // 技能canvas
            $('.chart').easyPieChart({
            'barColor' : '#0e90d2',
            'trackColor' : '#ddd',
            'scaleColor' : '#000',
            'scaleLength' : 0,
            'lineWidth' : 6,
            'size' : 120
            })

        // 作品集
        setTimeout(function(){
            var $container = $('#container').isotope();
            $('#filters').on( 'mousedown', 'a', function() {
              var filterValue = $(this).attr('data-filter');
              $container.isotope({ filter: filterValue });
            });
        }, 1000)

        // 返回顶部
        $('.doc-scroll-to-btm').on('mousedown', function() {
            var $w = $(window);
            $w.smoothScroll({position: $(document).height() - $w.height()});
          })
    })
})(jQuery);
(function($){
    $(function(){
        var BannerH = $(window).height() - $("#nav").height();
        $("#index").height(BannerH);
    })
    $(function(){
        var scrollWidth;
        var scrollHTML;
        // 返回顶部
        $('.scrollTop').on("mouseover",function(){
            scrollWidth = $(this).outerWidth();
            scrollHTML = $(this).html();
            $(this).animate({
                width : 100
            }).text('返回顶部')
          }).on("mouseout",function(){
            $(this).animate({
                width : scrollWidth
            },300,function(){
                $(this).html(scrollHTML)
            })
          })
        // 作品集点击切换class
        $("#filters").on('click','a',function(){
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        })
    })
})(jQuery)