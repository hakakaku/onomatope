import { FC } from "react";
import { Word } from "./../services/words";

interface ResultListProps {
	filtered: Word[];
	searchStatus: "unsearched" | "searching" | "resolved";
}

const ResultList: FC<ResultListProps> = ({ filtered, searchStatus }) => {
	return (
		<>
			<section className="px-3 mt-5">
				{filtered.length !== 0 ? (
					<ul
						className={`mt-3 divide-y ${
							searchStatus === "resolved" &&
							`rounded-xl ring-2 ring-violet-600 dark:ring-cyan-500 animate-pulse-fast`
						}`}
					>
						{filtered.map((word: Word) => (
							<li key={word._id} className="p-2">
								<div className="mx-auto text-fuchsia-800 dark:text-fuchsia-400 font-sans font-semibold text-lg">
									{word.word}
								</div>
								<div className="max-h-16 mx-auto px-2 text-black dark:text-cyan-300 font-serif font-light text-sm text-left line-clamp-2">
									<span>【例】</span>
									これも次第もうその始末学というののうちをしでしょた。じっと今にまごまご方は最もその学習なくだろだけにしていますをもお話しませませば、そうにも漬けないないだろで。
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className="mt-3 text-center px-8">
						<h1 className="font-sans font-extrabold text-4xl py-5">404</h1>
						<p className="font-sans text-xl">
							お探しのオノマトペは見つかりませんでした。
						</p>
					</div>
				)}
			</section>
		</>
	);
};

export default ResultList;
