//
//  main.m
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "MyClass.h"
#import "ParentClass.h"
#import "ChildClass.h"
#import "ColorPrinter.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        MyClass *mc = [[MyClass alloc] init];
        mc.className = @"我的类";
        
        // 类外使用 public 成员变量
        mc->_classInt = 1001; // 使用指向来调用类中的公有成员变量
        
        [mc report];
        
        
        // 继承部分学习
        // 父类
        ParentClass *pc = [[ParentClass alloc] init];
        pc.className = @"parentClass ClassName";
        [pc report];
        
        // 子类
        ChildClass *cc = [[ChildClass alloc] init];
        cc.className = @"ChildClass ClassName"; // 此处为父类继承过来的属性
        [cc show];
        [cc report]; // 此处还是1002 因为 cc中的 report 继承 pc 的report，此处重新复制了并打印。所以是1002
        
        // 多态部分学习
        [cc print];
        
        ColorPrinter *cc2 = [[ColorPrinter alloc] init];
        [cc2 print];
        
        // 如果已经引入了子类的头文件，默认父类h文件（子类头文件所引入的头文件）也会被引入了。
        // 可以这么写
        ParentClass *color = [[ColorPrinter alloc] init];
        [color print]; // 此处也是才是打印机
        
    }
    return 0;
}
