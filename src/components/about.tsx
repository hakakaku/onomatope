import { FC } from "react";
import BackLink from "./backLink";

interface AboutProps {}

const About: FC<AboutProps> = () => {
	return (
		<div className="mt-4 px-2">
			<BackLink />
			<article className="px-8 my-12">
				<h1 className="font-serif font-bold text-4xl text-fuchsia-800 dark:text-fuchsia-400">
					About
				</h1>
				<div className="mt-8 space-y-4 dark:text-cyan-300">
					<p className="font-serif font-light leading-relaxed text-justify">
						ねずみはセロのおじぎ火事たちを床を行っ小太鼓なくた。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						ところがそう変ますないという兎でう。楽だだんましもですまたセロの生意気めのときではきっと生意気たまして、これまでゴーシュをなりられのたた。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						ふんすぎおまえは足を重だて遠くの療の先生曲がきい第十町屋のかっこうがあるくていました。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						ゴーシュはひとつこめばいるで。床は一弾きねずみのようが出ながらやろまし。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						虫は首セロと誰を喜ぶていろたら。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						ゴーシュはどなりにもう少しに居りて猫を晩のようを落ちて二つのとってようよう処をおどかして来た。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						よくじつに猫をだいをきいたた。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						みんな思わずと音楽をして壁がちないで。
					</p>
					<p className="font-serif font-light leading-relaxed text-justify">
						子に鳴ったた。
					</p>
				</div>
			</article>
		</div>
	);
};

export default About;
