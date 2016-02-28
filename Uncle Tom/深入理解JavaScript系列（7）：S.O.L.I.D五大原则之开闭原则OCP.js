/**
 * Created by Jsonz on 2016/2/28.
 */

// 问题代码
(function(){
    // 问题类型
    var AnswerType = {
        Choice : 0,
        Input : 1
    };

    // 问题实体
    function question(label, answerType, choices) {
        return {
            label : label,
            answerType : answerType,
            choices : choices // 这里的choices 是可选参数
        };
    }

    var view = (function(){
        // render 一个问题
        function renderQuestion(target,question) {
            var questionWrapper = document.createElement('div');
            questionWrapper.className = 'question';

            var questionLabel = document.createElement('div');
            questionLabel.calssName = 'question-label';

            var label = document.createTextNode(question.label);
            questionLabel.appendChild(label);

            var answer = document.createElement('div');
            answer.calssName = 'question-input';

            // 根据不同的类型展示不同的代码： 分别是下拉菜单和输入框两种
            var input;
            if (question.answerType === AnswerType.Choice) {
                input = document.createElement('select');
                var len = question.choices.length;
                for (var i = 0;i < len; i++) {
                    var option = document.createElement('option');
                    option.text = question.choices[i];
                    option.value = question.choices[i];
                    input.appendChild(option);
                }
            } else if (question.answerType === AnswerType.Input) {
                input = document.createElement('input');
                input.type = 'text';
            }

            answer.appendChild(input);
            questionWrapper.appendChild(questionLabel);
            questionWrapper.appendChild(answer);
            target.appendChild(questionWrapper);
        }

        return {
            // 遍历所有的问题列表进行展示
            render : function(target, questions) {
                for (var i = 0; i < questions.length; i++) {
                    renderQuestion(target, questions[i]);
                }
            }
        }
    })();

    var questions = [
        question('Have you used tobacoo products within the last 30 days?', AnswerType.Choice,['Yes','No']),
        question(('What medications are you currently using?'), AnswerType.Input)
    ];

    var questionRegion = document.getElementById('questions');
    view.render(questionRegion, questions);

    // 该代码有个问题就是如果要添加一个问题类型的话就要去修改 renderQuestion 的函数
    // = =我怎么感觉问题函数比我平时写的还要好，然后也比较容易理解
}());

// 重构代码
function questionCreator(spec, my) {
    var that = {};

    my = my || {};
    my.label = spec.label;

    my.renderInput = function(){
        throw "not implemented";
        // 这里renderInput 没有实现，主要目的是让各自问题类型的实现代码去覆盖整个方法
    };

    that.render = function(target) {
        var questionWrapper = document.createElement('div');
        questionWrapper.className = 'question';

        var questionLabel = document.createElement('div');
        questionLabel.className = 'question-label';

        var label = document.createTextNode(spec.label);
        questionLabel.appendChild(label);

        var answer = my.renderInput();
        // 该render 方法是同样的粗合理代码
        // 唯一的不同就是上面的一句 my.renderInput()
        // 因为不同的问题类型有不同的实现

        questionWrapper.appendChild(questionLabel);
        questionWrapper.appendChild(answer);
        return questionWrapper;
    };

    return that;
}

// 该代码的作用组合要是render一个问题，同时提供一个未实现的renderInput 方法以便其他function可以覆盖，以使用不同的问题类型，我们继续看一下每个问题类型的实现代码：
function choiceQuestionCreator(spec) {
    var my = {},
        that = questionCreator(spec,my);

    my.renderInput = function(){
        var input = document.createElement('select');
        var len = spec.choices.length;
        for (var i = 0; i < len; i++) {
            var option = document.createElement('option');
            option.text = spec.choices[i];
            option.value = spec.choices[i];
            input.appendChild(option);
        }

        return input;
    };

    return that;
}

function inputQuestionCreator(spec) {
    var my = {},
        that = questionCreator(spec, my);

    // input 类型的renderInput 实现
    my.renderInput = function(){
        var input = document.createElement('input');
        input.type = 'text';
        return input;
    };

    return that;
}

// choiceQuestionCreator 函数和 inputQuestionCreator函数分别对应下拉菜单和input输入框的renderInput 实现，通过内部调用统一的questionCreator(spec,my)然后返回that对象

// view 对象代码就很固定了
var view = {
    render : function(target, questions) {
        for (var i = 0; i < questions.length; i++) {
            target.appendChild(questions[i].render());
        }
    }
};

// 声明问题
var questions = [
    choiceQuestionCreator({
        label : 'Have you used tobacco products within the last 30 days?',
        choices : ['Yes','No']
    }),
    inputQuestionCreator({
        label : 'What medications are you currently using?'
    })
];

var questionRegion = document.getElementById('questions');

view.render(questionRegion, questions);

//首先，questionCreator方法的创建，可以让我们使用模板方法模式将处理问题的功能delegat给针对每个问题类型的扩展代码renderInput上。
//其次，我们用一个私有的spec属性替换掉了前面question方法的构造函数属性，因为我们封装了render行为进行操作，不再需要把这些属性暴露给外部代码了。
//第三，我们为每个问题类型创建一个对象进行各自的代码实现，但每个实现里都必须包含renderInput方法以便覆盖questionCreator方法里的renderInput代码，这就是我们常说的策略模式。





































