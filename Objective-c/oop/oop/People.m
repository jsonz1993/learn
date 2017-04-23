//
//  People.m
//  oop
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "People.h"

// 成员变量 m 文件定义 内部使用
@implementation People
{
    int _peopleAge;
    int _peopleSex;
}

static NSString *_peopleName1; // 静态变量，供加号方法内调用

- (instancetype) init
{
    self = [super init];
    if (self) {
        _peopleName = @"Jsonz"; // 成员变量 类内使用
        _peopleAge = 30;
        _peopleSex = 1;
    }
    return self;
}

// 减号方法 对象调用
-(void) report
{
    NSLog(@"减号 Report");
}

// 加号方法 类调用
+(void) report1
{
    NSLog(@"加号 Report");
    _peopleName1 = @"张三"; // 调用静态变量 不能调用成员变量
}

// 返回值问题
-(int) returnInt
{
    // 前面是int，所以该函数必须返回一个int类型
    return 0;
}

//参数问题
-(int)showWithA:(int)a
{
    return a;
}
-(int)showWithA:(int)a andB:(int)b
{
    return a + b;
}

// 输出People的对象初始化值
-(void) showPeopleProperty
{
    NSLog(@"peopleName = %@", _peopleName);
    NSLog(@"peopleAge = %d", _peopleAge);
    NSLog(@"peopleAge = %d", _peopleSex);
}

- (instancetype) initWithPeopleName:(NSString *) peopleName andPeopleAge:(int)peopleAge
{
    self = [super init];
    if (self) {
        _peopleName = peopleName;
        _peopleAge = peopleAge;
    }
    return self;
}
@end
