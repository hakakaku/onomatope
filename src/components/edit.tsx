import { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { WordData } from "./result";
import BackLink from "./backLink";
import EditArticle from "./editArticle";
import { db } from "../services/firebase.config";
import { useGetWords } from "../services/useGetWords";

interface EditProps {}

const Edit: FC<EditProps> = () => {
	const { romaji } = useParams() as { romaji: string | undefined };
	const navigate = useNavigate();

	// query data from firebase.
	const { dataList: getDataList, isDataLoading } = useGetWords(romaji);

	const [dataList, setDataList] = useState<WordData[]>();

	useEffect(() => {
		if (typeof getDataList !== "undefined") {
			// if data don't exist, navigate to 404.
			if (!isDataLoading && getDataList?.length === 0) {
				navigate("/404", { replace: true });
			} else {
				// if data exist, set data state.
				setDataList(getDataList);
			}
		} else {
			// if params is undefined, set data to template.
			setDataList([
				{
					romaji: "",
					hiragana: "",
					meaning: "",
					examples: ["", ""],
				},
			]);
		}
	}, [romaji, navigate, getDataList, isDataLoading]);

	// handle form change and submit.

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// save data of datalist to firebase.
		const setWords = (dataList: WordData[]) => {
			dataList.map(async (data) => {
				if (typeof data.id !== "undefined") {
					// if id exists, set data to firebase doc.
					const wordsRef = doc(db, "words", data.id);
					await setDoc(wordsRef, data);
				} else {
					// if id doesn't exist, add data to new firebase doc.
					const wordsRef = collection(db, "words");
					await addDoc(wordsRef, data);
				}
			});
		};

		if (dataList) {
			setWords(dataList);
			navigate(`/search/${dataList[0].romaji}`, { replace: true });
		}
	};

	const handleInputChange =
		(meaningId: number, exampleId: number = -1) =>
		(
			e:
				| React.ChangeEvent<HTMLInputElement>
				| React.ChangeEvent<HTMLTextAreaElement>
		) => {
			if (dataList) {
				let newInputDataList = [...dataList];
				switch (e.target.name) {
					case "hiragana":
						newInputDataList = newInputDataList.map((data) => {
							return { ...data, hiragana: e.target.value };
						});
						setDataList(newInputDataList);
						break;
					case "meaning":
						newInputDataList = newInputDataList.map((data, index) => {
							if (index === meaningId)
								return { ...data, meaning: e.target.value };
							else {
								return { ...data };
							}
						});
						setDataList(newInputDataList);
						break;
					case "example":
						newInputDataList = newInputDataList.map((data, index) => {
							if (index === meaningId) {
								let newExamples = [...data.examples];
								newExamples.forEach((example, i) => {
									if (i === exampleId) newExamples[exampleId] = e.target.value;
								});
								return { ...data, examples: newExamples };
							} else {
								return { ...data };
							}
						});
						setDataList(newInputDataList);
						break;
					default:
						break;
				}
			}
		};

	return (
		<>
			<div className="flex flex-row items-center place-content-between">
				<BackLink />
			</div>
			{dataList ? (
				<EditArticle
					dataList={dataList}
					handleSubmit={handleSubmit}
					handleInputChange={handleInputChange}
				/>
			) : (
				<div className="h-screen"></div>
			)}
		</>
	);
};

export default Edit;
