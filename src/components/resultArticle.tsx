import { FC } from "react";
import { WordData } from "./result";

interface ResultArticleProps {
	resultWordList: WordData[];
}

const ResultArticle: FC<ResultArticleProps> = ({ resultWordList }) => {
	const renderExample = (e: string) => {
		if (resultWordList) {
			const decoratedOnomatope = (
				<span className="bg-cyan-100 font-bold dark:bg-slate-600">
					{resultWordList[0].hiragana}
				</span>
			);

			const splittedExample = e.split(resultWordList[0].hiragana);

			return splittedExample.map((s, index) =>
				index === 0 ? (
					<span key={index}>{s}</span>
				) : (
					<span key={index}>
						{decoratedOnomatope}
						{s}
					</span>
				)
			);
		}
	};
	return (
		<article className="px-4 my-6">
			<div className="p-2 flex flex-row items-end text-fuchsia-800 dark:text-fuchsia-400 divide-x-2 divide-slate-400">
				<h1 className="pr-2 font-serif font-extrabold text-4xl">
					{resultWordList[0].hiragana}
				</h1>
				<span className="pl-2 font-serif font-extrabold">
					{resultWordList[0].romaji}
				</span>
			</div>
			<div className="mt-2">
				{resultWordList.map((word, i) => (
					<div key={i} className="prose my-2">
						<div className="px-2 py-2 font-sans font-bold text-base leading-relaxed text-justify text-cyan-900 dark:text-fuchsia-50">
							{`${String.fromCharCode(0x2460 + i)} ${word.meaning}`}
						</div>
						{word.examples.map((e, i) => (
							<div key={i} className="px-2 py-2">
								<blockquote className="my-0 font-serif font-light leading-relaxed text-justify dark:text-cyan-300">
									{renderExample(e)}
								</blockquote>
							</div>
						))}
					</div>
				))}
			</div>
		</article>
	);
};

export default ResultArticle;
