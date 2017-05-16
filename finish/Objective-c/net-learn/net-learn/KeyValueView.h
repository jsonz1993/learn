//
//  KeyValueView.h
//  net-learn
//
//  Created by Jsonz on 2017/5/3.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <UIKit/UIKit.h>
/*
 * ------------------
 * | 姓名: | Jsonz |
 * ------------------
 *
 */

@interface KeyValueView : UIView

@property (nonatomic, strong) UILabel *keyLabel;
@property (nonatomic, strong) UILabel *valueLabel;

- (void) setupKey: (NSString *)key value:(NSString *)value;

@end
