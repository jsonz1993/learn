//
//  UserInfoViewController.m
//  net-learn
//
//  Created by Jsonz on 2017/5/3.
//  Copyright © 2017年 Jsonz. All rights reserved.
//

#import "UserInfoViewController.h"

//定义两个宏 屏幕宽度与高度，一般项目都会定义方便使用
#define KScreenWidth [[UIScreen mainScreen] bounds].size.width
#define KScreenHeight [[UIScreen mainScreen] bounds].size.height

// 第一步：布局页面
// 第二步：发起网络请求 获取个人用户信息
// 第三步：解析网络响应数据 将其展示到页面上
@interface UserInfoViewController ()<NSURLConnectionDelegate> // 遵从该协议

@end

@implementation UserInfoViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    // 给父级加背景色
    [self.view setBackgroundColor: [UIColor whiteColor]];
    
    // 手动创建一个标题
    UILabel *titleLable = [[UILabel alloc] initWithFrame:CGRectMake(0, 40, KScreenWidth, 20)];
    // 设置标题信息
    [titleLable setText:@"个人用户信息"];
    titleLable.textAlignment = NSTextAlignmentCenter;
    titleLable.font = [UIFont systemFontOfSize:18];
    titleLable.backgroundColor = [UIColor clearColor];
    [self.view addSubview: titleLable];
    
    
    
    // 创建一个用户名控件
    _userNameView = [[KeyValueView alloc] initWithFrame:CGRectMake(100, 70, KScreenWidth - 100 * 2, 30)];
    _userNameView.backgroundColor = [UIColor clearColor];
    [self.view addSubview:_userNameView];
    
    // 创建一个用户性别控件
    _userSexView = [[KeyValueView alloc] initWithFrame:CGRectMake(100, 70 + 30, KScreenWidth - 100 * 2, 30)];
    _userSexView.backgroundColor = [UIColor clearColor];
    [self.view addSubview:_userSexView];
    
    // 创建一个用户生日控件
    _birthdayView = [[KeyValueView alloc] initWithFrame:CGRectMake(100, 70+30*2, KScreenWidth - 100 * 2, 30)];
    _birthdayView.backgroundColor = [UIColor clearColor];
    [self.view addSubview:_birthdayView];
    
    // 创建一个用户邮箱控件
    _emailView = [[KeyValueView alloc] initWithFrame:CGRectMake(100, 70 + 30*3, KScreenWidth - 100 * 2, 30)];
    _emailView.backgroundColor = [UIColor clearColor];
    [self.view addSubview:_emailView];
    
    // 创建一个用户手机号控件
    _phoneView = [[KeyValueView alloc] initWithFrame:CGRectMake(100, 70 + 30*4, KScreenWidth - 100 * 2, 30)];
    _phoneView.backgroundColor = [UIColor clearColor];
    [self.view addSubview:_phoneView];
    
    
    // 添加一个按钮，用于发起网络请求
    UIButton *getUserInfoBtn = [[UIButton alloc] initWithFrame: CGRectMake(100, 70 + 30*5, KScreenWidth - 100 * 2, 30)];
    // 设置背景色，颜色和标题
    getUserInfoBtn.backgroundColor = [UIColor redColor];
    [getUserInfoBtn setTitle:@"Get Request" forState:UIControlStateNormal];
    [getUserInfoBtn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    // 给按钮添加事件
    [getUserInfoBtn addTarget:self action:@selector(loadWebRequest:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:getUserInfoBtn];
    
    
}

// 实现点击按钮后的请求方法
-(void)loadWebRequest {
    // 1. 创建url对象 服务器地址
    NSURL *url = [NSURL URLWithString:@"http://115.159.72.225:12580/WebServer/docPath"];
    
    // 2. 创建请求对象 默认请求方式为GET
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    // 3. 创建网络连接对象
    NSURLConnection *connection = [[NSURLConnection alloc] initWithRequest:request delegate:self];
    // 当 delegate参数为self时，我们的类应该要遵从该协议<NSURLConnectionDelegate>
    
    // 4. 发起连接 启动网络连接
    [connection start];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
