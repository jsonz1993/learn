/**
 * Created by Jsonz on 16/9/19.
 */
function initVideo() {
    if (earthVideo.currentTime) {
        earthVideo.style.opacity = .99,
            earthVideo.removeEventListener("timeupdate", initVideo, !1);
        var a = document.getElementById("index_head_earthVideoPoster");
        a.style.display = "none",
            visibilityChangeEvent(function () {
                earthVideo.pause()
            }, function () {
                earthVideo.play()
            })
    }
}
function videoLoaded() {
    var a = new Date - loadStartTime;
    earthVideo.removeEventListener("canplaythrough", videoLoaded, !1),
    a > 100 && report("st:index_load_video=" + a)
}
function report(a) {
    new Image(1, 1).src = "/wework_admin/report?q=" + encodeURIComponent(a) + "&r=" + Math.random();
}
var userAgent = window.navigator.userAgent
    , flag = userAgent.match(/Android/i) || -1 != userAgent.indexOf("iPhone") || -1 != userAgent.indexOf("iPod") || -1 != userAgent.indexOf("iPad")
    , isSafari = -1 != userAgent.indexOf("Safari") && -1 == userAgent.indexOf("Chrome")
    , support = function (a) {
        var b, c, d, e = document.createElement("div");
        return e.setAttribute("className", "t"),
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            b = e.getElementsByTagName("*") || [],
            c = e.getElementsByTagName("a")[0],
            c && c.style && b.length ? (a.leadingWhitespace = 3 === e.firstChild.nodeType,
                e = b = d = c = null ,
                a) : a
    }({})
    , addEvent = function (a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    }
    , visibleAPIBrowerKernel = function () {
        var a;
        return "undefined" != typeof document.hidden ? a = "origin" : ["webkit", "moz", "o", "ms"].forEach(function (b) {
            "undefined" != typeof document[b + "Hidden"] && (a = b)
        }),
            a
    }
    , visibilityChangeEvent = function (a, b) {
        var c = visibleAPIBrowerKernel();
        if (c) {
            var d, e = "origin" == c ? "visibilitychange" : c + "visibilitychange";
            addEvent(document, e, function () {
                d = "origin" == c ? document.visibilityState : document[c + "VisibilityState"],
                    "hidden" == d ? a() : "visible" == d && b()
            })
        }
    }
    , setOpacity = function (a, b) {
        return (setOpacity = support.leadingWhitespace ? function (a, b) {
                a.style.opacity = b
            }
                : function (a, b) {
                a.style.filter = "alpha(opacity=" + 100 * b + ")"
            }
        )(a, b)
    }
    ;
if (!flag && !isIE && document.createElement("video").canPlayType) {
    var earthVideo = document.createElement("video")
        , source = document.createElement("source")
        , videoAttrs = {
            width: "1280",
            preload: "auto",
            autoplay: "autoplay",
            loop: "loop",
            muted: "muted"
        };
    for (var attr in videoAttrs)
        earthVideo.setAttribute(attr, videoAttrs[attr]);
    window.devicePixelRatio >= 2 ? source.setAttribute("src", earthVideoHDSource) : source.setAttribute("src", earthVideoSource),
        source.setAttribute("type", "video/mp4"),
        earthVideo.appendChild(source),
        earthVideo.style.opacity = 0;
    var videoWrap = document.getElementById("index_head_earthVideoWrap");
    videoWrap.appendChild(earthVideo),
        earthVideo.addEventListener("timeupdate", initVideo, !1);
    var loadStartTime = +new Date;
    earthVideo.addEventListener("canplaythrough", videoLoaded, !1);
}
!function () {
    function a() {
        10 > c && (d = new Date,
        0 > e && (e = 0),
            b = setTimeout(function () {
                e = 1e4,
                    report("k=index|user|time|" + ++c + "0"),
                    a()
            }, e))
    }

    var b, c = 0, d = null, e = 1e4;
    if (!isIE) {
        var f = visibleAPIBrowerKernel();
        document.addEventListener("origin" == f ? "visibilitychange" : f + "visibilitychange", function () {
            var c = "origin" == f ? document.visibilityState : document[f + "VisibilityState"];
            "visible" == c ? a() : (e -= new Date - d,
            b && clearTimeout(b))
        }, !1)
    }
    a()
}();
var indexTopBg = document.getElementById("indexTopBg"),
    indexHead = document.getElementById("indexHead"),
    opacityDestination = 400,
    headScrollInterpolator = .5,
    isScrollPaly = !0,
    mainDivScrollInterpolator = document.getElementById("js_index_main").offsetTop || 700,
    targetOpacity,
    scrollEffect = function (a) {
        if (0 > a && (a = 0),
                targetOpacity = a >= opacityDestination ? .9 : 0 == a ? 0 : a / opacityDestination,
            isSafari && (a > mainDivScrollInterpolator ? isScrollPaly && (earthVideo && (earthVideo.style.display = "none"),
                isScrollPaly = !1) : isScrollPaly || (earthVideo && (earthVideo.style.display = ""),
                isScrollPaly = !0)),
                setOpacity(indexTopBg, targetOpacity),
                !isIE) {
            var b = "";
            "undefined" != typeof document.body.style.transform ? b = "transform" : ["webkit", "moz", "o", "ms"].forEach(function (a) {
                "undefined" != typeof document.body.style[a + "Transform"] && (b = a + "Transform");
            }),
                b ? indexHead.style[b] = "translate3d(0," + a * headScrollInterpolator + "px,0)" : indexHead.style.top = a * headScrollInterpolator + "px"
        }
    }
    ;
if (flag)
    setOpacity(indexTopBg, 1);
else {
    window.onmousewheel = function () {
    }
    ;
    var scrollTop, scrollCallBack = function (a) {
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                scrollEffect(scrollTop)
        }
        ;
    scrollCallBack(),
        window.onscroll = scrollCallBack
}
!function () {
    (window.jQuery || window.Zepto) && $(".index_log_cnt").on("click", ".js_version_title_btn", function (a) {
        var b = $(a.currentTarget).next(".js_log_list")
            , c = b.parents(".index_log_section");
        c.hasClass("index_log_section_Open") ? b.velocity("slideUp", {
            duration: 200
        }).parents(".index_log_section").removeClass("index_log_section_Open") : b.velocity("slideDown", {
            duration: 200
        }).parents(".index_log_section").addClass("index_log_section_Open")
    })
}(),
    function () {
        if (window.jQuery)
            $(".ww_officialImg_WeChatMp").on("click", function () {
                $(".index_foot_contact_qrCode").show()
            }),
                $(document).on("click", function (a) {
                    var b = $(a.target);
                    b.hasClass("index_foot_contact_qrCode") || b.hasClass("ww_officialImg_WeChatMp") || b.parents(".index_foot_contact_qrCode").length || $(".index_foot_contact_qrCode").hide();
                });
        else {
            var a = document.querySelector(".ww_officialImg_WeChatMp")
                , b = document.querySelector(".ww_alert")
                , c = document.querySelector(".ww_mask");
            a.onclick = function () {
                b.classList.remove("ww_alert_Hide"),
                    b.classList.add("ww_alert_Show"),
                    c.classList.add("ww_mask_Show")
            }
                ,
                document.querySelector(".ww_alert_foot_btn_Confirm").onclick = document.querySelector(".ww_alert_foot_btn_Cancel").onclick = c.onclick = function () {
                    b.classList.remove("ww_alert_Show"),
                        b.classList.add("ww_alert_Hide"),
                        c.classList.remove("ww_mask_Show");
                }
        }
    }();
var setPlatImg = function (a, b, c) {
        var d = 4 * c;
        isIE || isFF ? $('[plat="' + a + '"] img')[0].src = "https://work.weixin.qq.com/wework_admin/genqrcode?action=commdownload&platform=" + a + "&from=" + b + "&qr_size=" + d : $('[plat="' + a + '"] img')[0].style.content = 'url("https://work.weixin.qq.com/wework_admin/genqrcode?action=commdownload&platform=' + a + "&from=" + b + "&qr_size=" + d + '")'
    }
    ;
setPlatImg("ios", comeFrom, window.devicePixelRatio),
    setPlatImg("android", comeFrom, window.devicePixelRatio);
