import thinking from "../images/thinking.png";
import idea from "../images/idea.png";
import search from "../images/search.png";
import { FC } from "react";

interface SearchBarIconProps {
	searchStatus: "unsearched" | "searching" | "resolved";
}

const SearchBarIcon: FC<SearchBarIconProps> = ({ searchStatus }) => {
	const imgUrl = {
		unsearched: search,
		searching: thinking,
		resolved: idea,
	};

	return (
		<div className="absolute top-0 left-0 pl-3 py-1 flex items-center pointer-events-none">
			<img
				src={
					searchStatus === "searching"
						? imgUrl.searching
						: searchStatus === "resolved"
						? imgUrl.resolved
						: imgUrl.unsearched
				}
				width="40"
				height="40"
				alt=""
				className={`flex-none ${
					searchStatus === "searching" ? ` animate-pulse-fast` : ``
				}`}
			/>
		</div>
	);
};

export default SearchBarIcon;
