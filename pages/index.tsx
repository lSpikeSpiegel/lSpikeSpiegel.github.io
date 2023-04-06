import Head from "next/head";
import Layout from "@/layout";
import { Right } from "@icon-park/react";
import { CDN_URL } from "@/config/global";
export default function Home() {
	const headOptions = [
		{ title: "首页", path: "/", isActive: true },
		{ title: "关于我们", path: "/about" },
		{ title: "解决方案", path: "/solution" }
	];

	const dataRenderList = [
		{ main: "3000万", unit: "人次", sub: "服务过的消费者" },
		{ main: "220万", unit: "小时", sub: "累计配送时长" },
		{ main: "154万", unit: "公里", sub: "累计运行里程" }
	];

	const newsRenderList = [
		{
			title: "5G生态“绽放杯”一等奖",
			desc: "近日，成都越凡创新科技有限公司创始人兼CEO黄山获“2022年度四川省三八红旗手”及“2021—2022年度成都市三八红旗手”双殊荣",
			to: "https://mp.weixin.qq.com/s/orwMuk76MzrDLWKPEOKmIg"
		},
		{
			title: "机器人助力京东开启楼宇“即时零售”新玩法",
			desc: "近日，在京东物流长期使用“享递”配送机器人进行末端配送的基础上，京东零售与越凡创新也进入了合作的蜜月期，京东零售旗下的京东便利店……",
			to: "https://mp.weixin.qq.com/s/ANHNI5QXyICJPkpcW1zFyA"
		},
		{
			title: "以梦为马，行远自迩",
			desc: "近日，成都越凡创新科技有限公司创始人兼CEO黄山获“2022年度四川省三八红旗手”及“2021—2022年度成都市三八红旗手”双殊荣……",
			to: "https://mp.weixin.qq.com/s/oAU2_dJ6HRVmmizd6GDs4Q"
		},
		{
			title: "“机器人先锋楼宇”——成华科技大厦",
			desc: "“享递”配送机器人可以将快递、外卖配送到成华科技大厦内办公人群指定的楼层甚至工位，大幅减少了用户下楼取快递、外卖的频次和时间……",
			to: "https://mp.weixin.qq.com/s/_EZ8R-kiWiNPIjA2cpjwfA"
		},
		{
			title: "“享递” 为世茂茂立方无接触配送保驾护航",
			desc: "作为世茂服务的战略合作伙伴，越凡为其旗下高端公寓项目世茂茂立方部署了“享递”配送机器人，开启了楼宇内的无接触配送服务。",
			to: "https://mp.weixin.qq.com/s/unwFydMnRF5daH7_ni5j5Q"
		},
		{
			title: "为「领地」构建起无接触配送的安全屏障",
			desc: "2022年5月1日，“享递”无接触配送服务站正式入驻成都市高新区领地环球金融中心，通过两个多月的稳定运行，在大幅降低疫情下接触……",
			to: "https://mp.weixin.qq.com/s/5PwvDU02kDnDzR0qIxV5fw"
		}
	];

	const toNews = (url: string) => {
		window.open(url);
	};

	return (
		<>
			<Head>
				<title>Eventec 越凡创新</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Layout headOptions={headOptions}>
				<div>
					<div className="w-full h-screen -mt-90 p-400 bg-primaryDark center">
						<img
							className="flex-1"
							src={CDN_URL + "img/index/home_main.png"}
							alt=""
						/>
					</div>
					<div className="h-200 flex-col center bg-secondaryDark text-white text-30">
						<p>涵盖算法、软件、硬件、结构层全链路机器人核心技术</p>
						<p>
							服务机器人行业内独树一帜的集设计、研发、生产、运营为一体的国家级高新技术企业
						</p>
					</div>
					<div className="h-screen bg-primaryWhite px-200 pt-100 flex gap-110">
						<div className="flex-1">
							<div className="w-150 h-15 bg-primary"></div>
							<p className="text-60">智慧化楼宇解决方案</p>
							<p className="text-60">享递机器人</p>
							<img
								className="w-346 my-30"
								src={CDN_URL + "img/index/logo_bot.png"}
								alt=""
							/>
							<p className="text-40">垂直100米递送</p>
						</div>
						<img
							className="flex-1"
							src={CDN_URL + "img/index/home_bot.png"}
							alt=""
						/>
					</div>
					<div className="h-screen bg-primaryWhite center">
						<video
							className="w-full h-full"
							controls
							src={CDN_URL + "video/xd_jd.mp4"}
							poster={CDN_URL + "img/index/video_cover.jpg"}
						></video>
					</div>
					<div className="h-350 bg-primaryWhite center gap-220">
						{dataRenderList.map(i => (
							<div
								key={i.main}
								className="text-primary text-22 center flex-col"
							>
								<div className="center">
									<div className="text-72">{i.main}</div>
									<div className="flex flex-col justify-between">
										<div className="text-40 -mt-20">+</div>
										<div>{i.unit}</div>
									</div>
								</div>
								<div>{i.sub}</div>
							</div>
						))}
					</div>
					<div className="h-screen bg-primaryWhite flex justify-center">
						<div className="center">
							<div className="h-400 w-20 -mt-200 bg-primary"></div>
							<img
								style={{ width: "55.6rem" }}
								src={CDN_URL + "img/index/home_bot_2.png"}
								alt=""
							/>
						</div>
						<div className="center flex-col">
							<div className="text-40 py-40 px-150">小巧机身，通过性能更好</div>
							<div className="w-400 h-5 bg-primary self-start"></div>
							<div className="py-60 px-100 text-30 text-primaryGray">
								<p className="my-30">过闸机，开门禁，各场景均可到达</p>
								<p className="my-30">最小通过宽度55cm，各种狭窄通道畅行无阻</p>
								<p className="my-30">机身小巧，不占电梯空间，可多机共乘</p>
							</div>
							<img
								style={{ width: "43.6rem" }}
								src={CDN_URL + "img/index/bot_size.png"}
								alt=""
							/>
						</div>
					</div>
					<div className="h-screen bg-primaryWhite flex justify-center">
						<div className="center flex-col">
							<div className="text-40 py-40 px-150">一舱多单，高效递达</div>
							<div className="w-400 h-5 bg-primary self-end"></div>
							<div className="py-60 px-100 text-30 text-primaryGray text-end">
								<p className="my-30">4种货舱组合，任务模式更加灵活</p>
								<p className="my-30">单次可完成多单任务</p>
							</div>
							<img
								className="-mt-30 w-261"
								src={CDN_URL + "img/index/bot_group.png"}
								alt=""
							/>
						</div>
						<div className="center">
							<img
								style={{ width: "55.6rem" }}
								src={CDN_URL + "img/index/bot_open.png"}
								alt=""
							/>
						</div>
					</div>
					<div className="h-screen bg-primaryWhite center flex-col">
						<div className="text-30 p-10">
							AIoT <span className="tracking-widest">智 慧 物 联</span>
						</div>
						<div className="w-70 h-3 bg-primary flex-shrink-0"></div>
						<img
							src={CDN_URL + "img/index/AIoT.png"}
							alt=""
						/>
					</div>
					<div className="h-screen bg-primaryWhite center flex-col">
						<div className="mt-100 text-30 p-10">
							<span className="tracking-widest">末 端 全 场 景 覆 盖</span>
						</div>
						<div className="w-70 h-3 bg-primary flex-shrink-0"></div>
						<div className="w-full flex-1 center gap-200">
							<img
								style={{ width: "62.2rem" }}
								src={CDN_URL + "img/index/AIoT_solution.jpg"}
								alt=""
							/>
							<img
								style={{ width: "62.2rem" }}
								src={CDN_URL + "img/index/bot_solution.jpg"}
								alt=""
							/>
						</div>
					</div>
					<div className="h-screen -mt-100 bg-primaryWhite center flex-col relative">
						<div className="self-start z-10 relative">
							<img
								style={{ width: "98.4rem" }}
								src={CDN_URL + "img/index/bot_eg.png"}
								alt=""
							/>
							<div className="absolute text-30 center w-240 h-80 bg-primary text-white -right-120 bottom-120">
								运行案例
							</div>
						</div>
						<div
							className="mt-120 right-0 bg-secondaryGray absolute flex flex-col justify-center items-end "
							style={{ width: "132rem", height: "50rem" }}
						>
							<div className="text-30 text-thirdDark px-100 flex flex-col gap-5">
								<p>享递产品投放市场以来，已签约各</p>
								<p>大座写字楼/社区/园区项目，在巨大</p>
								<p>的消费潜力和物流需求下，越凡创</p>
								<p>新正在将“享递”机器人部署覆盖</p>
								<p>到更多的城市。</p>
							</div>
						</div>
					</div>
					<div className="h-screen bg-primaryWhite center flex-col">
						<div className="text-30 p-10">
							<span className="tracking-widest">新 闻 资 讯</span>
						</div>
						<div className="w-70 h-3 bg-primary flex-shrink-0"></div>
						<div className="flex-1 flex center flex-wrap">
							{newsRenderList.map((i, idx) => (
								<div
									className="w-278 mx-100"
									key={i.title}
								>
									<img
										className="cursor-pointer w-278"
										onClick={() => toNews(i.to)}
										src={CDN_URL + `img/index/news_${idx}.png`}
										alt=""
									/>
									<div className="text-16 text-primary my-15 ellipsis">
										{i.title}
									</div>
									<div className="text-14 text-thirdGray ellipsis-3 mb-30">
										{i.desc}
									</div>
									<div
										onClick={() => toNews(i.to)}
										className="w-40 h-40 rounded-full bg-primary text-white center text-30 cursor-pointer"
									>
										<Right />
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="h-screen bg-primaryWhite center flex-col">
						<div className="text-30 p-10">
							<span className="tracking-widest">
								合 作 伙 伴<span className="text-20">（部分）</span>
							</span>
						</div>
						<div className="w-70 h-3 bg-primary flex-shrink-0"></div>
						<div className="flex-1 center">
							<img
								style={{ width: "123rem" }}
								src={CDN_URL + `img/index/partner.png`}
								alt=""
							/>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
