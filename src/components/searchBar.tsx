import { KEY, FUN, CHAR, isFUN, isDEL, isCHAR } from "../utils/kanas";
import KanaBoard from "./kanaBoard";
import SearchBarIcon from "./searchBarIcon";
import SearchBarInput from "./searchBarInput";
import { kanas } from "../utils/kanas";
import { Word } from "../services/words";
import { useState, useEffect, useRef, FC } from "react";

interface SearchBarProps {
	inputData: string[];
	filtered: Word[];
	setInputData: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchBar: FC<SearchBarProps> = ({
	inputData,
	setInputData,
	filtered,
}) => {
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

	// Handle kana keyboard expanded state toggle.
	const [isExpanded, setIsExpanded] = useState(false);

	function handleExpand() {
		setIsExpanded(true);
	}

	function handleUnexpand() {
		setIsExpanded(false);
	}

	// Update focus status.
	const inputRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		function focusInput() {
			inputRef.current?.focus();
		}
		function blurInput() {
			inputRef.current?.blur();
		}

		function preventDefaultFocusAndBlur() {
			isExpanded ? focusInput() : blurInput();
		}
		preventDefaultFocusAndBlur();
	}, [isExpanded]);

	// Handle kana keyboard input events.

	const [activeFunctionKey, setActiveFunctionKey] = useState<FUN | null>(null);

	function handleKeyPress(e: React.MouseEvent) {
		function inputPush(key: CHAR) {
			if (activeFunctionKey) {
				switch (activeFunctionKey) {
					case 0x5c0f: //LowerCase
						setInputData([...inputData, String.fromCodePoint(key - 1)]);
						break;

					case 0x309c: //DevoiceCase
						setInputData([...inputData, String.fromCodePoint(key + 2)]);
						break;

					case 0x309b: //VoiceCase
						setInputData([...inputData, String.fromCodePoint(key + 1)]);
						break;
				}
			} else setInputData([...inputData, String.fromCodePoint(key)]);
		}

		function inputPop() {
			let currentData = [...inputData];
			currentData.pop();
			setInputData(currentData);
		}
		const key: KEY | undefined = kanas
			.find((kanaRow) =>
				kanaRow.find((kana) => `${kana}` === e.currentTarget.id)
			)
			?.find((kana) => `${kana}` === e.currentTarget.id);
		if (key) {
			if (isFUN(key)) {
				if (activeFunctionKey === key) setActiveFunctionKey(null);
				else {
					setActiveFunctionKey(key);
				}
			} else if (isDEL(key)) {
				inputPop();
				setActiveFunctionKey(null);
			} else if (isCHAR(key)) {
				inputPush(key);
				setActiveFunctionKey(null);
			}
		}
	}

	// filter valid kana buttons

	const validKanaButtons: string[] = filtered.map(
		(f) => f.word.split("")[inputData.length]
	);

	return (
		<section className="flex mt-5 px-3 justify-center font-serif">
			<div className="flex flex-1">
				<div
					className="relative w-full"
					onMouseDown={(e) => {
						e.preventDefault(); //prevent from causing default blur event
						handleExpand();
					}}
				>
					<SearchBarIcon searchStatus={searchStatus} />
					{isExpanded && (
						<KanaBoard
							handleKeyPress={handleKeyPress}
							kanas={kanas}
							activeFunctionKeyValue={activeFunctionKey}
							validKanaButtons={validKanaButtons}
						/>
					)}
					<SearchBarInput
						ref={inputRef}
						inputData={inputData}
						handleUnexpand={handleUnexpand}
						isExpanded={isExpanded}
					/>
				</div>
			</div>
		</section>
	);
};

export default SearchBar;
