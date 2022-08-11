import { FC, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import ResultList from "./resultList";
import Result from "./result";
import { words } from "../services/words";

interface MainProps {}

const Main: FC<MainProps> = () => {
	// filter datalist with input.
	const [inputData, setInputData] = useState<string[]>([]);
	const datalist = words; // TODO: get data from server.
	const target = inputData.join("");
	const reg = new RegExp(`^${target}[\u3040-\u30FF]*$`, "i");
	const filtered = datalist.filter((d) => reg.test(d.word));

	const [searchStatus, setSearchStatus] = useState<
		"unsearched" | "searching" | "resolved"
	>("resolved");

	useEffect(() => {
		if (inputData.length === 0) setSearchStatus("unsearched");
		else if (filtered.length === 1) setSearchStatus("resolved");
		else {
			setSearchStatus("searching");
		}
	}, [inputData.length, filtered.length]);

	return (
		<>
			<SearchBar
				inputData={inputData}
				setInputData={setInputData}
				filtered={filtered}
				searchStatus={searchStatus}
			/>
			<ResultList filtered={filtered} searchStatus={searchStatus} />
		</>
	);
};

export default Main;
