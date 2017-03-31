import React from 'react'
import ReactDOM from 'react-dom'
import imageData from './data/image.json'
import './styles/main.scss'

// 利用自执行函数获取图片真实路径
const imageDatas = (imageDataArr => {
  for (let i = 0, j = imageDataArr.length; i < j; i++) {
    let signleImageData = imageDataArr[i];
    signleImageData.imageUrl = require(`./assets/${signleImageData.fileName}`);
    imageDataArr[i] = signleImageData;
  }
  return imageDataArr;
})(imageData);

// 获取区间内随机值
const getRangeRandom= (min, max)=> 
  Math.floor(Math.random() * (max - min) + min);

// 单个img
const ImgFigure = React.createClass({
  render() {
    // 如果props属性中指定了这张图片的位置，则使用
    let styleObj = this.props.arr.pos || {};

    return (
      <figure className="img-figure" style={styleObj}>
        <img 
          src={this.props.data.imageUrl}
          alt={this.props.data.title}
        />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
})
/*
分区取值范围
左分区 
x > 0 - ImgFigure.width/2
x < stage.width/2 - ImgFigure.width/2*3
y > 0 - ImgFigure.height/2
y < stage.height - imgFigure.height/2

上分区
x > stage.width/2 - imgFigure.width
x < stage.width/2
y > 0 - imgFigure.height/2
y < stage.height/2 - imgFigure/2*3
以此类推
 */

// 主要舞台
const GallerByReactApp = React.createClass({
  // 初始化stage
  getInitialState() {
    return {
      imgsArrangeArr: [
      ]
    }
  },

  Constant: {
    centerPos: {
      left: 0,
      right: 0,
    },
    hPosRange: { // 水平方向
      leftSecX: [0, 0],
      rightSecX: [0, 0],
      y: [0, 0]
    },
    vPosRange: { // 垂直方向取值范围
      x: [0, 0],
      topY: [0, 0]
    }
  },

  // 重新布局宿友图片 参数为居中的index
  rearrange(centerIndex) {
    var imgArr = this.state.imgsArrangeArr,
      Constant = this.Constant,
      centerPos = Constant.centerPos,
      hPosRange = Constant.hPosRange,
      vPosRange = Constant.vPosRange,
      hPosRangeLeftSecX = hPosRange.leftSecX,
      hPosRangeRightSecX =hPosRange.rightSecX,
      hPosRangeY = hPosRange.y,
      vPosRangeTopY = vPosRange.topY,
      vPosRangeX = vPosRange.x,
      imgsArrangeTopArr = [],
      topImgNum = Math.floor(Math.random() * 2), // [0, 1]
      topImgSpliceIndex = 0,
      imgsArrangeCenterArr = imgArr.splice(centerIndex, 1);

    // 居中centerIndex的图片
    imgsArrangeCenterArr[0].pos = centerPos;

    // 取出要布局上侧图片的状态信息
    topImgSpliceIndex = Math.floor(Math.random() * (imgArr.length - topImgNum));
    imgsArrangeTopArr = imgArr.splice(topImgSpliceIndex, topImgNum);

    // 布局上侧图片
    imgsArrangeTopArr.forEach((item, index)=> {
      item.pos = {
        top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
        left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
      }
    });

    // 布局两侧的图片
    for (let i= 0, j= imgArr.length, k = j/2; i < j; i++) {
      // 前半部分左边, 后半部分右边
      let hPosRangeLORX = i< k? hPosRangeLeftSecX: hPosRangeRightSecX;

      imgArr[i].pos = {
        top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
        left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
      };
    }

    // 上侧重新加入数组
    if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
      imgArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0])
    }

    imgArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

    this.setState({
      imgsArrangeArr: imgArr
    });
  },

  // LEFT mount
  componentDidMount() {
    // 为每张图片计算位置范围

    // 拿到舞台大小
    const stageDom = ReactDOM.findDOMNode(this.refs.stage);
    let stageW = stageDom.scrollWidth,
      stageH = stageDom.scrollHeight,
      halfStageW = Math.ceil(stageW / 2),
      halfStageH = Math.ceil(stageH / 2);
    
    // 拿到一个imageFigure的大小
    let imgFigureDom = ReactDOM.findDOMNode(this.refs.imgFigure0),
      imgW = imgFigureDom.scrollWidth,
      imgH = imgFigureDom.scrollHeight,
      halfImgW = Math.ceil(imgW / 2),
      halfImgH = Math.ceil(imgH / 2);

    // 计算中心图片的位置点
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH,
    }

    // 计算左侧，右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*4;
    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW*2;
    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;

    this.Constant.hPosRange.y[0] = -halfImgH;
    this.Constant.hPosRange.y[1] = stageH - halfImgH;

    // 计算上侧图片排布位置取值范围
    this.Constant.vPosRange.topY[0] = -halfImgH;
    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH*3;
    this.Constant.vPosRange.x[0] = halfImgW - imgW;
    this.Constant.vPosRange.x[1] = halfImgW;

    this.rearrange(0);


  },

  render() {
    let controllerUnits = [],
      imgFigures = [];
    imageData.forEach((item, i) => {
      // 初始化state
      if (!this.state.imgsArrangeArr[i]) {
        this.state.imgsArrangeArr[i] = {
          pos: {
            left: 0,
            top: 0
          }
        }
      }

      // 遍历添加图片
      imgFigures.push(
        <ImgFigure
          ref={'imgFigure' + i} 
          key={i}
          data={item}
          arr={this.state.imgsArrangeArr[i]}
        />
      );
    });

    console.log()

    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    )
  }
})

ReactDOM.render(
  <GallerByReactApp/>, document.getElementById('app'))
