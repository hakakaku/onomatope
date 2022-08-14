import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Search from "./components/search";
import About from "./components/about";
import Login from "./components/login";
import NotFound from "./components/notFound";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Result from "./components/result";
import Edit from "./components/edit";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Navigate to="search" replace />} />
					<Route path="search" element={<Search />} />
					<Route path="search/:romaji" element={<Result />} />
					<Route path="edit" element={<Edit />} />
					<Route path="edit/:romaji" element={<Edit />} />
					<Route path="about" element={<About />} />
					<Route path="login" element={<Login />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
