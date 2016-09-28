/**
 * Created by Jsonz on 16/9/28.
 */

var htmlFontSize,
    getData2,
    selFirstCode,
    selSecondCode,
    selSecondText,
    $DataYear = $('#Data-Year'),
    $DataMonth = $('#Data-Month');

// 初始化第一个选项
function loadParent(data, sel) {
    var selNum;
    // 如果有传选中的code，则记录code的index
    for (var i = 0;i < data.length; i++) {
        if (data[i].code == sel) selNum = i;
    }

    var reduce = -(selNum - 2);
    $DataYear.css('margin-top', reduce*3.6+'rem');
    var htmlStr = '';
    for (var j = 0; j < data.length; j++) {
        if (j == selNum - 1 || j == selNum +1) {
            htmlStr += '<div class="DataShow-item-second Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
        } else if (j == selNum) {
            htmlStr += '<div class="DataShow-item-big Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>';
        } else {
            htmlStr += '<div class="DataShow-item-small Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>';
        }
    }
    $DataYear.html(htmlStr);
}

// 初始化第二个选项
function loadChild(data, sel) {
    var selNum = 0;
    // 如果有传选中的code，则记录code的index
    for (var i = 0;i < data.length; i++) {
        if (data[i].code == sel) selNum = i;
    }

    var reduce = -(selNum - 2);
    $DataMonth.css('margin-top', reduce*3.6+'rem');
    var htmlStr = '';
    for (var j = 0; j < data.length; j++) {
        if (j == selNum - 1 || j == selNum +1) {
            htmlStr += '<div class="DataShow-item-second Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
        } else if (j == selNum) {
            htmlStr += '<div class="DataShow-item-big Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>';
        } else {
            htmlStr += '<div class="DataShow-item-small Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>';
        }
    }
    $DataMonth.html(htmlStr);
}

// 滑动
function touchData() {
    var oldTouch,
        newTouch,
        nowTopset,
        itemMove,
        $el = $('.DataShow-item');
    $el.on('touchstart', function(event){
        event.preventDefault();
        htmlFontSize = parseFloat($('html').css('font-size'));
        nowTopset = parseFloat($(this).css('margin-top'));
        oldTouch = event.originalEvent.targetTouches[0].pageY;
    }).on('touchmove', function(event) {
        event.preventDefault();
        newTouch = event.originalEvent.targetTouches[0].pageY;
        itemMove = newTouch - oldTouch;
        var len = $(this).children().length,
            ifMoveTop = itemMove + nowTopset - 7.4*htmlFontSize,
            ifMoveBottom = ((len - 6) * 3.6 + 18.45) * htmlFontSize,
            parTop = $('.DataShow').offset().top;

        if (ifMoveTop < 0 && ifMoveTop > -ifMoveBottom) {
            $(this).css('margin-top', itemMove + nowTopset + 'px');
            $(this).find('div').removeClass('DataShow-item-big DataShow-item-second DataShow-item-small').addClass('DataShow-item-small');
            var NowMarginTop = -Math.ceil((itemMove + nowTopset - 2.5 * htmlFontSize) / 3.6 / htmlFontSize);
            if (NowMarginTop < -2) {
                NowMarginTop = -2;
            } else if (NowMarginTop > len - 2) {
                NowMarginTop = len - 2;
            }
            $(this).find("div").eq(NowMarginTop+1).removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-second");
            $(this).find("div").eq(NowMarginTop+3).removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-second");
            $(this).find("div").eq(NowMarginTop+2).removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-big");
        }
    }).on('touchend', function(event){
        event.preventDefault();
        nowTopset = itemMove + nowTopset;
        var oughtTop = 7.2*htmlFontSize,
            parTop = $('.DataShow').offset().top,
            nowTop = $(this).find('.DataShow-item-big').offset().top,
            reduce = oughtTop - nowTop + parTop,
            thisMargin = parseFloat($(this).css('margin-top'));

        $(this).css('margin-top', thisMargin + reduce + 'px');
        if (selFirstCode != $DataYear.find('.DataShow-item-big').attr('code')) {
            selFirstCode=$("#Data-Year").find(".DataShow-item-big").attr("code");
            loadChild(toGetData2(selFirstCode,getData2));
        }
        selSecondCode = $DataMonth.find(".DataShow-item-big").attr("code");
        selSecondText = $DataMonth.find(".DataShow-item-big").text();
    })
}

function init(data1, data2, dom) {
    $DataYear = $('#Data-Year'); $DataMonth = $('#Data-Month');
    var arr1 = dom.attr('par-code'),
        arr2 = dom.attr('child-code');
    loadParent(data1, arr1);
    selFirstCode = arr1;
    selSecondCode = arr2;
    selSecondText = dom.text();
    loadChild(toGetData2(arr1, data2), arr2);
}

function toGetData2(parCode, data) {
    var getData2 = [];
    for (var key in data) {
        if (key == parCode) {
            getData2 = data[key];
        }
    }
    return getData2;
}

function useTowLineData(data1, data2, id, title, func) {
    getData2 = data2;
    TwoLineDataLoadPage();
    function LoanTwoLineDataIn(e) {
        $('.DataTitle').text(title);
        var $getInput = $(e);
        init(data1, data2, $getInput);
        touchData();
        $('#Data-btn-cancle').click(function(){
            $('.Data-bac').hide();
            $('.DataContain').hide();
        });
        $('#Data-btn-submit').click(function(){
            if (func) func();
            $(id).attr('par-code', selFirstCode);
            $(id).attr('child-code', selSecondCode);
            $(id).val(selSecondText);
            $('.Data-bac').hide();
            $('.DataContain').hide();
        });
        $('.Data-bac').click(function(){
            $(".Data-bac").hide();
            $(".DataContain").hide();
        })
    }
    //设置ID点击事件
    $(id).click(function(){
        LoanTwoLineDataIn(id);
        $(".Data-bac").show();
        $(".DataContain").show();
    });

}

//加载页面
function TwoLineDataLoadPage(){
    var str="";
    $(".Data-bac").remove();
    $(".DataContain").empty().remove();
    str+='<div class="Data-bac"></div>'
        +'<div class="DataContain">'
        +'<div class="DataTitle">入学时间</div>'
        +'<div class="DataShow">'
        +'<div class="DataShow-item" id="Data-Year">'
        +'</div>'
        +'<div class="Data-line"></div>'
        +'<div class="DataShow-item" id="Data-Month"></div></div>'
        +'<div class="Data-button"><div class="Data-btn-left Data-textcenter" id="Data-btn-cancle">取消</div>'
        +'<div class="Data-btn-right Data-textcenter" id="Data-btn-submit">确定</div> </div>'
        +'<div class="Data-Middle-Item">'
        +'<div class="leftBorder"></div><div class="rightBorder"></div>'
        +'<div class="topBorder"></div><div class="bottomBorder"></div>';
    $("body").append(str);
}