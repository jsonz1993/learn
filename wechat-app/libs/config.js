const url = 'http://dev.herely.us/wechat/activity/201701gather/img/';

const corConfig = {
    c1: {
		img: url + 'game1.png',
		name: '模拟贸易岛',
		info: '岛里有五个国家，而你们将会代表这五个不同的国家模拟一场国与国之间的“贸易”，哪个国家最多金，则哪个国家即是赢家。'
	},
	c2: {
		img: url + 'game2.png',
		name: '没有盗版书的荒岛',
		info: '荒岛图书馆是分布于全亚洲700多家咖啡馆、青旅等创新空间的社区图书馆。一起“撕掉盗版书！吃错别字饼！”，来荒岛码头，有吃有玩，向错别字和盗版书宣战。'
	},
	c3: {
		img: url + 'game3.png',
		name: '一分钟实验室',
		info: '一分钟实验室。在码头里，做一个潜行陌生人，疯狂一把：五分钟的暗中观察和记录，是你与陌生人连结的第一步。'
	},
	c4: {
		img: url + 'game4.png',
		name: '脑洞大开技能岛',
		info: '和你一起“空手套技能”，玩玩“瓶盖夺标对抗赛”，还有专门拆散（误）情侣/闺（gay）蜜的超强合作版“我来给你戴戒指”，我们陪你一起在2017年完成从0到1的转变。'
	},
	c5: {
		img: url + 'game5.png',
		name: '故事码头',
		info: '用故事作为共创语言，会带来渔夫故事博物馆、海盗共创奇葩故事故事是冰冷的，需要你来才会变成温暖的。'
	},
	c6: {
		img: url + 'game6.png',
		name: '小行星停靠的码头，许个愿吧！',
		info: '许个愿吧®码头上住着一个小巨人，但只有他一个人好无聊，他想要摘下天上的小行星，然后把小行星扔到愿望篮子里，你会来和他一起玩吗？'
	},
	c7: {
		img: url + 'game7.png',
		name: '寻找“光源捕手”，一起点亮非洲',
		info: '来这里，体验花式“发光”，还可以在现场成为“光源买手”，以你的名义捐赠一盏灯跟着EASIN去点亮原始的非洲部落！'
	},
	c8: {
		img: url + 'game8.png',
		name: '在码头搞事儿才是正经事',
		info: '没人说你只能规矩地活着，一个人闹事叫无理取闹，一群人搞事就叫一起做爱做的事，和我们一起在当天搞一些“格格不入”的事儿：美少女战士手势行动、污中生友春节礼品地下工厂...'
	},
	c9: {
		img: url + 'game9.png',
		name: '玩心不改玩遍全球',
		info: '一分钟挑战，让你瞬间跨越半个地球挑战趣味任务、晋升全球玩客。在一分钟内完成任务，即可获得Wellmet准备的旅行奖品一份。'
	},
	c10: {
		img: url + 'game10.png',
		name: '共创学习星球',
		info: '将会在不同的互动任务中体验共创能力的运用。你还可以参与我们的共创能力测试，了解你是哪种超能力共创者，并获得专属的能力者证明。'
	},
	c11: {
		img: url + 'game11.png',
		name: '谜宫游乐场',
		info: '将现场打造成一个巨大的“谜宫游乐场”，机关重重，惊喜满满。在场的人都掌握着解决这场危机的“零件”，但必须所有人协力才能解决。'
	}
};

let userList = [
    {
        img: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=201715',
        name: '寿司寿司寿司寿司寿司寿司寿司寿司寿司寿司寿司寿司寿司寿司寿司'
    }
];

for (let i = 0; i < 100; i++) {
    userList.push({
        img: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=201715',
        name: '寿司'
    })
};

export {
    corConfig,
    userList,
	url
}