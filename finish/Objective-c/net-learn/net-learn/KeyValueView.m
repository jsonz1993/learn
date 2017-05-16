//
//  KeyValueView.m
//  net-learn
//
//  Created by Jsonz on 2017/5/3.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "KeyValueView.h"

@implementation KeyValueView

-(id) initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        
        // 添加keyLabel
        // 如果存在父级，则创建一个 UILabel x:0, y:0, 宽：父级宽度1/3, 高: 父级高度
        _keyLabel = [[UILabel alloc] initWithFrame: CGRectMake(0, 0, CGRectGetWidth(self.frame) /3, CGRectGetHeight(self.frame))];
        // 设置背景色为透明
        _keyLabel.backgroundColor = [UIColor clearColor];
        // 文字居左对齐
        _keyLabel.textAlignment = NSTextAlignmentLeft;
        // 设置字体大小
        _keyLabel.font = [UIFont systemFontOfSize: 16];
        // 设置字体颜色
        _keyLabel.textColor = [UIColor blackColor];
        // 添加到父级
        [self addSubview: _keyLabel];
        
        // 添加valueLabel
        // 如果存在父级，则创建一个 UILabel x:0, y:0, 宽：父级宽度1/3, 高: 父级高度
        _valueLabel = [[UILabel alloc] initWithFrame: CGRectMake(CGRectGetWidth(self.frame) /3, 0, CGRectGetWidth(self.frame) * 2 /3, CGRectGetHeight(self.frame))];
        // 设置背景色为透明
        _valueLabel.backgroundColor = [UIColor clearColor];
        // 文字居左对齐
        _valueLabel.textAlignment = NSTextAlignmentLeft;
        // 设置字体大小
        _valueLabel.font = [UIFont systemFontOfSize: 16];
        // 设置字体颜色
        _valueLabel.textColor = [UIColor blackColor];
        // 添加到父级
        [self addSubview: _valueLabel];
        
    }
    return self;
}

-(void)setupKey:(NSString *)key value:(NSString *)value
{
    // 给keyLabel && valueLabel 赋值的方法
    [_keyLabel setText:key];
    [_valueLabel setText:value];
}


@end
