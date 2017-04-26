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
#import "Arr.h"
#import "NSMutableArrClass.h"
#import "NSDic.h"
#import "NSDic2.h"

int main(int argc, const char * argv[]) {
    @autoreleasepool {
//        String *str = [[String alloc] init];
//        [str stringBaseFn];
//        NSMutableStringClass *_NSMutableString = [[NSMutableStringClass alloc] init];
//        [_NSMutableString ShowNSMutableString];
//        Arr *arr = [[Arr alloc] init];
//        [arr showArrFn];
//        NSMutableArrClass *arr2 = [[NSMutableArrClass alloc] init];
//        [arr2 showArrFn];
//        NSDic *dic = [[NSDic alloc] init];
//        [dic showNSDictionaryFn];
        NSDic2 *dic2 = [[NSDic2 alloc] init];
        [dic2 showFn];
        
    }
    return 0;
}
