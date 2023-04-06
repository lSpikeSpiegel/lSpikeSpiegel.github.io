import { Mail, Local } from "@icon-park/react";

export default function Footer() {
	return (
		<div className="h-screen bg-primaryWhite center flex-col">
			<div className="text-30 p-10">
				<span className="tracking-widest">联 系 我 们</span>
			</div>
			<div className="w-70 h-3 bg-primary flex-shrink-0"></div>
			<div className="h-300 m-100 center gap-300">
				<div className="center h-100 gap-80">
					<div className="center flex-col">
						<div className="text-40">028-6472 6525</div>
						<div className="text-20 text-thirdGray">工作日9:00-18:30</div>
					</div>
					<div className="w-2 bg-black self-stretch"></div>
					<div className="self-stretch flex flex-col justify-between">
						<div className="text-20 text-thirdDark flex items-center gap-20">
							<Mail />
							business@eventec.cn
						</div>
						<div className="text-20 text-thirdDark flex items-center gap-20">
							<Local />
							成都高新区合作路89号25栋603号
						</div>
					</div>
				</div>
				<div className="center">
					<div className="w-200 group text-16 text-thirdDark center flex-col relative -mr-55">
						<img
							className="w-200 h-205 absolute -top-215 hidden group-hover:block "
							src="/images/weixin_public_account.png"
							alt=""
						/>
						<img
							className="w-78"
							src="/images/weixin.png"
							alt=""
						/>
						<div className="mt-20"> 微信公众号</div>
					</div>
					<div className="w-200 group text-16 text-thirdDark center flex-col relative">
						<img
							className="w-200 h-205 absolute -top-215 hidden group-hover:block"
							src="/images/weixin_consultation.png"
							alt=""
						/>
						<img
							className="w-78"
							src="/images/weixin.png"
							alt=""
						/>
						<div className="mt-20"> 微信咨询</div>
					</div>
				</div>
			</div>
			<img
				src="images/footer.png"
				alt=""
			/>
		</div>
	);
}
