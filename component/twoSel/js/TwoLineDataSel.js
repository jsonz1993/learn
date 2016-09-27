/**
 * Created by vitionchen on 2015/12/4.
 */
var HtmlFontSize="";  //网页字体
var getData2={};
var selFirstCode="";
var selSecondCode="";
var selSecondText="";
//初始化第一选项
function loadTwoLineYear(data,sel){
    var selNum=1;
    for(var i = 0;i<data.length;i++){
        if(data[i].code==sel){
            selNum+=i;
        }
    }
    var reduce=-(selNum-3);
    $("#Data-Year").css("margin-top",reduce*3.6+"rem");
    var str="";
    for(var j=0;j<data.length;j++){
            //判断加载样式
            if(j==selNum-2||j==selNum){
                str+='<div class="DataShow-item-second Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
            }else if(j==selNum-1){
                str+='<div class="DataShow-item-big Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
            }else{
                str+='<div class="DataShow-item-small Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
            }
    }
    $("#Data-Year").empty().append(str);
}
//初始化第二选项
function loadTwoLineMonth(data,sel){
    var selNum=1;
    var $DataMonth=$("#Data-Month");
    for(var i = 0;i<data.length;i++){
        if(data[i].code==sel){
            selNum+=i;
        }
    }
    var str="";
    var reduce=-(selNum-3);
    $DataMonth.css("margin-top",reduce*3.6+"rem");
    for(var j=0;j<data.length;j++){
        //判断加载样式
        if(j==selNum-2||j==selNum){
            str+='<div class="DataShow-item-second Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
        }else if(j==selNum-1){
            str+='<div class="DataShow-item-big Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
        }else{
            str+='<div class="DataShow-item-small Data-textcenter" code="'+data[j].code+'">'+data[j].name+'</div>'
        }
    }
    $DataMonth.empty().append(str);
}
//触动
function SelTwoLineData(){
    var oldtouch="";    //手指初始位置
    var newtouch="";    //手指移动位置
    var nowTopset="";   //时间框位置
    var itemmove=0;     //位移距离
//手指触碰获取字体大小、上边距、手指位置
    $(".DataShow-item").bind("touchstart",function(event){
        event.preventDefault();
        HtmlFontSize=parseFloat($("html").css("font-size"));
        nowTopset=parseFloat($(this).css("margin-top"));
        oldtouch = event.originalEvent.targetTouches[0].pageY;     //获取初始滑动位置
    })

//手指移动判断选择日期
    $(".DataShow-item").bind("touchmove",function(event){
        event.preventDefault();
        newtouch = event.originalEvent.targetTouches[0].pageY;    //获取滑动位置
        itemmove=newtouch-oldtouch;                               //获取滑动间距
        var len=$(this).children().length;
        var ifmovetop=itemmove+nowTopset-7.4*HtmlFontSize;
        var ifmovebottom=((len-6)*3.6+18.45)*HtmlFontSize;
        var parTop=$(".DataShow").offset().top;                     //时间选择框离顶部位置
        if(ifmovetop<0&&ifmovetop>-ifmovebottom){                     //移动位置
            $(this).css("margin-top",itemmove+nowTopset+"px");
            $(this).find("div").removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-small");
            var NowMarginTop=-Math.ceil((itemmove+nowTopset-2.5*HtmlFontSize)/3.6/HtmlFontSize);
            if(NowMarginTop<-2){
                NowMarginTop=-2;
            }else if(NowMarginTop>len-2){
                NowMarginTop=len-2;
            }
            $(this).find("div").eq(NowMarginTop+1).removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-second");
            $(this).find("div").eq(NowMarginTop+3).removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-second");
            $(this).find("div").eq(NowMarginTop+2).removeClass("DataShow-item-big DataShow-item-second DataShow-item-small").addClass("DataShow-item-big");
        }
    })

//手指离开后计算高度差进行定位选择项
    $(".DataShow-item").bind("touchend",function(event){
        event.preventDefault();
        nowTopset=itemmove+nowTopset;
        var oughtTop=7.2*HtmlFontSize;
        var parTop=$(".DataShow").offset().top;
        var nowTop=$(this).find(".DataShow-item-big").offset().top;
        var reduce=oughtTop-nowTop+parTop;
        var ThisMargin=parseFloat($(this).css("margin-top"));
        $(this).css("margin-top",ThisMargin+reduce+"px");
        if(selFirstCode!=$("#Data-Year").find(".DataShow-item-big").attr("code")){
            selFirstCode=$("#Data-Year").find(".DataShow-item-big").attr("code");
            loadTwoLineMonth(toGetData2(selFirstCode,getData2));
        }
        selSecondCode=$("#Data-Month").find(".DataShow-item-big").attr("code");
        selSecondText=$("#Data-Month").find(".DataShow-item-big").text();
    })
}
//初始化
function TwoLineDataLoad(selData1,selData2,dom){
    var arr1=dom.attr("par-code");
    var arr2=dom.attr("child-code");
    loadTwoLineYear(selData1,arr1);
    selFirstCode=arr1;
    selSecondCode=arr2;
    selSecondText=dom.text();
    loadTwoLineMonth(toGetData2(arr1,selData2),arr2);
}
//根据一级获取二级
function toGetData2(parCode,data){
    var getData2=[];
    for(var key in data){
        if(key==parCode){
            getData2=data[key];
        }
    }
    return getData2;
}
//载入调用函数 用法(选项1数据，选项2数据，ID，标题);
function UseTwoLineData(data1,data2,ID,title,func){
    getData2=data2;
    TwoLineDataLoadPage();
    var LoanTwoLineDataIn=function(e){
        $(".DataTitle").text(title);
        var $getInput=$(e);
        TwoLineDataLoad(data1,data2,$getInput);
        SelTwoLineData();
        //取消、确定
        $("#Data-btn-cancle").click(function(){
            $(".Data-bac").hide();
            $(".DataContain").hide();
        });
        $("#Data-btn-submit").click(function(){
            if(func){
                func();
            }
            $(ID).attr("par-code",selFirstCode);
            $(ID).attr("child-code",selSecondCode);
            $(ID).val(selSecondText);
            $(".Data-bac").hide();
            $(".DataContain").hide();
        });
        //背景点击
        $(".Data-bac").click(function(){
            $(".Data-bac").hide();
            $(".DataContain").hide();
        });
    }
    //设置ID点击事件
    $(ID).click(function(){
        LoanTwoLineDataIn(ID);
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