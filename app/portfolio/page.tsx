import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between md:py-32 md:px-16 sm:items-start">
				<section className="flex1 w-full flex-col justify-center items-center text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-5">My Portfolio</h1>                  
					<p className="text-gray-400 max-w-xl mb-10 mx-auto">
                        Explore a collection of my recent work, including responsive web interfaces and conversion-focused email templates designed to enhance user experience and drive engagement.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-orange-400 p-6 rounded-sm hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">Project 1</h3>
                            <p className="text-gray-400 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="border border-orange-400 p-6 rounded-sm hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">Project 2</h3>
                            <p className="text-gray-400 text-sm">
                                Donec interdum sem non tincidunt faucibus.
                            </p>
                        </div>
                        <div className="border border-orange-400 p-6 rounded-sm hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">Project 3</h3>
                            <p className="text-gray-400 text-sm">
                                Morbi et nisl venenatis, fringilla dui et, dignissim massa.
                            </p>
                        </div>
                        <div className="border border-orange-400 p-6 rounded-sm hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">Project 4</h3>
                            <p className="text-gray-400 text-sm">
                                Nullam risus sem, ultrices eu posuere eu, convallis vitae lacus.
                            </p>
                        </div>
                        <div className="border border-orange-400 p-6 rounded-sm hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">Project 5</h3>
                            <p className="text-gray-400 text-sm">
                                Suspendisse blandit fringilla justo, ut volutpat mi efficitur vehicula.
                            </p>
                        </div>
                        <div className="border border-orange-400 p-6 rounded-sm hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">Project 6</h3>
                            <p className="text-gray-400 text-sm">
                                Mauris velit leo, consequat at nunc a, sollicitudin sodales orci.
                            </p>
                        </div>
                    </div>
                </section>
			</main>
		</div>
	);
}
