import { FC, useEffect } from "react";
import { useIsAuth } from "../App";
import { auth, provider } from "../firebase.config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import BackLink from "./backLink";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
	// navigate to homepage when user logged in.
	const navigate = useNavigate();

	// set user authentication method.
	const { isAuth, setIsAuth } = useIsAuth();
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			localStorage.setItem("isAuth", JSON.stringify(true));
			setIsAuth(true);
			navigate("/");
		});
	};
	const signUserOut = () => {
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			navigate("/login");
		});
	};

	// Use localStorage to update login status.
	useEffect(() => {
		const currentIsAuth = JSON.parse(localStorage.getItem("isAuth") || '""');
		setIsAuth(currentIsAuth);
	}, [setIsAuth]);

	return (
		<>
			<BackLink />
			<div className="flex flex-col my-10 items-center justify-center">
				{!isAuth ? (
					""
				) : (
					<div className="mb-10 font-sans text-lg font-bold text-fuchsia-900 dark:text-cyan-400">
						{`こんにちは、${`Current User`}`}
					</div>
				)}
				{!isAuth ? (
					<button
						className="font-sans font-bold bg-slate-800 dark:bg-slate-900 dark:hover:bg-cyan-900/50 hover:bg-transparen hover:text-fuchsia-800 text-cyan-50 dark:text-cyan-400 dark:hover:text-fuchsia-500 px-4 py-2 ring-2 ring-slate-800 dark:ring-fuchsia-500 rounded-full"
						onClick={signInWithGoogle}
					>
						Googleのアカウントで続ける
					</button>
				) : (
					<button
						className="font-sans font-bold bg-slate-800 dark:bg-slate-900 dark:hover:bg-cyan-900/50 hover:bg-transparen hover:text-fuchsia-800 text-cyan-50 dark:text-cyan-400 dark:hover:text-fuchsia-500 px-4 py-2 ring-2 ring-slate-800 dark:ring-fuchsia-500 rounded-full"
						onClick={signUserOut}
					>
						ログアウト
					</button>
				)}
			</div>
		</>
	);
};

export default Login;
