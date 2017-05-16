//
//  ChildClass.m
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "ChildClass.h"

@implementation ChildClass
-(void)show
{
    _classInt = 1003;
    NSLog(@"show 此处_classInt 变化了 - %d", _classInt);
//    NSLog(@"show 打印父类的私有方法NSString %@", _classStr);  此处因为是父级的私有变量，所以外部无法访问
}
//方法重写，直接在m方法实现
-(void) print
{
    NSLog(@"黑白打印机");
}
@end
