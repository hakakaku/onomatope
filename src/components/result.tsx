import { FC, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackLink from "./backLink";
import ResultArticle from "./resultArticle";
import { useGetWords } from "../services/useGetWords";

interface ResultProps {}

export interface WordData {
	id?: string;
	romaji: string;
	hiragana: string;
	meaning: string;
	examples: string[];
}

const Result: FC<ResultProps> = () => {
	const { romaji } = useParams() as { romaji: string };
	const navigate = useNavigate();

	// query data from firebase.
	const { dataList: getDataList, isDataLoading } = useGetWords(romaji);
	const [dataList, setDataList] = useState<WordData[]>();

	useEffect(() => {
		if (typeof getDataList !== "undefined") {
			if (!isDataLoading && getDataList?.length === 0) {
				navigate("/404", { replace: true });
			} else {
				setDataList(getDataList);
			}
		}
	}, [navigate, getDataList, isDataLoading]);

	return (
		<>
			<div className="flex flex-row items-center place-content-between">
				<BackLink />
				<Link
					to={`/edit/${romaji}`}
					className="py-1 font-sans font-bold text-lg text-cyan-700 dark:text-cyan-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-400 hover:underline hover:underline-offset-4 hover:decoration-wavy"
				>
					編集
				</Link>
			</div>
			{isDataLoading || !dataList ? (
				<div className="h-screen"></div>
			) : (
				<ResultArticle resultWordList={dataList} />
			)}
		</>
	);
};

export default Result;
