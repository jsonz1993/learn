/**
 * Created by Jsonz on 16/9/17.
 */

/**
 * 工厂模式关心的是产出（创建的是什么），不关心创建的过程。
 * 建造者在创建对象时要求会更复杂，关心整个过程
 * 正对颗粒度比较大的，模块间复用率较高，变动不大的情况。
 */


/**
 * 抽出三个类
 */
// 创建一个人类
var Human = function(param) {
    // 技能
    this.skill = param && param.skill || '保密';
    // 兴趣爱好
    this.hobby = param && param.hobby || '保密';
};
// 类人原型方法
Human.prototype = {
    getSkill: function(){
        return this.skill;
    },
    getHobby: function(){
        return this.hobby;
    }
};
// 实例化姓名类
var Named = function(name) {
    var that = this;
    // 构造器
    (function(name, that){
        that.wholeName = name;
        if (name.indexOf(' ') > -1) {
            that.FirstName = name.slice(0, name.indexOf(' '));
            that.secondName = name.slice(name.indexOf(' '));
        }
    })(name, that);
};
// 实例化职位类
var Work = function(work) {
    var that = this;
    // 构造器
    // 构造函数中通过传入的职位特征来设置相应职位以及描述
    (function(work, that){
        switch (work) {
            case 'code':
                that.work = '工程师';
                that.workDescript = '沉迷编程，日渐消瘦';
                break;
            case 'UI':
            case 'AI':
                that.work = '设计师';
                that.workDescript = '设计是一种艺术';
                break;
            default:
                that.work = work;
                that.workDecript = '对不起，我们还不清楚您所选择职位的相关描述';
        }
    })(work, that);
};
// 更换期待的职位
Work.prototype.changeWork = function(work){
    this.work = work;
};
// 更改职位描述
Work.prototype.changeDescript = function(setence) {
    this.workDescript = setence;
};

/**
 * 创建应聘者
 * 参数 name: 姓名
 * 参数 work: 职位
 */
var Person = function(name, work) {
    // 创建应聘者缓存对象
    var _person = new Human();
    // 创建应聘者姓名解析对象
    _person.name = new Named(name);
    // 创建应聘者期待职位
    _person.work = new Work(work);
    // 返回对象
    return _person;
};

var person = new Person('xiao ming', 'code');
console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.workDescript);
