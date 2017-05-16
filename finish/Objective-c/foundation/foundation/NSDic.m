//
//  NSDictionary.m
//  foundation
//
//  Created by Jsonz on 2017/4/26.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "NSDic.h"

@implementation NSDic
-(void) showNSDictionaryFn
{
    NSLog(@"test");
//   字典： 相当于js的对象~ py的字典。
    // 声明后不可以改
    NSDictionary *dict1 = [NSDictionary dictionaryWithObject:@"1" forKey:@"a"];
    NSLog(@"dict1 = %@", dict1);
    
    // 多个键值对
    NSDictionary *dict2 = [NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:@"1", @"2", @"3", nil] forKeys:[NSArray arrayWithObjects:@"a", @"b", @"c", nil]];
    NSLog(@"dict2 %@", dict2);
    
    // 简便写法
    NSDictionary *dict3 = @{
                            @"1": @"a",
                            @"2": @"b"
                            };
    NSLog(@"dict3 %@", dict3);
    
    // 长度
    int count = (int)[dict2 count];
    NSLog(@"count %d", count);
    
    // 获取对应key的 value
    NSString *value = [dict2 valueForKey: @"b"];
    NSLog(@"value = %@", value);
    NSString *value2 = [dict2 objectForKey: @"b"];
    NSLog(@"value2 = %@", value2);
    
    // 数组 字典所有的值
    NSArray *allValues = [dict2 allValues];
    NSLog(@"allValues = %@", allValues);
    
    // 数组 所有的key
    NSArray *allKeys = [dict2 allKeys];
    NSLog(@"allKeys = %@", allKeys);
    
    // 遍历
    NSArray *array = [dict2 objectsForKeys:[NSArray arrayWithObjects: @"a", @"b", @"d", nil] notFoundMarker:@"Not Fount"];
    NSLog(@"array = %@", array);
    
    // 遍历字典
    for (NSString *key in dict2) {
        NSLog(@"%@ = %@", key, [dict2 objectForKey:key]);
    }
    
    // 枚举器
    NSEnumerator *en = [dict2 keyEnumerator];
    id key = nil;
    while (key = [en nextObject]) {
        NSLog(@"key = %@", key);
    }
    
    [dict2 enumerateKeysAndObjectsUsingBlock:^(id key, id obj, BOOL *stop) {
        NSLog(@"id = %@, obj = %@", key, obj);
    }];
    
}
@end
