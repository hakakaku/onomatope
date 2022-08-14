import { collection, getDocs, query, where } from "firebase/firestore";
import { WordData } from "../components/result";
import { db } from "./firebase.config";
import { useState, useEffect } from "react";

export function useGetWords(romaji: string | undefined) {
	const [dataList, setDataList] = useState<WordData[]>();
	const [isDataLoading, setIsDataLoading] = useState<boolean>(true);

	useEffect(() => {
		let isSubscribed = true;
		console.log(romaji);
		if (typeof romaji === "undefined") return;

		const fetchData = async () => {
			setIsDataLoading(true);
			const wordsCollectionRef = collection(db, "words");
			const q = query(wordsCollectionRef, where("romaji", "==", romaji));
			const dataSnapShot = await getDocs(q);
			console.log("query");
			const newDataList = dataSnapShot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			})) as WordData[];
			if (isSubscribed) {
				setIsDataLoading(false);
				setDataList(newDataList);
			}
		};

		fetchData().catch(console.error);
		return () => {
			isSubscribed = false;
		};
	}, [romaji]);

	return { dataList, isDataLoading };
}
