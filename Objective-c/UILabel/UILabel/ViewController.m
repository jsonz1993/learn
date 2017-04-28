//
//  ViewController.m
//  UILabel
//
//  Created by Jsonz on 2017/4/29.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    // 文本标签
    UILabel *label = [[UILabel alloc] init];
    label.frame = CGRectMake(10, 100, 300, 30);
    label.backgroundColor = [UIColor yellowColor];
    
    // 文本
    label.text = @"我是一个IOS FONT";
    // 文字布局 NSTextAlignmentCenter NSTextAlignmentLeft NSTextAlignmentRight 等等
    label.textAlignment = NSTextAlignmentCenter;
    // 文字颜色
    // clearColor透明色
    // colorWithRed green blue alpha 类似css的rgba
    label.textColor = [UIColor colorWithRed:.1 green:.8 blue:.2 alpha:1];
    // label的透明度
    label.alpha = .9;
    
    // 字体设置 label.font里面
    label.font = [UIFont systemFontOfSize: 25]; // 字号
    // 加粗或倾斜
    label.font = [UIFont boldSystemFontOfSize:25];// 加粗和25号字，会覆盖前面设置
    label.font = [UIFont italicSystemFontOfSize:25]; // 倾斜
    
    // 看系统有哪些字体
    for (NSString *name in [UIFont familyNames])
    {
        NSLog(@"font = %@", name);
    }
    
    // 设置字体
    label.font = [UIFont fontWithName:@"Bodoni 72 Smallcaps" size:25];
    // 文字阴影
//    label.shadowColor = [UIColor redColor];
//    label.shadowOffset = CGSizeMake(1, 1);
    
    // 多文字处理 会自动出现...
    label.text = @"topView.autoresizingMask = UIViewAutoresizingFlexibleRightMargin | UIViewAutoresizingFlexibleLeftMargin | UIViewAutoresizingFlexibleTopMargin | UIViewAutoresizingFlexibleBottomMargin | UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight; // 右， 左， 上， 下， 宽， 高 跟随父级自适应[backView addSubview: topView]";
    // 如果要换行
    // 1. 首先label要足够大
    // 2. 设置换行模式
    // 3. 设置显示行数
    label.frame = CGRectMake(20, 20, [UIScreen mainScreen].bounds.size.width - 40, [UIScreen mainScreen].bounds.size.height - 40);
    label.lineBreakMode = NSLineBreakByCharWrapping;
    label.numberOfLines = 2; // 如果设置到-1或0 就不会限制行数，能显示多少行就显示多少行
    
    // 根据字符串大小计算label大小 参数 [font, 宽高, 换行模式]
    
    
    [self.view addSubview:label];
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
