import { forwardRef } from "react";

interface SearchBarInputProps {
	inputData: string[];
	handleUnexpand: () => void;
	isExpanded: boolean;
}

const SearchBarInput = forwardRef<HTMLInputElement, SearchBarInputProps>(
	({ inputData, handleUnexpand, isExpanded }, inputRef) => {
		return (
			<input
				readOnly
				type="text"
				autoComplete="off"
				name="input"
				id="input"
				ref={inputRef}
				value={inputData.join("")}
				onKeyDown={(e) => {
					e.preventDefault(); //prevent keyboard input
				}}
				onBlur={handleUnexpand}
				placeholder={isExpanded ? `探そう！` : `クリックして検索`}
				className={`text-xl font-serif dark:text-slate-100 block w-full pl-16 pr-3 py-2.5 sm:text-lg border border-gray-300 dark:border-gray-300 rounded-lg shadow-xl dark:shadow-lg dark:shadow-slate-800 bg-cyan-50 dark:bg-slate-800  ${
					isExpanded && `ring-2 ring-indigo-500 pb-80`
				}`}
			/>
		);
	}
);

export default SearchBarInput;
