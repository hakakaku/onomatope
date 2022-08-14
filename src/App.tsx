import "./App.css";
import { FC, useEffect, useState } from "react";
import Header from "./components/header";
import { Outlet, useOutletContext } from "react-router-dom";

type ContextType = {
	isAuth: boolean;
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const App: FC = () => {
	// toggle light and dark theme.
	const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
	const handleChangeTheme = () => {
		isThemeDark
			? localStorage.setItem("theme", "light")
			: localStorage.setItem("theme", "dark");
		setIsThemeDark(!isThemeDark);
	};
	// update theme status from localStorage.
	useEffect(() => {
		const currentIsThemeDark = localStorage.getItem("theme") === "dark";
		setIsThemeDark(currentIsThemeDark);
	}, [setIsThemeDark]);

	// set authentication status
	const [isAuth, setIsAuth] = useState<boolean>(false);

	return (
		<>
			<div className={isThemeDark ? `dark` : ``}>
				<div className="select-none flex flex-col min-h-screen bg-white dark:bg-slate-600">
					<Header
						isThemeDark={isThemeDark}
						handleChangeTheme={handleChangeTheme}
					/>
					<main className="w-full max-w-xl mx-auto pt-4 pb-10 px-2 border-y-1 shadow-md bg-amber-50/50 dark:bg-slate-900 shadow-slate-800/90 dark:shadow-slate-800/90 border-Slate-300">
						<Outlet context={{ isAuth, setIsAuth }} />
					</main>
				</div>
			</div>
		</>
	);
};

export default App;

export function useIsAuth() {
	return useOutletContext<ContextType>();
}
