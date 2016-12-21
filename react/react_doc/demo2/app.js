// app1.js
var HelloWorld = React.createClass({
	render: function() {
		return (
			<p>
				Hello, <input type="text" placeholder="Your name here" />!
				It is {this.props.date.toTimeString()}
			</p>
		);
	}
});

ReactDOM.render(
	<HelloWorld date={new Date()} />,
	document.getElementById('example')
);

// app2.js
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked? 'liked': 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
)

// app3.js
var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    );
  }
});

var PagePic = React.createClass({
  render: function() {
    return (
      <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
    );
  }
});

var PageLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        this.props.pagename
      </a>
    );
  }
});
ReactDOM.render(
  <Avatar pagename="Engineering" />,
  document.getElementById('example')
);

// app4.js
// Prop 验证
var TEST = React.createClass({
  propTypes: {
    // 可以生命 prop为指定的 js 基本类型。

    // 默认情况下 这些 prop可传可不传
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,
    optionalSymbol: React.PropTypes.symbol

    // 所有可以渲染的对象： 数字
    // 字符串，DOM 元素或包含这些类型的数组
    optionalNode: React.PropTypes.node,

    // React 元素
    optionalElement: React.PropTypes.element,

    // 指定多个类型中的一个
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),

    // 指定类型组成的数组
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // 类型组成的对象
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // 指定参数的对象
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    })

    // 你可以在任意东西后面加上 `isRequired` 如果没有提供，会报错
    requiredFunc: React.PropTypes.func.isRequired,

    // 不可空的任意类型
    requiredAny: React.PropTypes.any.isRequired,

    // 可以自定义验证器，如果失败返回一个Error对象。
    // 不要直接使用 console.warn
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  }
});

// app5.js
// 默认Prop值
var ComponentWitdDefaultProps = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  }
});

// app6.js
// Props 捷径
var CheckLink = React.createClass({
  render: function() {
    // 这样会把 CheckList 所有的 props 复制到 <a>
    return <a {...this.props}>{ '√ '}{this.props.children} </a>;
  }
});

ReactDOM.render(
  <CheckLink href="/checked.html">
    Click here!
  </CheckLink>,
  document.getElementById('example')
);

// app7.js
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: func() {
    this.intervals.forEach(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // 引用 mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // 调用mixin方法
  },
  tick: function() {
    this.setSTate({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});
ReactDOM.render(
  <TickTock />,
  document.getElementById('example')
)

// app8.js
// ES6 Classes
// 不支持mixins，但是可以直接继承某些组件
class Counter extend React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    // 也可以在构造函数直接绑定事件处理器
    // this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      // 使用es6 class语义，不会自定绑定class
      // <div onClick={() => this.tick()} >
      <div onClick={this.tick.bind(this)} >
        Clicks: {this.state.count}
      </div>
    );
  }
}
Counter.propTypes = {initialCount: React.PropTypes.number};
Counter.defaultProps = {initialCount: 0};
ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode)

// app9.js
<Component {...this.props} more="values" />

// app10.js
// 表单组件
// value 用于 input textarea
// checked checkbox radio
// selected option
var Ttt = React.createClass({
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        defaultValue="hellp!"/>
      <input type="checkbox" defaultChecked={true} />
    );
  },
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
  }
});
ReactDOM.render(
  <Ttt/>,
  document.getElementById('example')
);

// Ref
var Ttt = React.createClass({
  render: function() {
    return (
      <TextInput
        ref={function(input) {
          if (input != null) {
            input.focus();
          }
        }} />
    );
  }
});

// 完整的示例
var MyComponent = React.createClass({
  handleClick: function() {
    this.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref={(ref) => this.myTextInput = ref} />
        <input 
          type="button"
          value="focus the text input"
          onClick={this.handleClick}
        />
      </div>
     );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);

// 动画







































