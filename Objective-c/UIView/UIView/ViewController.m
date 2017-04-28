//
//  ViewController.m
//  UIwindow
//
//  Created by Jsonz on 2017/4/27.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    NSLog(@"bilibili");
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    // 视图
    UIView *view1 = [[UIView alloc] init]; // 实例化view
    // 状态栏高度为20px 所以写view的时候一般会让出20px
    view1.frame = CGRectMake(10, 30, 375-20, 667-20);
    // 背景颜色
    view1.backgroundColor = [UIColor redColor];
    // 将视图加入到父视图中
    [self.view addSubview: view1]; // self.view 是view1的父视图
    NSLog(@"frame = x:%f y:%f w:%f h:%f", view1.frame.origin.x, view1.frame.origin.y, view1.frame.size.width, view1.frame.size.height);
    // 一般叫边框大小， x && y 永远为0 w&&h 一致
    NSLog(@"bounds = x:%f y:%f w:%f h:%f", view1.bounds.origin.x, view1.bounds.origin.y, view1.bounds.size.width, view1.bounds.size.height);
    // center - 中心点
    NSLog(@"center - x:%f y:%f", view1.center.x, view1.center.y);
    
    // 图片 1.png
    // 如果是二倍视网膜屏幕 准备 1@2x.png
    // 同理还有 1@3x.png
    NSLog(@"w:%f h:%f",[[UIScreen mainScreen] bounds].size.width, [[UIScreen mainScreen] bounds].size.height);
    
    // 父视图 只会有一个
    UIView *superView = view1.superview;
    superView.backgroundColor = [UIColor greenColor];
    
    UIView *view2 = [[UIView alloc] init];
    view2.frame = CGRectMake(10, 100, 300, 300); // 坐标全是根据自身父视图来设置的，不会跨层
    // 给view设置唯一标识，方便父级视图获取辨认
    view2.tag = 2;
    view2.backgroundColor = [UIColor blackColor];
    [view1 addSubview:view2];
    
    UIView *view3 = [[UIView alloc] init];
    view3.frame = CGRectMake(20, 50, 100, 100);
    view3.tag = 3;
    view3.backgroundColor = [UIColor purpleColor];
    [view1 addSubview:view3];
    
    // 子视图 会有多个
    NSArray *subViewsArray = view1.subviews;
    for (UIView *view in subViewsArray)
    {
        
        if (view.tag == 2)
            view.backgroundColor = [UIColor whiteColor]; // view2变白色
    }
    
    // 如果知道子视图的tag 可以通过tag得到对应的子视图
    UIView *subView = [view1 viewWithTag:3];
    subView.backgroundColor = [UIColor greenColor];
    
    // 修改层级 类似css 的 zIndex
    // 当层交换之后， 对应的子视图的数组下标也会进行改变
    // 同一个父视图中，先加入的view层级会比较低
    UIView *view4 = [[UIView alloc] init];
    view4.frame = CGRectMake(0, 100, 300, 300);
    view4.backgroundColor = [UIColor yellowColor];
    [self.view insertSubview:view4 atIndex:0]; // 这时候 view4会盖住view1的所有界面
    
    // 交换两个层的视图
    [superView exchangeSubviewAtIndex:0 withSubviewAtIndex:1];
    
    //插入一个视图到指定层
    UIView *view5 = [[UIView alloc] init];
    view5.frame = CGRectMake(7, 80, 200, 200);
    view5.backgroundColor = [UIColor blackColor];
    [view1 insertSubview:view5 atIndex:1];
    
    // 将一个view 放最顶层或最底层
    [view1 bringSubviewToFront:view2]; // 顶层
    [view1 sendSubviewToBack: view2]; // 底层
    
    // 自适应
    UIView *backView = [[UIView alloc] init];
    backView.frame = CGRectMake([UIScreen mainScreen].bounds.size.width / 2 - 25, [UIScreen mainScreen].bounds.size.height /2 - 25, 50, 50); // 自适应到屏幕中部
    backView.backgroundColor = [UIColor orangeColor];
    backView.tag = 1001;
    // 准许子视图自适应
    backView.autoresizesSubviews = YES;
    [self.view addSubview: backView];
    
    UIView *topView = [[UIView alloc] init];
    topView.frame = CGRectMake(10, 10, 30, 30);
    topView.backgroundColor = [UIColor greenColor];
    // 再设置子视图的适应方式 左侧适应
    topView.autoresizingMask = UIViewAutoresizingFlexibleRightMargin | UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleTopMargin | UIViewAutoresizingFlexibleBottomMargin | UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight; // 右， 左， 上， 下， 宽， 高 跟随父级自适应
    [backView addSubview: topView];
    
    // 按钮 下节课会讲到
    UIButton *btn = [UIButton buttonWithType: UIButtonTypeSystem];
    btn.frame = CGRectMake(10, 550, 355, 30);
    btn.backgroundColor = [UIColor brownColor];
    [btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview: btn];
    
}

-(void)btnClick
{
    UIView *view = [self.view viewWithTag:1001];
    view.frame = CGRectMake(view.frame.origin.x - 5, view.frame.origin.y -5, view.frame.size.width + 10, view.frame.size.height + 10);
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
