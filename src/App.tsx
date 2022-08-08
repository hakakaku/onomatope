import "./App.css";
import { FC, useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";

const App: FC = () => {
	const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
	const handleChangeTheme = () => {
		setIsThemeDark(!isThemeDark);
	};

	return (
		<>
			<div className={isThemeDark ? `dark` : ``}>
				<div className="select-none flex flex-col min-h-screen bg-amber-50 dark:bg-slate-900">
					<Header
						isThemeDark={isThemeDark}
						handleChangeTheme={handleChangeTheme}
					/>
					<SearchBar />
				</div>
			</div>
		</>
	);
};

export default App;
