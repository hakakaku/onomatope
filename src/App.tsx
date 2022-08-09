import "./App.css";
import { FC, useState } from "react";
import { words, kanaToId } from "./services/words";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import ResultList from "./components/resultList";

const App: FC = () => {
	const [inputData, setInputData] = useState<string[]>([]);
	const datalist = words; // TODO: get data from server.
	const targetId = kanaToId(inputData.join(""));
	const reg = new RegExp(`^${targetId}[a-z]*$`, "i");
	const filtered = datalist.filter((d) => reg.test(d._id));

	// toggle light and dark theme.
	const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
	const handleChangeTheme = () => {
		setIsThemeDark(!isThemeDark);
	};

	return (
		<>
			<div className={isThemeDark ? `dark` : ``}>
				<div className="select-none flex flex-col min-h-screen bg-cyan-50 dark:bg-slate-900">
					<Header
						isThemeDark={isThemeDark}
						handleChangeTheme={handleChangeTheme}
					/>
					<main className="w-full max-w-xl mx-auto">
						<SearchBar
							inputData={inputData}
							setInputData={setInputData}
							filtered={filtered}
						/>
						<ResultList filtered={filtered} />
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
