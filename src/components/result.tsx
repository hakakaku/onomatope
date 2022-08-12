import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import BackLink from "./backLink";

interface ResultProps {}

interface Word {
	id: string;
	romaji: string;
	katakana: string;
	meaning: string;
	examples: string[];
}

const Result: FC<ResultProps> = () => {
	const params = useParams();
	const [words, setWords] = useState<Word[]>([]);
	const [currentWord, setCurrentWord] = useState<Word>();

	useEffect(() => {
		// query data from firebase.
		const getWords = async () => {
			const wordsCollectionRef = collection(db, "words");
			const q = query(wordsCollectionRef, where("romaji", "==", params.romaji));
			const data = await getDocs(q);
			const currentWords = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			})) as Word[];
			setWords(currentWords);
			setCurrentWord(currentWords[0]);
		};
		getWords();
	}, [params.romaji]);

	const renderExample = (e: string) => {
		if (currentWord) {
			const decoratedOnomatope = (
				<span className="bg-cyan-100 font-bold dark:bg-slate-600">
					{currentWord?.katakana}
				</span>
			);

			const splittedExample = e.split(currentWord?.katakana);

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
		<>
			<div className="mt-4 px-2">
				<BackLink />
				<article className="px-6 my-8">
					<div className="flex flex-row items-end text-fuchsia-800 dark:text-fuchsia-400 divide-x-2 divide-slate-400">
						<h1 className="pr-2 font-serif font-extrabold text-4xl">
							{currentWord?.katakana}
						</h1>
						<span className="pl-2 font-serif font-extrabold">
							{currentWord?.romaji}
						</span>
					</div>
					<div className="mt-4 sm:mt-12">
						{words.map((word, i) => (
							<div key={word.id} className="prose prose-blue mt-6 space-y-4">
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
			</div>
		</>
	);
};

export default Result;
