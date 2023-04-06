import Head from "next/head";
import Layout from "@/layout";
import { Card } from "antd";
import { CDN_URL } from "@/config/global";

export default function Solution() {
	const headOptions = [
		{ title: "首页", path: "/" },
		{ title: "关于我们", path: "/about" },
		{ title: "解决方案", path: "/solution", isActive: true }
	];

	const imgList = [
		CDN_URL + "img/index/AIoT_solution.jpg",
		CDN_URL + "img/index/bot_solution.jpg",
		CDN_URL + "img/solution/manufacturing_center.jpg",
		CDN_URL + "img/solution/manufacturing_line.jpg"
	];

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
				<div className="bg-primaryWhite center flex-col">
					<div className="relative center">
						<img
							src={CDN_URL + `img/solution/factory.png`}
							alt=""
						/>
						<div className="absolute -bottom-95">
							<img
								style={{ width: "104rem" }}
								src={CDN_URL + `img/solution/solution_title_text.png`}
								alt=""
							/>
						</div>
					</div>
					<div className="p-150 gap-200 center flex-wrap">
						{imgList.map(i => (
							<img
								key={i}
								style={{ width: "62.2rem" }}
								src={i}
								alt=""
							/>
						))}
					</div>
				</div>
			</Layout>
		</>
	);
}
