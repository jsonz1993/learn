/**
 * Created by Administrator on 2015/8/30.
 */
/**** 全局函数 ****/
//获取随机整数 [lowV,upV)
function GET_RANDOM (lowV,upV){
    var cho = upV - lowV;
    return Math.floor(Math.random() * cho + lowV);
}
function log(str) {
    return console.log(str);
}
function addRandomClass (_elm,_type){
    var _oldType = _type;

    _elm.each(function(index){
        var _random = GET_RANDOM(0,_type.length);

        var _prevClass = $(this).prev().hasClass(_type[_random]);
        if (_prevClass) {
            _random = (_random == _type.length-1) ? 0 : _random+1;
        }

        $(this).addClass(_type[_random]);
    })
}


/**** Json数据 ****/
var Json = {
    "frontend" : {
        'javascript' : [
            {
                'time' : '2015-08-11',
                'title' : 'JavaScript DOM 编程艺术'
            },
            {
                'time' : '2015-09-10',
                'title' : 'JavaScript 面向对象编程指南'
            },
            {
                'time' : '2015-08-21',
                'title' : 'JavaScript 高级程序设计'
            },
            {
                'time' : '2015-08-21',
                'title' : '众妙之门jQ和js'
            },
            {
                'time' : '2015-08-21',
                'title' : 'JS极客基础'
            },
            {
                'time' : '2015-08-21',
                'title' : '超实用的JavaScript代码段'
            },
            {
                'time' : '2015-08-21',
                'title' : '慕课网JavaScript'
            },
            {
                'time' : '2015-08-21',
                'title' : '秒味JavaScript'
            },
            {
                'time' : '2015-08-21',
                'title' : '慕课新手引导'
            },{
                'time' : '2015-08-21',
                'title' : '移动端'
            }
        ],
        "html+css" : [
            {
                'time' : '2015-08-21',
                'title' : 'HTML5与CSS3实例教程'
            },
            {
                'time' : '2015-08-21',
                'title' : 'HTML网页设计入门必读'
            },
            {
                'time' : '2015-08-21',
                'title' : '慕课HTML'
            },
            {
                'time' : '2015-08-21',
                'title' : 'CSS3网页设计入门必读'
            },
            {
                'time' : '2015-08-21',
                'title' : 'CSS权威指南'
            },
            {
                'time' : '2015-08-21',
                'title' : 'less'
            },
            {
                'time' : '2015-08-21',
                'title' : 'sass'
            },
            {
                'time' : '2015-08-21',
                'title' : '慕课CSS'
            },
            {
                'time' : '2015-08-21',
                'title' : 'bootstrap+amaze'
            }
        ],
        "jquery+zepto" : [
            {
                'time' : '2015-08-21',
                'title' : '锋利的jquery'
            },
            {
                'time' : '2015-08-21',
                'title' : '新手引导jQuery'
            }
        ],
        "node" : [
            {
                'time' : '2015-08-21',
                'title' : 'gulp'
            },
            {
                'time' : '2015-08-22',
                'title' : 'less'
            },
            {
                'time' : '2015-08-11',
                'title' : 'jade'
            },
            {
                'time' : '2015-09-21',
                'title' : ' node'
            },
            {
                'time' : '2015-08-21',
                'title' : ' 秋神启示录'
            }
        ]
    },
    "demo" : {
        "javascript" : [
            {
                "time" : "2015-09-02",
                "title" : "日历插件"
            }
        ],
        "html+css" : [
            {
                "time" : "2015-09-10",
                "title" : "视差滚动"
            }
        ],
        "jquery+zepto" : [
            {
                "time" : "2015-08-20",
                "title" : "新手指导"
            }
        ],
        "node" : [
            {
                "time" : "2015-08-30",
                "title" : "gulp模板"
            }
        ]

    },
    "private" : {
        "杂记" : [
            {
                "time" : "2015-07-05",
                "title" : "我的一万种可能到了你这都变成不可能"
            },
            {
                "time" : "2015-08-05",
                "title" : "你是人间的五月天"
            }
        ]
    },
    "about" : [
        {
            "time" : "2015-06-30",
            "title" : "aboutMe"
        },
        {
            "time" : "2015-09-01",
            "title" : "log"
        }
    ]
};



/**** avalon ****/
avalon.ready(function(){
    //主模板入口
    var html = avalon.define({
        $id : 'module_html',
        header_html : '/Jsonz/html/main/header.html',
        tags_html : '/Jsonz/html/main/tags.html',
        tagRe : function(){
            var msg = '',i;
            var $tagCon = $('#tag_content'),
                _type = $('body').data('type');
            if (!_type) {
                return
            }
            var _JsonFr = Json[_type];

            for (i in _JsonFr) {
                var $section = $('<section><header class="text-success">'+ i +'</header></section>');

                var $article = $('<article></article>');
                var _thisFr = _JsonFr[i];

                $.each(_thisFr,function(index){
                    var _title = _thisFr[index]['title'];
                    if (_type == 'demo') {
                        var _href = '/Jsonz/html/' + _type + '/' + i.toLowerCase() + '/' + _title.toLowerCase() + '/' + 'index.html';
                    } else {
                        var _href = '/Jsonz/html/' + _type + '/' + i.toLowerCase() + '/' + _title.toLowerCase() + '.html';
                    }

                    var $span = $('<span class="label" data-href="'+ _href +'">' + _title + '</span>');
                    $article.append($span);
                });

                $section.append($article);
                $tagCon.append($section);
            }
            html.frontTagColor();
            html.tagHeadGo();
        },//标签填充
        frontTagColor : function (){
            var $tagPar = $('#tag_content');
            var $tags = $tagPar.find('.label');
            var tagType = ['label-default','label-primary','label-success','label-info','label-warning','label-danger'];

            addRandomClass($tags,tagType);
        },//标签随机设置标签颜色
        tagHeadGo :function(){
            var $head = $('#tag_content').find('header');
            var $label = $('#tag_content').find('.label');

            $head.on('click',function(){
                var i = $(this).text();
                var _type = $('body').data('type');
                window.location = '/Jsonz/html/' + _type + '/' + i + '/' + i + '.html';
            });

            $label.on('click',function(){
                var _href= $(this).data('href');
                window.location = _href;
            })
        }//标签跳转
    });
    //导航
    var header = avalon.define({
        $id : 'header',
        href : {
            front_path :  '/Jsonz/html/frontend',
            frontend : '/Jsonz/html/frontend/frontend_list.html',
            demo : '/Jsonz/html/demo/demo_list.html',
            about : '/Jsonz/html/about/about_list.html',
            private : '/Jsonz/html/private/private_list.html',
            index : '/Jsonz/index.html'
        }
    });
    //标签
    var tags = avalon.define({
        $id : 'tags'
    });

    avalon.scan(document.body);
});



/**** 初始化和一些通用函数 ****/
;(function(window,document){
    $(function(){
        conRe.init();
        frontRe.init();
        hljs.initHighlightingOnLoad();//代码块转换插件
    });
/**** 内容生成 将逐渐用av代替****/
var conRe = {
    'init' : function(){
        var that = this;
        that.JsonSort();//Json数据按时间排倒叙
        that.indexCon();//主页列表内容填充
        that.frontList();//前端列表内容填充
    },
    '_obj' : {
        "tagPar" : $('#frontend_tags'),
        "_type" : $('body').data('_type'),
        "_tagType" : ['label-default','label-primary','label-success','label-info','label-warning','label-danger']
    },
    'JsonSort' : function(){
        var arr = [];

        for (var i in Json) {
            reJson(Json[i]);
        }

        //排列核心
        function reJson(obj){
            for (var i in obj) {
                arr.push(obj[i]);
            }

            arr.forEach(function(item,index,arr){
                if (!(arr[index] instanceof Array)) return ;
                arr[index].sort(function(item,next){
                    return parseInt(next.time.replace(/-/g,''),10) - parseInt(item.time.replace(/-/g,''),10);
                })
            });

            for (var i in obj) {
                obj[i] = arr.shift();
            }
            arr = [];
        }

    },//Json数据排序
    indexCon : function () {
        var that = this;
        var $indexList = $('#index_list');
        var obj = {},msg = '';

        var arr = [];

        for (var i in Json) {//frontend ...
            var _thisJson = Json[i];
            for (var j in _thisJson){//javascript ...
                for (var k = 0;k < 2;k++) { //循环出前两条
                    if (_thisJson[j][k] !== undefined) {
                        arr.push(_thisJson[j][k]);
                    }
                }
            }

            arr.sort(function(item,next){//排序
                return parseInt(next.time.replace(/-/g,''),10) - parseInt(item.time.replace(/-/g,''),10);
            });
            msg += '<dt>' + i + '</dt>';

            if (i != 'about') {//如果不是about，取出前两条显示
                for (var n = 0;n < Math.min.call(Math,arr.length,2); n ++) {
                    msg += '<dd><time>' + arr[n].time + '</time>';
                    msg +=  arr[n].title + '</dd>'
                }
            } else {//如果是about，取出所有显示
                for (var n = 0; n < Json.about.length; n ++) {
                    msg += '<dd><time>' + Json.about[n].time + '</time>';
                    msg +=  Json.about[n].title + '</dd>'
                }
            }
            arr = [];
        }
        $indexList.html(msg);
    },//主页列表
    frontTagRe : function(){
        var that = this,msg = '',i;
        var $tagCon = that._obj.tagPar,
            _type = that._obj._type,
            _JsonFr = Json['frontend'];

        for (i in _JsonFr) {
            var _thisCon = $tagCon.find('header:contains(' + i + ')').next();
            var _thisFr = _JsonFr[i];
            $.each(_thisFr, function (index) {
                msg += _thisFr[index]['title'];
            });
            _thisCon.html()
        }

    },//右侧标签填充
    frontTagColor : function (){
        var that = this;
        var $tagPar = that._obj.tagPar;
        var $tags = $tagPar.find('.label');
        var tagType = that._obj._tagType;
        $tags.each(function(index){
            var _random = GET_RANDOW(0,tagType.length);
            var _prevClass = $(this).prev().hasClass(tagType[_random]);
            if (_prevClass) {
                _random = (_random == tagType.length-1) ? 0 : _random+1;
                $(this).addClass(tagType[_random]);
            } else {
                $(this).addClass(tagType[_random]);
            }
        })
    },//随机设置标签颜色
    frontList : function(){
        var that = this,msg = '';
        var $tagCon = that._obj.tagPar,
            type = $('body').data('type'),
            $frUl = $('#'+type + '_list');
            _type = that._obj._type,
            _thisTag = Json[type][_type];
        if (!_type) return ;

        $.each(_thisTag,function(i){
            var _title = _thisTag[i]['title'];
            var _href = '/Jsonz/html/' + type + '/' + _type.toLowerCase() + '/' + _title.toLowerCase() + '.html';

            msg += '<li data-href="' + _href + '">' + _title;
            msg += '<time>' + _thisTag[i]['time'] + '</time></li>';
        });
        $frUl.html(msg);

        $frUl.find('li').on('click',function(){
            var _href = $(this).data('href');
            window.location = _href;
        })
    }//分类列表
};

/**** frontend****/
var frontRe = {
    init : function(){
        var that = this;
        that.panelUp();
        that.panelToggle();
        that.navRe();
        that.randomColor();
        that.goBack();
    },
    obj : {
        _con : $('#frontend_con'),
        _nav : $('#frontend_con_ul'),
        _colorType : ['panel-danger','panel-warning','panel-info','panel-success','panel-primary']
    },
    panelUp : function(){
        var that = this;
        var $par = that.obj._con;
        $par.find('.panel-body').hide();
    },//初始化让内容块隐藏，后期改为css
    panelToggle : function(){
        var that = this;
        var _elm = that.obj._con.find('.panel-heading');
        var $nav = that.obj._nav;
        _elm.each(function(index){
            var $that = $(this);

            $that.on('click',function(){
                var panelBody = $that.next('.panel-body');

                if (!panelBody.is(':animated')) {
                    panelBody.slideToggle();
                    $nav.find('li').eq(index).toggleClass('active');
                }
            })
        });
    },//点击切换显示
    navRe : function(){
        var that = this;
        var $con = that.obj._con;
        var $head = $con.find('.panel-heading');
        var $nav = that.obj._nav;
        var msgLi = '';


        $head.each(function(index){
            var $text = $(this).text();
            msgLi += '<li class="list-group-item">' + $text + '</li>';
        });
        $nav.html(msgLi);

        var $li = $nav.find('li');
        $li.on('click',function(){
            var _index = $(this).index();
            $con.find('.panel-body').eq(_index).slideToggle();
            //$li.removeClass('active').eq(_index).addClass('active');
            $(this).toggleClass('active');
        })
    },//导航栏填充
    randomColor : function(){
        var that = this;
        var $panel = that.obj._con.find('.panel');
        var _type = that.obj._colorType;
        addRandomClass($panel,_type);
    },//GET_RANDOW
    goBack : function(){
        var $elm = $('#frontend_con').find('h2 .btn');
        $elm.on('click',function(){
            var _type = $('body').data('_type');

            var _href = _type.toLowerCase() + '.html';
            window.location = _href;
        })
    }
};



/**** 稀奇古怪的猎奇 ****/
function JsonLog(){
    console.log('%c 毛错，我的目标是过年后在深圳能找到6k的工作\n ','padding-right:160px;padding-top:40px;padding-bottom:40px;line-height:100px;font-size:20px;background:url("http://h.hiphotos.baidu.com/shitu/pic/item/2cf5e0fe9925bc31636e61c258df8db1cb1370bc.jpg") no-repeat right;background-size:contain;');
}



})(window,document,undefined);
































