//
//  NSMutableArrClass.m
//  foundation
//
//  Created by Jsonz on 2017/4/26.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "NSMutableArrClass.h"

@implementation NSMutableArrClass
-(void)showArrFn
{
    NSMutableArray *array = [[NSMutableArray alloc] init];
    NSString *str1 = @"bili";
    // 添加元素
    [array addObject: str1];
    NSArray *arr1 = [[NSArray alloc] initWithObjects:@"1", @"2", @"3", @"4", @"5", nil];
    [array addObject:arr1];
    NSLog(@"array = %@", array);
    
    // 删除所有元素
    [array removeAllObjects];
    NSLog(@"删除后的 array = %@", array);
    [array addObject:arr1];
    [array addObject: str1];
    // 删除最后一个元素
    [array removeLastObject];
    NSLog(@"删除后的 array = %@", array);
    [array addObject: str1];
    // 删除指定元素
    [array removeObject:@"bili"];
    NSLog(@"删除后的 array = %@", array);
    // 删除指定index的元素
    [array removeObjectAtIndex:0];
    NSLog(@"删除后的 array = %@", array);
    
    [array addObject:arr1];
    [array addObject: str1];
    
    // 交换元素位置
    [array exchangeObjectAtIndex:1 withObjectAtIndex:0];
    NSLog(@"交换后 %@", array);
}
@end
