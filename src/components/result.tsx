import { FC } from "react";
import { useParams } from "react-router-dom";
import BackLink from "./backLink";

interface ResultProps {}

const Result: FC<ResultProps> = () => {
	let params = useParams();

	return (
		<>
			<div className="mt-4 px-2">
				<BackLink />
				<article className="px-8 my-12">
					<h1 className="font-serif font-bold text-4xl text-fuchsia-800 dark:text-fuchsia-400">
						result {params.wordId}
					</h1>
					<div className="mt-8 space-y-4 dark:text-cyan-300">
						<p className="font-serif font-light leading-relaxed text-justify">
							ねずみはセロのおじぎ火事たちを床を行っ小太鼓なくた。
						</p>
					</div>
				</article>
			</div>
		</>
	);
};

export default Result;
