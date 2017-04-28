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
    view1.frame = CGRectMake(100, 100, 100, 100);
    // 背景颜色
    view1.backgroundColor = [UIColor redColor];
    // 将视图加入到父视图中
    [self.view addSubview: view1];
    
    // 图片 1.png
    // 如果是二倍视网膜屏幕 准备 1@2x.png
    // 同理还有 1@3x.png
    // 状态栏高度为20px
    NSLog(@"w:%f h:%f",[[UIScreen mainScreen] bounds].size.width, [[UIScreen mainScreen] bounds].size.height);
    
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
