import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between md:py-32 md:px-16 sm:items-start">
				<section className="flex flex-col justify-center items-center text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Ngurah</h1>

					<p className="text-gray-400 max-w-xl mb-6">
						I build modern, responsive web interfaces and high-performing email templates. Focused on clean code, performance, and user experience.
					</p>

					<div className="flex gap-4">
						<Link href="/portfolio" className="bg-orange-400 text-white px-6 py-3 rounded-sm font-medium transition duration-300 ease-in-out">
							View Work
						</Link>

						<Link href="/contact" className="border border-orange-400 px-6 py-3 rounded-sm hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out	">
							Contact Me
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
