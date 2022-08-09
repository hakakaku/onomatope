import * as wanakana from "wanakana";

export interface Word {
	_id: string;
	word: string;
}
export const words: Word[] = [
	{
		_id: "akuseku",
		word: "あくせく",
	},
	{
		_id: "atsuatsu",
		word: "あつあつ",
	},
	{
		_id: "assari",
		word: "あっさり",
	},
	{
		_id: "ikiiki",
		word: "いきいき",
	},
	{
		_id: "iraira",
		word: "いらいら",
	},
	{
		_id: "ukiuki",
		word: "うきうき",
	},
	{
		_id: "ukkari",
		word: "うっかり",
	},
	{
		_id: "utouto",
		word: "うとうと",
	},
	{
		_id: "unzari",
		word: "うんざり",
	},
	{
		_id: "en'en",
		word: "えんえん",
	},
	{
		_id: "gatanto",
		word: "がたんと",
	},
	{
		_id: "gatsugatsu",
		word: "がつがつ",
	},
	{
		_id: "gakkari",
		word: "がっかり",
	},
	{
		_id: "gakkuri",
		word: "がっくり",
	},
	{
		_id: "katto",
		word: "かっと",
	},
	{
		_id: "gabatto",
		word: "がばっと",
	},
	{
		_id: "gabutto",
		word: "がぶっと",
	},
	{
		_id: "garagara",
		word: "がらがら",
	},
	{
		_id: "karikari",
		word: "かりかり",
	},
	{
		_id: "garigari",
		word: "がりがり",
	},
	{
		_id: "kankan",
		word: "かんかん",
	},
	{
		_id: "gangan",
		word: "がんがん",
	},
	{
		_id: "kichinto",
		word: "きちんと",
	},
	{
		_id: "kikkari",
		word: "きっかり",
	},
	{
		_id: "gisshiri",
		word: "ぎっしり",
	},
	{
		_id: "kitchiri",
		word: "きっちり",
	},
	{
		_id: "kippari",
		word: "きっぱり",
	},
	{
		_id: "kyaakyaa",
		word: "きゃあきゃあ",
	},
	{
		_id: "gyutto",
		word: "ぎゅっと",
	},
	{
		_id: "kyorokyoro",
		word: "きょろきょろ",
	},
	{
		_id: "kirakira",
		word: "きらきら",
	},
	{
		_id: "kirikiri",
		word: "きりきり",
	},
	{
		_id: "girigiri",
		word: "ぎりぎり",
	},
	{
		_id: "guigui",
		word: "ぐいぐい",
	},
	{
		_id: "guitto",
		word: "ぐいっと",
	},
	{
		_id: "guuguu",
		word: "ぐうぐう",
	},
	{
		_id: "gusatto",
		word: "ぐさっと",
	},
	{
		_id: "kusukusu",
		word: "くすくす",
	},
	{
		_id: "kutakuta",
		word: "くたくた",
	},
	{
		_id: "kuchakucha",
		word: "くちゃくちゃ",
	},
	{
		_id: "kukkiri",
		word: "くっきり",
	},
	{
		_id: "gussuri",
		word: "ぐっすり",
	},
	{
		_id: "guttari",
		word: "ぐったり",
	},
	{
		_id: "kudokudo",
		word: "くどくど",
	},
	{
		_id: "gunyagunya",
		word: "ぐにゃぐにゃ",
	},
	{
		_id: "gunyarito",
		word: "ぐにゃりと",
	},
	{
		_id: "kunekune",
		word: "くねくね",
	},
	{
		_id: "kurakura",
		word: "くらくら",
	},
	{
		_id: "kurukuru",
		word: "くるくる",
	},
	{
		_id: "guruguru",
		word: "ぐるぐる",
	},
	{
		_id: "gurutto",
		word: "ぐるっと",
	},
	{
		_id: "gessori",
		word: "げっそり",
	},
	{
		_id: "geragera",
		word: "げらげら",
	},
	{
		_id: "gokugoku",
		word: "ごくごく",
	},
	{
		_id: "goshigoshi",
		word: "ごしごし",
	},
	{
		_id: "gochagocha",
		word: "ごちゃごちゃ",
	},
	{
		_id: "kotsukotsu",
		word: "こつこつ",
	},
	{
		_id: "kossori",
		word: "こっそり",
	},
	{
		_id: "kotsunto",
		word: "こつんと",
	},
	{
		_id: "gotsunto",
		word: "ごつんと",
	},
	{
		_id: "gohogoho",
		word: "ごほごほ",
	},
	{
		_id: "korokoro",
		word: "ころころ",
	},
	{
		_id: "gorogoro",
		word: "ごろごろ",
	},
	{
		_id: "kongari",
		word: "こんがり",
	},
	{
		_id: "konkon",
		word: "こんこん",
	},
	{
		_id: "zaazaa",
		word: "ざあざあ",
	},
	{
		_id: "zakkuri",
		word: "ざっくり",
	},
	{
		_id: "sassato",
		word: "さっさと",
	},
	{
		_id: "zatto",
		word: "ざっと",
	},
	{
		_id: "sappari",
		word: "さっぱり",
	},
	{
		_id: "sarasara",
		word: "さらさら",
	},
	{
		_id: "zarazara",
		word: "ざらざら",
	},
	{
		_id: "shikushiku",
		word: "しくしく",
	},
	{
		_id: "jabujabu",
		word: "じゃぶじゃぶ",
	},
	{
		_id: "zukizuki",
		word: "ずきずき",
	},
	{
		_id: "soutto",
		word: "ソーっと",
	},
	{
		_id: "sotto",
		word: "そっと",
	},
	{
		_id: "chikuchiku",
		word: "ちくちく",
	},
	{
		_id: "chiratto",
		word: "ちらっと",
	},
	{
		_id: "dosatto",
		word: "どさっと",
	},
	{
		_id: "tobotobo",
		word: "とぼとぼ",
	},
	{
		_id: "dorodoro",
		word: "どろどろ",
	},
	{
		_id: "donto",
		word: "どんと",
	},
	{
		_id: "nosonoso",
		word: "のそのそ",
	},
	{
		_id: "noronoro",
		word: "のろのろ",
	},
	{
		_id: "battari",
		word: "ばったり",
	},
	{
		_id: "patto",
		word: "ぱっと",
	},
	{
		_id: "pikapika",
		word: "ぴかぴか",
	},
	{
		_id: "hisohiso",
		word: "ひそひそ",
	},
	{
		_id: "hirihiri",
		word: "ひりひり",
	},
	{
		_id: "butsubutsu",
		word: "ぶつぶつ",
	},
	{
		_id: "burabura",
		word: "ぶらぶら",
	},
	{
		_id: "pechakucha",
		word: "ぺちゃくちゃ",
	},
	{
		_id: "betobeto",
		word: "べとべと",
	},
	{
		_id: "perapera",
		word: "ぺらぺら",
	},
	{
		_id: "mukutto",
		word: "むくっと",
	},
	{
		_id: "yochiyochi",
		word: "よちよち",
	},
	{
		_id: "yoroyoro",
		word: "よろよろ",
	},
	{
		_id: "shikkari",
		word: "しっかり",
	},
	{
		_id: "shikkuri",
		word: "しっくり",
	},
	{
		_id: "jikkuri",
		word: "じっくり",
	},
	{
		_id: "jitto",
		word: "じっと",
	},
	{
		_id: "shitoshito",
		word: "しとしと",
	},
	{
		_id: "shibushibu",
		word: "しぶしぶ",
	},
	{
		_id: "juujuu",
		word: "じゅうじゅう",
	},
	{
		_id: "jirojiro",
		word: "じろじろ",
	},
	{
		_id: "suutto",
		word: "すうっと",
	},
	{
		_id: "sukkari",
		word: "すっかり",
	},
	{
		_id: "sukkiri",
		word: "すっきり",
	},
	{
		_id: "sutto",
		word: "すっと",
	},
	{
		_id: "supatto",
		word: "すぱっと",
	},
	{
		_id: "subesube",
		word: "すべすべ",
	},
	{
		_id: "suyasuya",
		word: "すやすや",
	},
	{
		_id: "surasura",
		word: "すらすら",
	},
	{
		_id: "zuratto",
		word: "ずらっと",
	},
	{
		_id: "zurarito",
		word: "ずらりと",
	},
	{
		_id: "zuruzuru",
		word: "ずるずる",
	},
	{
		_id: "zokuzoku",
		word: "ぞくぞく",
	},
	{
		_id: "sorosoro",
		word: "そろそろ",
	},
	{
		_id: "tappuri",
		word: "たっぷり",
	},
	{
		_id: "dabudabu",
		word: "だぶだぶ",
	},
	{
		_id: "taratara",
		word: "たらたら",
	},
	{
		_id: "chikachika",
		word: "ちかちか",
	},
	{
		_id: "chikutto",
		word: "ちくっと",
	},
	{
		_id: "chibichibi",
		word: "ちびちび",
	},
	{
		_id: "chanto",
		word: "ちゃんと",
	},
	{
		_id: "chuuchuu",
		word: "ちゅうちゅう",
	},
	{
		_id: "chokonto",
		word: "ちょこんと",
	},
	{
		_id: "chirachira",
		word: "ちらちら",
	},
	{
		_id: "tsurutsuru",
		word: "つるつる",
	},
	{
		_id: "tekateka",
		word: "てかてか",
	},
	{
		_id: "dento",
		word: "でんと",
	},
	{
		_id: "dokidoki",
		word: "どきどき",
	},
	{
		_id: "dosunto",
		word: "どすんと",
	},
	{
		_id: "dokkari",
		word: "どっかり",
	},
	{
		_id: "tonton",
		word: "とんとん",
	},
	{
		_id: "dondon",
		word: "どんどん",
	},
	{
		_id: "nakunaku",
		word: "なくなく",
	},
	{
		_id: "nikoniko",
		word: "にこにこ",
	},
	{
		_id: "nikkori",
		word: "にっこり",
	},
	{
		_id: "niyaniya",
		word: "にやにや",
	},
	{
		_id: "nurunuru",
		word: "ぬるぬる",
	},
	{
		_id: "nonbiri",
		word: "のんびり",
	},
	{
		_id: "bakitto",
		word: "ばきっと",
	},
	{
		_id: "pakupaku",
		word: "ぱくぱく",
	},
	{
		_id: "bashitto",
		word: "ばしっと",
	},
	{
		_id: "batatto",
		word: "ばたっと",
	},
	{
		_id: "patatto",
		word: "ぱたっと",
	},
	{
		_id: "batabata",
		word: "ばたばた",
	},
	{
		_id: "batanto",
		word: "ばたんと",
	},
	{
		_id: "patanto",
		word: "ぱたんと",
	},
	{
		_id: "barabara",
		word: "ばらばら",
	},
	{
		_id: "parapara",
		word: "ぱらぱら",
	},
	{
		_id: "panpan",
		word: "ぱんぱん",
	},
	{
		_id: "pitatto",
		word: "ぴたっと",
	},
	{
		_id: "pittari",
		word: "ぴったり",
	},
	{
		_id: "pyonpyon",
		word: "ぴょんぴょん",
	},
	{
		_id: "byunbyun",
		word: "びゅんびゅん",
	},
	{
		_id: "pukapuka",
		word: "ぷかぷか",
	},
	{
		_id: "bukubuku",
		word: "ぶくぶく",
	},
	{
		_id: "busutto",
		word: "ぶすっと",
	},
	{
		_id: "furatto",
		word: "ふらっと",
	},
	{
		_id: "furafura",
		word: "ふらふら",
	},
	{
		_id: "fuwafuwa",
		word: "ふわふわ",
	},
	{
		_id: "punpun",
		word: "ぷんぷん",
	},
	{
		_id: "betabeta",
		word: "べたべた",
	},
	{
		_id: "pekonto",
		word: "ぺこんと",
	},
	{
		_id: "boutto",
		word: "ボーっと",
	},
	{
		_id: "boubou",
		word: "ぼうぼう",
	},
	{
		_id: "hokahoka",
		word: "ほかほか",
	},
	{
		_id: "pokapoka",
		word: "ぽかぽか",
	},
	{
		_id: "pokitto",
		word: "ぽきっと",
	},
	{
		_id: "bokotto",
		word: "ぼこっと",
	},
	{
		_id: "potapota",
		word: "ぽたぽた",
	},
	{
		_id: "hotto",
		word: "ほっと",
	},
	{
		_id: "poripori",
		word: "ぽりぽり",
	},
	{
		_id: "ponto",
		word: "ぽんと",
	},
	{
		_id: "bon'yari",
		word: "ぼんやり",
	},
	{
		_id: "marumaruto",
		word: "まるまると",
	},
	{
		_id: "mukamuka",
		word: "むかむか",
	},
	{
		_id: "mutto",
		word: "むっと",
	},
	{
		_id: "mesomeso",
		word: "めそめそ",
	},
	{
		_id: "meramera",
		word: "めらめら",
	},
	{
		_id: "mokumoku",
		word: "もくもく",
	},
	{
		_id: "mogumogu",
		word: "もぐもぐ",
	},
	{
		_id: "yanwari",
		word: "やんわり",
	},
	{
		_id: "yuttari",
		word: "ゆったり",
	},
	{
		_id: "runrun",
		word: "るんるん",
	},
	{
		_id: "waawaa",
		word: "わあわあ",
	},
	{
		_id: "waiwai",
		word: "わいわい",
	},
	{
		_id: "wakuwaku",
		word: "わくわく",
	},
	{
		_id: "wanwan",
		word: "わんわん",
	},
];

// function getUniqueListBy(arr, key) {
// 	return [...new Map(arr.map((item) => [item[key], item])).values()];
// }

export function kanaToId(kana: string) {
	return wanakana.toRomaji(wanakana.toHiragana(wanakana.toKatakana(kana)));
}
