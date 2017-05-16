//
//  ColorPrinter.m
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "ColorPrinter.h"

@implementation ColorPrinter
-(void)print
{
    // 如果此处要调用父类的方法可以这么写：
    [super print];
    // 调用当前类的方法可以用 self 父类可以用 super
    // [self print];
    NSLog(@"彩色打印机");
}
@end
