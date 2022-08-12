import { FC } from "react";
import { Word } from "./result";

interface ResultArticleProps {
	currentWord: Word;
	words: Word[];
}

const ResultArticle: FC<ResultArticleProps> = ({ currentWord, words }) => {
	const renderExample = (e: string) => {
		if (currentWord) {
			const decoratedOnomatope = (
				<span className="bg-cyan-100 font-bold dark:bg-slate-600">
					{currentWord.hiragana}
				</span>
			);

			const splittedExample = e.split(currentWord.hiragana);

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
		<article className="px-6 my-8">
			<div className="flex flex-row items-end text-fuchsia-800 dark:text-fuchsia-400 divide-x-2 divide-slate-400">
				<h1 className="pr-2 font-serif font-extrabold text-4xl">
					{currentWord.hiragana}
				</h1>
				<span className="pl-2 font-serif font-extrabold">
					{currentWord.romaji}
				</span>
			</div>
			<div className="mt-4 sm:mt-12">
				{words.map((word, i) => (
					<div key={i} className="prose prose-blue mt-6 space-y-4">
						<div className="font-sans font-bold text-base leading-relaxed text-justify text-cyan-900 dark:text-fuchsia-50">
							{`${String.fromCharCode(0x2460 + i)} ${word.meaning}`}
						</div>
						{word.examples.map((e, i) => (
							<blockquote
								key={i}
								className="font-serif font-light leading-relaxed text-justify dark:text-cyan-300"
							>
								{renderExample(e)}
							</blockquote>
						))}
					</div>
				))}
			</div>
		</article>
	);
};

export default ResultArticle;
