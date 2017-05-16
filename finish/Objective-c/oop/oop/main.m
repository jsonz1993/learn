//
//  main.m
//  oop
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "People.h" // 引入类

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // 实例化对象/ 调用方法用 []
        // 类名    对象名(星号代表是指针类型) = [[类名/对象名] 方法名]
        // People p1/p2                  = [[People alloc] init]
        // alloc - 为对象分配内存空间
        // init - 进行初始化操作
        People *p1 = [[People alloc] init];
        People *p2 = [[People alloc] init];
        People *p3 = [People new]; // new 在Objective-C 用得少
        NSLog(@"p1 - %p", p1);
        NSLog(@"p2 - %p", p2);
        NSLog(@"p3 - %p", p3);
        
        // 属性的使用
        p1.peopleName = @"jsonz";
        p2.peopleName = @"李四";
        NSLog(@"p1.peopleName - %@", p1.peopleName);
        NSLog(@"p2.peopleName - %@", p2.peopleName);
        
        [p1 report];
        [People report1];
        // [[People alloc] init]
        // [People alloc]会返回一个对象，这时候才能调用 init 所以 alloc是加号方法， init是减号方法
        
        // 函数的参数使用
        int a1 = [p1 showWithA:10];
        int a2 = [p1 showWithA:20 andB:30];
        NSLog(@"a1 = %d", a1);
        NSLog(@"a2 = %d", a2);
        
        // 重写后的init p1 会有初始值
        NSLog(@"p1 的属性有哪些: ---- ");
        [p1 showPeopleProperty];
        

        // 自己实现的初始化方法
        People *pSelf = [[People alloc] initWithPeopleName:@"Jsonz" andPeopleAge: 23];
        NSLog(@"自己实现的init 的属性有哪些: ---- ");
        [pSelf showPeopleProperty];
    }
    return 0;
}
