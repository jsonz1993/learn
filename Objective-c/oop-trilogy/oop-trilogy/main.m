//
//  main.m
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MyClass.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        MyClass *mc = [[MyClass alloc] init];
        mc.className = @"我的类";
        
        // 类外使用 public 成员变量
        mc->_classInt = 1001; // 使用指向来调用类中的公有成员变量
        
        [mc report];
        
    }
    return 0;
}
