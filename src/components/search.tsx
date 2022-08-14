import { FC, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import ResultList from "./resultList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase.config";

interface SearchPops {}

export interface Word {
	id: string;
	romaji: string;
	hiragana: string;
	meaning: string;
	examples: string[];
}

const Search: FC<SearchPops> = () => {
	const [wordlist, setWordList] = useState<Word[]>([]);

	useEffect(() => {
		// query data from firebase.
		const getWords = async () => {
			const wordsCollectionRef = collection(db, "words");
			const data = await getDocs(wordsCollectionRef);
			const words = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			})) as Word[];
			setWordList(words);
		};
		getWords();
	}, []);

	// filter datalist with input.
	const [inputData, setInputData] = useState<string[]>([]);
	const target = inputData.join("");
	const reg = new RegExp(`^${target}[\u3040-\u30FF]*$`, "i");
	const filtered = wordlist?.filter((w) => reg.test(w.hiragana)) as Word[];

	const [searchStatus, setSearchStatus] = useState<
		"unsearched" | "searching" | "resolved"
	>("resolved");

	useEffect(() => {
		if (inputData.length === 0) setSearchStatus("unsearched");
		else if (filtered.length === 1) setSearchStatus("resolved");
		else {
			setSearchStatus("searching");
		}
	}, [inputData.length, filtered.length]);

	return (
		<>
			<SearchBar
				inputData={inputData}
				setInputData={setInputData}
				filtered={filtered}
				searchStatus={searchStatus}
			/>
			<ResultList filtered={filtered} searchStatus={searchStatus} />
		</>
	);
};

export default Search;
