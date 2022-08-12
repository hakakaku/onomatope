import { FC } from "react";
import BackLink from "./backLink";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
	return (
		<>
			<div className="flex flex-row items-center place-content-between">
				<BackLink />
			</div>
			<div className="mt-3 text-center px-8">
				<h1 className="font-sans font-extrabold text-4xl py-5">404</h1>
				<p className="font-sans text-xl">
					お探しのページは見つかりませんでした。
				</p>
			</div>
		</>
	);
};

export default NotFound;
