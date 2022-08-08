import { FC } from "react";
import {
	KEY,
	FUN,
	isCHAR,
	isFUN,
	isDEL,
	isHasVoiceCase,
	isHasLowerCase,
	isHasDevoiceCase,
} from "../utils/kanas";

interface KanaKeyProps {
	kana: KEY;
	activeFunctionKeyValue: FUN | null;
	handleKeyPress: (e: React.MouseEvent) => void;
}

const KanaKey: FC<KanaKeyProps> = ({
	kana,
	activeFunctionKeyValue,
	handleKeyPress,
}) => {
	const renderButtonStyles = (kana: KEY): string => {
		enum ButtonStyle {
			CHAR = `bg-indigo-500 hover:bg-indigo-400 hover:ring-indigo-300`,
			FUN = `bg-yellow-500 hover:bg-yellow-400  hover:ring-yellow-300`,
			DEL = `bg-red-600 hover:bg-red-400 hover:ring-red-300`,
			FUN_active = `bg-yellow-700 hover:bg-yellow-700  hover:ring-yellow-700`,
		}

		const displayStyle = `flex-none shrink-0 w-10 rounded-md`;
		const textStyle = `text-lg text-center font-sans text-white`;
		const hoverStyle = `hover:ring-1 hover:ring-offset-1 hover:outline-none`;
		const disabledStyle = `disabled:bg-gray-200 disabled:text-gray-500`;
		let colorStyle = "";

		if (activeFunctionKeyValue === kana) {
			colorStyle = ButtonStyle.FUN_active;
		} else if (isCHAR(kana)) {
			colorStyle = ButtonStyle.CHAR;
		} else if (isFUN(kana)) {
			colorStyle = ButtonStyle.FUN;
		} else if (isDEL(kana)) {
			colorStyle = ButtonStyle.DEL;
		}

		return (
			displayStyle +
			` ` +
			textStyle +
			` ` +
			colorStyle +
			` ` +
			hoverStyle +
			` ` +
			disabledStyle
		);
	};

	const isButtonDisabled = (kana: KEY): boolean => {
		if (isCHAR(kana)) {
			if (activeFunctionKeyValue === 0x5c0f && !isHasLowerCase(kana)) {
				return true;
			}
			if (activeFunctionKeyValue === 0x309c && !isHasDevoiceCase(kana)) {
				return true;
			}
			if (activeFunctionKeyValue === 0x309b && !isHasVoiceCase(kana)) {
				return true;
			}
			return false;
		}
		return false;
	};

	return (
		<button
			className={renderButtonStyles(kana)}
			id={`${kana}`}
			onClick={handleKeyPress}
			disabled={isButtonDisabled(kana)}
		>
			{String.fromCodePoint(kana)}
		</button>
	);
};

export default KanaKey;
