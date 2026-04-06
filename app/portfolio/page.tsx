import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between md:py-32 md:px-16 sm:items-start">
				<section className="flex1 w-full flex-col justify-center items-center text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold mb-5">My Portfolio</h1>                  
					<p className="text-gray-400 max-w-xl mb-10 mx-auto">
                        Explore a collection of my recent work, including responsive web interfaces and conversion-focused email templates designed to enhance user experience and drive engagement.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-1.jpg" alt="Bluewater Express" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://www.bluewater-express.com/reservation/" target="_blank">Bluewater Express</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-2.jpg" alt="Hotel Nikko Bali Benoa Beach" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://hotelnikkobali-benoabeach.com" target="_blank">Hotel Nikko Bali Benoa Beach</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-3.jpg" alt="Jasmine Elizabeth" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://jasmineelizabeth.com" target="_blank">Jasmine Elizabeth</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-4.jpg" alt="Santrian Group" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://www.santrian.com" target="_blank">Santrian Group</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-5.jpg" alt="Bidadari Villas" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://www.thebidadarivillasandspa.com" target="_blank">Bidadari Villas</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-6.jpg" alt="Mataking Reef Resort" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://www.mataking.com" target="_blank">Mataking Reef Resort</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-7.jpg" alt="Studio Lumbung Architect" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://lumbungarchitect.com" target="_blank">Studio Lumbung Architect</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-8.jpg" alt="KKP Raja Ampat" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://kkprajaampat.com" target="_blank">KKP Raja Ampat</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-9.jpg" alt="Munduk Moding" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://mundukmodingplantation.com" target="_blank">Munduk Moding</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-10.jpg" alt="Hatten Wines" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://www.hattenwines.com" target="_blank">Hatten Wines</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-11.jpg" alt="Mermaid Liveaboard" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://www.mermaid-liveaboards.com" target="_blank">Mermaid Liveaboard</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="group shadow-md hover:scale-105 transition duration-300 ease-in-out rounded-sm">
                            <div className="aspect-[6/3] rounded-t-sm overflow-hidden">
                                <Image className="w-full h-full object-cover" width={300} height={300} src="/images/portfolio-12.jpg" alt="Plaza Renon" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 mt-3 group-hover:text-orange-400 transition duration-300 ease-in-out">
                                    <Link href="https://plazarenon.com" target="_blank">Plaza Renon</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
			</main>
		</div>
	);
}
