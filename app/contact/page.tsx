import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between md:py-32 md:px-16 sm:items-start">
				<section className="flex1 w-full flex-col justify-center items-center text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-5">Contact</h1>              
					<p className="text-gray-400 max-w-xl mb-10 mx-auto">
                        Feel free to reach out for collaborations, freelance work, or just a to say hello 👋
                    </p>
                    <div className="mb-10">
                        <p className="text-gray-500 mb-2">Email</p>
                        <Link href="mailto:cham.freaks@gmail.com" target="_blank" className="text-lg font-medium text-orange-400 underline">
                            cham.freaks@gmail.com
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">        
                        <Link href="https://github.com/chamfreak" target="_blank" className="border border-orange-400 px-6 py-3 rounded-sm hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out	">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/antonius-ngurah-rai-ari-perdana-196607a4" target="_blank" className="border border-orange-400 px-6 py-3 rounded-sm hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out	">
                            LinkedIn
                        </Link>
                        <Link href="https://www.instagram.com/_ngurahrai/" target="_blank" className="border border-orange-400 px-6 py-3 rounded-sm hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out">
                            Instagram
                        </Link>
                    </div>
                </section>
			</main>
		</div>
	);
}
