//
//  UserInfoViewController.h
//  net-learn
//
//  Created by Jsonz on 2017/5/3.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import <UIKit/UIKit.h>
// 引入keyvalue
#import "KeyValueView.h"

@interface UserInfoViewController : UIViewController

// 把所有个人信息录到这里
@property (nonatomic, strong) KeyValueView *userNameView; // 用户名信息
@property (nonatomic, strong) KeyValueView *userSexView; // 用户性别
@property (nonatomic, strong) KeyValueView *birthdayView; // 生日
@property (nonatomic, strong) KeyValueView *emailView; // email
@property (nonatomic, strong) KeyValueView *phoneView; // 手机号


@end
