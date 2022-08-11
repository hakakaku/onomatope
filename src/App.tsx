import "./App.css";
import { FC, useState } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

const App: FC = () => {
	// toggle light and dark theme.
	const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
	const handleChangeTheme = () => {
		setIsThemeDark(!isThemeDark);
	};

	return (
		<>
			<div className={isThemeDark ? `dark` : ``}>
				<div className="select-none flex flex-col min-h-screen bg-cyan-25 dark:bg-slate-900">
					<Header
						isThemeDark={isThemeDark}
						handleChangeTheme={handleChangeTheme}
					/>
					<main className="w-full max-w-xl mx-auto">
						<Outlet />
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
