import Header, { Option } from "./header";
import { Spin } from "antd";
import Footer from "./footer";
import { useState, useEffect } from "react";
interface Props {
	headOptions: Option[];
	children: JSX.Element;
}

export default function Layout(props: Props) {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		ckeckIsSetRem();
	}, []);

	const ckeckIsSetRem = () => {
		if (window && window.__REM_SETTED__) {
			setLoading(false);
		} else {
			setTimeout(() => {
				ckeckIsSetRem();
			}, 500);
		}
	};

	const renderPage = () => {
		if (loading) {
			return <div className="w-screen h-screen"></div>;
		} else {
			return (
				<>
					<Header options={props.headOptions}></Header>
					{props.children}
					<Footer></Footer>
				</>
			);
		}
	};

	return (
		<>
			<div className="w-screen h-screen flex flex-col overflow-x-hidden overflow-y-scroll">
				<Spin
					className="m-auto"
					spinning={loading}
					tip="Loading"
					size="large"
					delay={100}
				>
					{renderPage()}
				</Spin>
			</div>
		</>
	);
}
