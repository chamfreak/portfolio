import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between md:py-32 md:px-16 sm:items-start">
				<section className="flex1 w-full flex-col justify-center items-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold text-center mb-10">About Me</h1>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <Image className="float-left mr-4" width={180} height={180} src="/images/about.png" alt="Bluewater Express" />
                            <p className="text-gray-400 mb-4">
                                Hello all, my name is <b className="text-foreground">Ngurah</b>. I'm a Front-End Developer who enjoys turning ideas into clean, responsive, and functional digital experiences. I focus on building modern websites and crafting email templates that not only look great but also perform well across all devices and platforms.
                            </p>
                            <p className="text-gray-400 mb-4">
                                I have a strong interest in writing clean code, improving performance, and ensuring consistency in every detail. Whether it's a web interface or an email campaign, I aim to deliver results that are both visually appealing and effective.
                            </p>
                            <p className="text-gray-400">
                                I'm always learning and exploring new technologies to grow as a developer and provide better solutions in every project I work on.
                            </p>
                        </div>
                        <div className="space-y-6">                 
                            <div>
                                <h3 className="font-semibold mb-2 hover:text-orange-400 transition duration-300 ease-in-out">What I Do</h3>
                                <ul className="text-gray-400 space-y-1">
                                    <li><span className="text-orange-400 mr-2">•</span>Responsive Website Development</li>
                                    <li><span className="text-orange-400 mr-2">•</span>Email Template Development</li>
                                    <li><span className="text-orange-400 mr-2">•</span>UI Implementation</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 hover:text-orange-400 transition duration-300 ease-in-out">Tech Stack</h3>
                                <p className="text-gray-400">
                                    Next.js, Tailwind CSS, HTML, CSS, JavaScript, Wordpress, CodeIgniter, PHP Native
                                </p>
                            </div>                    
                            <div>
                                <h3 className="font-semibold mb-2 hover:text-orange-400 transition duration-300 ease-in-out">Focus</h3>
                                <ul className="text-gray-400 space-y-1">
                                    <li><span className="text-orange-400 mr-2">•</span>Clean & Maintainable Code</li>
                                    <li><span className="text-orange-400 mr-2">•</span>Cross-browser Compatibility</li>
                                    <li><span className="text-orange-400 mr-2">•</span>Mobile-first Approach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
			</main>
		</div>
	);
}
