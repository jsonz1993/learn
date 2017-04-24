//
//  String.m
//  foundation
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "String.h"

@implementation String
-(void) stringBaseFn
{
    char *s = "Hello C"; // c语言字符串 char 类型 *号代表对象
    // OC 中@代表对象
    NSString *str = @"Hello ObjectiveC"; // OC 字符串 NSString 类型 *号代表对象
    // OC 与 C字符串的类型转换
    // C -> OC
    NSString *str1 = [NSString stringWithUTF8String:s];
    NSLog(@"str1 = %@", str1);
    // OC -> C
    NSLog(@"str2 = %s", [str UTF8String]);
    
    // 这样创建字符串，不需要自己手动去释放内存等
    NSString *str3 = @"IOS";
    // 这种需要手动释放内存
    NSString *str4 = [[NSString alloc] init];
    str4 = @"ios";
    
    // **格式化字符串** 重要
    int a = 10;
    NSString *str5 = [NSString stringWithFormat:@"a = %d str3 = %@", a, str3];
    NSLog(@"str5 为 %@", str5);
    
    // 拼接字符串
    NSString *str6 = [str5 stringByAppendingString: [NSString stringWithUTF8String: s]];
    NSLog(@"str6 = %@", str6);
    
    // 大小写的转换问题
    NSString *str7 = @"HELLO JSONZ";
    NSString *str8 = [str7 lowercaseString];
    NSLog(@"str8 = %@", str8);
    
    // 转换大写
    NSString *str9 = [str8 uppercaseString];
    NSLog(@"str9 = %@", str9);
    
    // 前缀和后缀的判断
    NSString *str10 = @"www.imooc.com";
    // 判断前缀
    BOOL hasPreFix = [str10 hasPrefix:@"www."];
    if (hasPreFix)
        NSLog(@"有对应前缀");
    else
        NSLog(@"没有对应前缀");
    
    // 后缀
    BOOL hasSuffix = [str10 hasSuffix:@".com"];
    if (hasSuffix)
        NSLog(@"有对应后缀");
    else
        NSLog(@"没有对应后缀");
    
    // 判断字符串是否相同
    NSString *str11 = @"Hello";
    NSString *str12 = @"Hello";
    if ([str11 isEqualToString:str12])
        NSLog(@"str11 与 str12 一致");
    else
        NSLog(@"不一致");
    
    // 分割字符串
    // 1. 按照指定字符分割字符串 返回数组
    NSString *str13 = @"a,b,c,d,e,f,g";
    NSArray *strArray = [str13 componentsSeparatedByString:@","];
    for (NSString *str in strArray)
    {
        NSLog(@"str = %@", str);
    }
    // 2. 按照范围截取字符串
    NSRange range = NSMakeRange(1, 5);
    NSString *str14 = [str13 substringWithRange:range];
    NSLog(@"str14 = %@", str14);
    // 3. 从某一位开始截取到结束
    NSString *str15 = [str13 substringFromIndex:2];
    NSLog(@"str15 = %@", str15);
    // 4.从开头到某一位
    NSString *str16 = [str13 substringToIndex:7];
    NSLog(@"str16 = %@", str16);
    // 5.将字符串拆分为每一个字符, 从字符串取出某一位
    for (int i = 0; i < [str13 length]; i++)
    {
        NSLog(@"%c", [str13 characterAtIndex:i]);
    }
    
    // 查找
    NSString *str17 = @"ab cd ef gh ij ab";
    // 查找指定字符串的位置 正向查找
    NSRange range1 = [str17 rangeOfString:@"ab"];
    NSLog(@"range1.location: %ld range1.length: %ld", range1.location, range1.length);
    
    // 替换
    NSString *str18 = @"Hello ios, Hello imooc";
    // 替换某一个范围的内容
    NSString *str19 = [str18 stringByReplacingCharactersInRange:NSMakeRange(0, 5)  withString:@"你好"];
    NSLog(@"str19 = %@", str19);
    
    // 用指定字符串替换原字符串
    NSString *str20 = [str18 stringByReplacingOccurrencesOfString:@"Hello ios" withString: @"第一个参数为源字符串中要被替换的内容， 第二个为替换成的字符串"];
    NSLog(@"str20 = %@", str20);
    
    // 读取文件
    // 1. 本地文件； 2.网络文件
    // 路径类
    NSString *str21 = @"www.baidu.com";
    // 网络路径
    NSURL *httpURL = [NSURL URLWithString:str21];
    //本地路径
//    NSString *fileURL = [NSURL fileURLWithPath:str21];
    // 读取网络文件
    NSString *httpStr = [NSString stringWithContentsOfURL:httpURL encoding:NSUTF8StringEncoding error:nil];
    NSLog(@"httpStr = %@", httpStr);
    // 读取本地文件
    NSString *fileStr = [NSString stringWithContentsOfFile: @"/Users/jsonz/Documents/learn/Objective-c/foundation/foundation/app.txt" encoding:NSUTF8StringEncoding error: nil];
    NSLog(@"fileStr = %@", fileStr);
    // 写入文件
    NSString *str22 = @"Hello JSer";
    BOOL isOk = [str22 writeToFile:@"/Users/jsonz/Documents/learn/Objective-c/foundation/foundation/app.js" atomically:YES encoding:NSUTF8StringEncoding error:nil];
    if (isOk) NSLog(@"文件写入成功");
    else NSLog(@"文件写入失败");
}
@end
