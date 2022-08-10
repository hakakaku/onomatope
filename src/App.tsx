import "./App.css";
import { FC, useState, useEffect } from "react";
import { words } from "./services/words";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import ResultList from "./components/resultList";

const App: FC = () => {
	// filter datalist with input.
	const [inputData, setInputData] = useState<string[]>([]);
	const datalist = words; // TODO: get data from server.
	const target = inputData.join("");
	const reg = new RegExp(`^${target}[\u3040-\u30FF]*$`, "i");
	const filtered = datalist.filter((d) => reg.test(d.word));

	// toggle light and dark theme.
	const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
	const handleChangeTheme = () => {
		setIsThemeDark(!isThemeDark);
	};

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
			<div className={isThemeDark ? `dark` : ``}>
				<div className="select-none flex flex-col min-h-screen bg-cyan-25 dark:bg-slate-900">
					<Header
						isThemeDark={isThemeDark}
						handleChangeTheme={handleChangeTheme}
					/>
					<main className="w-full max-w-xl mx-auto">
						<SearchBar
							inputData={inputData}
							setInputData={setInputData}
							filtered={filtered}
							searchStatus={searchStatus}
						/>
						<ResultList filtered={filtered} searchStatus={searchStatus} />
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
