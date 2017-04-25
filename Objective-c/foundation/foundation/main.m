//
//  main.m
//  foundation
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "String.h" // foundation 的 string常见方法
#import "NSMutableStringClass.h" // NSMutableStringClass

int main(int argc, const char * argv[]) {
    @autoreleasepool {
//        String *str = [[String alloc] init];
//        [str stringBaseFn];
        NSMutableStringClass *_NSMutableString = [[NSMutableStringClass alloc] init];
        [_NSMutableString ShowNSMutableString];
    }
    return 0;
}
