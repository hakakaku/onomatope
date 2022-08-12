import { FC, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import BackLink from "./backLink";
import ResultArticle from "./resultArticle";

interface ResultProps {}

export interface Word {
	id: string;
	romaji: string;
	hiragana: string;
	meaning: string;
	examples: string[];
}

const Result: FC<ResultProps> = () => {
	const { romaji } = useParams();
	const navigate = useNavigate();
	const [words, setWords] = useState<Word[]>([]);
	const [currentWord, setCurrentWord] = useState<Word>();

	useEffect(() => {
		// query data from firebase.
		const getWords = async () => {
			const wordsCollectionRef = collection(db, "words");
			const q = query(wordsCollectionRef, where("romaji", "==", romaji));
			const data = await getDocs(q);
			const currentWords = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			})) as Word[];
			if (currentWords.length > 0) {
				setWords(currentWords);
				setCurrentWord(currentWords[0]);
			} else {
				navigate("/404", { replace: true });
			}
		};
		getWords();
	}, [romaji, navigate]);

	return (
		<>
			<div className="flex flex-row items-center place-content-between">
				<BackLink />
				{currentWord && (
					<Link
						to={`/edit/${romaji}`}
						className="py-1 font-sans font-bold text-lg text-cyan-700 dark:text-cyan-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-400 hover:underline hover:underline-offset-4 hover:decoration-wavy"
					>
						編集
					</Link>
				)}
			</div>
			{currentWord ? (
				<ResultArticle currentWord={currentWord} words={words} />
			) : (
				<div className="h-screen"></div>
			)}
		</>
	);
};

export default Result;
