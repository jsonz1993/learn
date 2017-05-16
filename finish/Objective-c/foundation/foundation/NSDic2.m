//
//  NSDic2.m
//  foundation
//
//  Created by Jsonz on 2017/4/26.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "NSDic2.h"

@implementation NSDic2
// 可变字典
-(void) showFn
{
    NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
    // 添加键值对
    [dict setObject:@"1" forKey: @"a"];
    [dict setObject: @"2" forKey: @"b"];
    
    // 删除键值对
    [dict removeObjectForKey:@"a"];
    NSLog(@"dict 删除forKey %@", dict);
    
    // 删除所有
    [dict removeAllObjects];
    NSLog(@"dict 删除所有 %@", dict);

    [dict setObject:@"1" forKey: @"a"];
    [dict setObject: @"2" forKey: @"b"];
    [dict setObject: @"3" forKey: @"c"];
    [dict removeObjectsForKeys: [NSArray arrayWithObjects:@"a", @"b", nil]];
    NSLog(@"dict 批量删除  %@", dict);
    
}
@end
