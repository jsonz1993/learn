/**
 * Created by Jsonz on 2016/3/24.
 */

var BodyVm = new Vue({
    el : 'body',
    data : {
        ready : true, // 加载好
        lastDay : 5, // 倒数天数
        Available : 20000, // 可用额度
        repaymentMoney : 1000, // 还款金额
        repaymentDay : '2015-03-21', // 还款日期
        pageDataDetail : false, // 是否处于借款详情页面
        loadDetailData : [

        ]
    },
    methods : {
        showDetail : function() {
            window.location.href += '#detail';
            this.pageDataDetail = !this.pageDataDetail;
        }
    }
});

var mainVm = new Vue({
    el : '#main',
    data : {

    }
});


Util.overrideBackPressed(true);
Util.setKeyEventListener(function(){
    if (BodyVm.pageDataDetail) {
        BodyVm.pageDataDetail = true;
    }
});



















