import { FC } from "react";
import { Link } from "react-router-dom";
import { Word } from "./../services/words";

interface ResultListProps {
	filtered: Word[];
	searchStatus: "unsearched" | "searching" | "resolved";
}

const ResultList: FC<ResultListProps> = ({ filtered, searchStatus }) => {
	return (
		<>
			<section className="px-3">
				{filtered.length !== 0 ? (
					<ul className={`mt-4 divide-y`}>
						{filtered.map((word: Word) => (
							<Link key={word._id} to={word._id}>
								<li
									className={`px-2 py-2 my-2 hover:rounded-xl hover:ring-2 hover:ring-violet-600 dark:hover:ring-cyan-500 ${
										searchStatus === "resolved" &&
										`rounded-xl ring-2 ring-violet-600 dark:ring-cyan-500 animate-pulse-fast`
									}`}
								>
									<div className="mx-auto text-fuchsia-800 dark:text-fuchsia-400 font-sans font-semibold text-lg">
										{word.word}
									</div>
									<div className="max-h-16 mx-auto px-2 text-black dark:text-cyan-300 font-serif font-light text-sm text-left leading-relaxed line-clamp-2">
										<span>【例】</span>
										これも次第もうその始末学というののうちをしでしょた。じっと今にまごまご方は最もその学習なくだろだけにしていますをもお話しませませば、そうにも漬けないないだろで。
									</div>
								</li>
							</Link>
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
