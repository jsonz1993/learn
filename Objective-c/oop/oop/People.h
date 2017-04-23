//
//  People.h
//  oop
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>

// 姓名，年龄，性别
// 类内使用成员变量， 类外使用属性
@interface People : NSObject
{
}
// 声明类的属性 声明后 main.m 就可以通过 p1.peopleName = @"Jsonz"; 访问修改属性
// 属性就是成员变量的外部接口 h 文件写。外部使用
//设置与获取Name
@property(nonatomic, strong)NSString *peopleName;
/**
 * - 、+ (减号代表对象方法，加号代表类方法)
 * 对象方法既是在实例上调用，而类方法则是在类上面调用，如: People *p1 = [[People alloc] init]
 * 此时 People是类， p1是对象
 * h 文件进行声明， m 进行实现
 */
//加号减号方法
-(void) report;
+(void) report1;
// 返回值设置
-(int) returnInt;
// 函数参数问题
-(int)showWithA: (int) a; // 有一个int类型参数 函数名为 showWithA:
-(int)showWithA: (int)a andB:(int)b; // 有两个int类型参数, 此时函数名为 showWithA: andB:

// 初始化方法
// 对于初始化方法来说 id || instancetype 没有区别，对于其他方法，一般 instancetype 比 id用的多
//-(id)init; // 万能类型，可以返回各种类型对象
-(instancetype)init; // 当前类的类型，比如当前类是People类型，那么instancetype就是People类型
-(void) showPeopleProperty; // 定义一个方法来输出类的属性
// 自定义的初始化方法
- (instancetype) initWithPeopleName:(NSString *) peopleName andPeopleAge:(int)peopleAge;
@end
