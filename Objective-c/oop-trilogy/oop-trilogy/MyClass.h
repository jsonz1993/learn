//
//  MyClass.h
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface MyClass : NSObject
{
    // 成员变量访问修饰符的问题
    // 默认为 protected 受保护的
    @public // 公有 - 在类内 类外都可以使用，并且可以被继承
    int _classInt;
    
    @private // 私有 - 在类内可以使用， 类外无法调用 并且无法被继承
    @protected // 受保护 - 默认的 在类内可以使用，类外无法调用 并且可以被继承
    NSString *_classStr;
    @package // 框架权限 - 在框架内相当于受保护(可被调用与继承)， 在框架外相当于私有(类外无法使用与继承)
}
@property(nonatomic, strong)NSString *className;
// 方法是没有访问修饰符的， 同C语言一样。
// 如果想要一个方法可以在类外可以使用，则要在h声明，m实现。
// 如果不想在类外使用， 直接在m写实现， h 不写声明。
-(void) report;
@end
