//
//  ParentClass.m
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "ParentClass.h"

@implementation ParentClass
-(void)report
{
    _classInt = 1002;
    _classStr = @"Jsonz's 私有变量";
    NSLog(@"ClassName - %@", _className);
    NSLog(@"classInt - %d", _classInt);
    NSLog(@"classStr - %@", _classStr); // 此处在 ChildClass 中也会被打印出来，因为继承了该方法，所以会被打印
}

// 方法 用于重载
-(void)print
{
    NSLog(@"我是打印机");
}
@end
