import { FC } from "react";
import { Link } from "react-router-dom";

interface BackLinkProps {}

const BackLink: FC<BackLinkProps> = () => {
	return (
		<Link
			to="/"
			className="py-2 font-sans font-bold text-lg text-cyan-600 hover:text-fuchsia-700 hover:underline hover:underline-offset-4 hover:decoration-wavy"
		>
			←　検索に戻る
		</Link>
	);
};

export default BackLink;
