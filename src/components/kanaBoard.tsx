import { FUN, isNAN, KEY } from "../utils/kanas";
import { FC } from "react";
import KanaKey from "./kanaKey";

interface KanaBoardProps {
	handleKeyPress: (e: React.MouseEvent) => void;
	kanas: KEY[][];
	activeFunctionKeyValue: FUN | null;
}

const KanaBoard: FC<KanaBoardProps> = ({
	handleKeyPress,
	kanas,
	activeFunctionKeyValue,
}: KanaBoardProps) => {
	return (
		<div className="absolute w-full top-12 pl-16 pr-4 py-2.5 border-t ">
			<div className="flex flex-col h-72 w-full justify-between ">
				{kanas.map((kanaRow, key) => (
					<div
						key={key}
						className="flex flex-row flex-nowrap w-full justify-between"
					>
						{kanaRow.map((kana) =>
							isNAN(kana) ? (
								<div key={kana} className="flex-none shrink-0 w-10">
									{``}
								</div> // set NUL button invisible.
							) : (
								<KanaKey
									key={kana}
									kana={kana}
									activeFunctionKeyValue={activeFunctionKeyValue}
									handleKeyPress={handleKeyPress}
								/>
							)
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default KanaBoard;
