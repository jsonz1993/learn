//
//  NSStringClass.m
//  foundation
//
//  Created by Jsonz on 2017/4/25.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "NSMutableStringClass.h"

@implementation NSMutableStringClass
-(void) ShowNSMutableString
{
    // 可变字符串的简单方法
    // 可变字符串是字符串的子类
    // 实例化
    NSMutableString *str = [[NSMutableString alloc] initWithCapacity:10]; // 分类长度不可以超过10， 性能优化。不过超过10 也不会报错
    [str setString:@"hello "];

    // 1.追加字符串
    [str appendString:@"ObjectiveC"];
    NSLog(@"str = %@", str);
    // 追加格式化字符串
    int a = 10;
    [str appendFormat:@" - %d", a];
    NSLog(@"str = %@", str);
    
    // 2.替换字符串
    NSRange range = [str rangeOfString:@"ObjectiveC"];
    [str replaceCharactersInRange:range withString:@"IOS"];
    NSLog(@"str = %@", str);
    
    // 3. 插入字符串
    [str insertString:@"A" atIndex: 4];
    NSLog(@"str = %@", str);
    
    // 4. 删除字符串
    NSRange range1 = [str rangeOfString:@"IOS"];
    [str deleteCharactersInRange:range1];
    NSLog(@"str = %@", str);
}
@end
