//
//  Arr.m
//  foundation
//
//  Created by Jsonz on 2017/4/26.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "Arr.h"

@implementation Arr
-(void) showArrFn
{
    NSLog(@"不可变数组");
    // OC数组。 可以存储不同类型对象,只能存储对象.(int, char)不可以
    // 只存对象指针（js一样)
    NSArray *arr1 = [[NSArray alloc] initWithObjects:@"1", @"2", @"3", @"4", @"5", nil];
    // 数组长度
    int count = (int)arr1.count;
    NSLog(@"count = %d", count);
    
    // 判断是否有该对象
    BOOL isHave = [arr1 containsObject: @"2"];
    if (isHave)
        NSLog(@"存在");
    else
        NSLog(@"不存在");

    // 取得数组中所需元素
    NSString *str = [arr1 lastObject];
    NSLog(@"最后一个对象为 %@", str);
    str = [arr1 firstObject];
    NSLog(@"第一个对象为 %@", str);
    str = [arr1 objectAtIndex: 3];
    NSLog(@"第三个元素为 %@", str);
    // 查找某个对象为第几个下标, 不存在则 -1
    int index = (int)[arr1 indexOfObject:@"3"];
    NSLog(@"查找某个对象为第几个下标 %d", index);
    
    // 数组的遍历 1.for; 2. for in; 3.枚举迭代
    // for 循环 注意类型问题
    for (int i = 0; i < arr1.count; i++) {
        NSString *str1 = [arr1 objectAtIndex:i];
        NSLog(@"for str1 = %@", str1);
    }
    
    // 快速枚举 数组的元素类型要保持一致
    for (NSString *str2 in arr1) {
        NSLog(@"for in str2 = %@", str2);
    }
    
    // 迭代枚举
    // 迭代枚举呢？ 只有for && for in ?
    
}
@end
