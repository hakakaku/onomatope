import { FC } from "react";
import { WordData } from "./result";

interface EditArticleProps {
	dataList: WordData[];
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (
		meaningId: number,
		exampleId?: number
	) => (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => void;
}

const EditArticle: FC<EditArticleProps> = ({
	dataList,
	handleSubmit,
	handleInputChange,
}) => {
	return (
		<>
			<form className="px-4 my-6" onSubmit={handleSubmit}>
				<div className="flex flex-row items-end text-fuchsia-800 dark:text-fuchsia-400 divide-x-2 divide-slate-400">
					<input
						className="w-full p-2 font-serif font-extrabold text-4xl bg-slate-50 dark:bg-slate-800 border border-violet-600 dark:border-cyan-500 hover:ring-1 focus:ring-1 focus:ring-violet-600 dark:focus:ring-cyan-500 hover:ring-violet-600 dark:hover:ring-cyan-500 rounded-lg"
						type="text"
						name="hiragana"
						onChange={handleInputChange(-1, -1)}
						value={dataList[0].hiragana}
						placeholder="ひらがな"
					/>
				</div>
				<div className="mt-6">
					{dataList.map((word, meaningId) => (
						<div key={meaningId} className="my-2">
							<textarea
								className="px-2 resize-y w-full py-2 font-sans font-bold text-base leading-relaxed text-justify text-cyan-900 dark:text-fuchsia-50  bg-slate-50 dark:bg-slate-800 border border-violet-600 dark:border-cyan-500  hover:ring-1 focus:ring-1 focus:ring-violet-600 dark:focus:ring-cyan-500 hover:ring-violet-600 dark:hover:ring-cyan-500 rounded-lg"
								name="meaning"
								onChange={handleInputChange(meaningId)}
								value={word.meaning}
								placeholder="意味を教えてください。"
							/>
							{word.examples.map((e, exampleId) => (
								<div key={exampleId} className="px-2">
									<textarea
										className="px-2 resize-y w-full py-2 font-serif font-light text-base leading-relaxed text-justify text-cyan-900 dark:text-fuchsia-50  bg-slate-50 dark:bg-slate-800 border border-violet-600 dark:border-cyan-500  hover:ring-1 focus:ring-1 focus:ring-violet-600 dark:focus:ring-cyan-500 hover:ring-violet-600 dark:hover:ring-cyan-500 rounded-lg"
										name="example"
										onChange={handleInputChange(meaningId, exampleId)}
										value={e}
										placeholder="例文を作ってください。"
									/>
								</div>
							))}
						</div>
					))}
				</div>
				<input
					className="p-2 flex mx-auto font-bold font-sans text-slate-800 hover:text-fuchsia-800 dark:text-cyan-400 dark:hover:text-cyan-600 round"
					type="submit"
					value="提出"
				/>
			</form>
		</>
	);
};

export default EditArticle;
