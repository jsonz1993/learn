//
//  ViewController.m
//  UIImageView
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
    
    // 首先 随便加载几张图片到项目中
    
    // 获取图片路径
    NSString *path = [[NSBundle mainBundle] resourcePath]; // 工程目录
    NSString *imgPath = [NSString stringWithFormat: @"%@/2.jpg", path]; // 拼接图片路径
    // 后面参数为图片路径
    UIImage *image = [[UIImage alloc] initWithContentsOfFile: imgPath]; // 加载完会释放，不会存在内存中，不过每次都会去加载
//    image = [UIImage alloc] initWithData:<#(nonnull NSData *)#> 2进制格式图片加载
//    UIImage *image1 = [UIImage imageNamed:@"2"]; // 这种直接写文件名，如果是png格式的，可以省略后缀名 这种方式直接把图片放到内存中，占用内存但是下次调用会很快。 比如qq表情，可以放到缓存（内存）中
    
    // 图片显示必须要有载体
    UIImageView *imageView = [[UIImageView alloc] initWithImage: image];
    // image.size.width image.size.height
    imageView.frame = CGRectMake(10, 100, 400,  400);
    
    // 内容模式 居中： UIViewContentModeCenter
    // 默认为UIViewContentModeScaleToFill 拉伸充满整个载体
    // UIViewContentModeScaleAspectFit 拉伸但不改变比例，充满小的边框
    // UIViewContentModeScaleAspectFill 拉伸但不改变比例，充满大的边框
    // 学过css的 应该都很容易理解 background-size模式
    imageView.contentMode = UIViewContentModeScaleAspectFit;
    
    // UIImageView 动画 - 播放序列图 略!
    
 
    // 图片显示在屏幕上的大小是载体来控制的
    [self.view addSubview: imageView];
    
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end

