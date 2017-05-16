//
//  ParentClass.h
//  oop-trilogy
//
//  Created by Jsonz on 2017/4/23.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <Foundation/Foundation.h>

// NSObject - 基类 此处的:(冒号)是代表继承关系
@interface ParentClass : NSObject
{
    // 受保护变量 可继承 不可外部调用
    int _classInt;
    
    // 私有变量
    @private
    NSString *_classStr;
    
}
@property(nonatomic, strong)NSString *className;
-(void)report; // 如果此处不声明，则类外不能调。 子类也不继承
-(void)print;// 用于多态重载
@end
