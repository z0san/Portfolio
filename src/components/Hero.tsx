import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface HeroProps {
	theme: "dark" | "light"
	setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}

const Hero = ({ theme, setTheme }: HeroProps) => {
	return (
		<div className="flex flex-col justify-between xl:h-[100vh] xl:absolute xl:top-0 xl:left-0 w-full">
			<div className="p-10 xl:p-20 flex flex-col md:flex-row xl:flex-col gap-4">
				<div className="rounded-full relative overflow-hidden mb-4 min-w-52 max-w-52 min-h-52 max-h-52">
					<img
						src="/profile.jpg"
						alt="Zohar Singer Profile"
						className="absolute w-full h-full object-cover object-center"
					/>
				</div>
				<div>
					<h1 className="text-6xl font-bold mb-4">Zohar Singer</h1>
					<p className="text-xl xl:mb-8 text-bold">
						Full Stack Software Engineer
					</p>
					<div className="xl:py-10">
						<div className="container">
							<p
								className={`max-w-3xl text-sm md:text-base xl:text-xl ${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								}`}
							>
								As a passionate and innovative software engineer, I thrive on
								tackling complex challenges and creating elegant solutions. With
								a strong foundation in both front-end and back-end technologies.
								My experience as CTO at CreativesApp has honed my leadership
								skills and ability to drive projects from conception to
								completion. I'm constantly seeking new opportunities to learn
								and grow in the ever-evolving world of technology.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center gap-4 w-full px-10 xl:p-10">
				<div
					className={`flex justify-between space-x-4 w-full items-center ${
						theme === "dark" ? "text-gray-300" : "text-gray-700"
					}`}
				>
					<div className="flex gap-4">
						<a
							href="https://github.com/z0san"
							target="_blank"
							rel="noopener noreferrer"
							className={`transition-all duration-300 ease-in-out transform hover:scale-150 ${
								theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700"
							}`}
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" size="xl" />
						</a>
						<a
							href="https://linkedin.com/in/zohar-singer"
							target="_blank"
							rel="noopener noreferrer"
							className={`transition-all duration-300 ease-in-out transform hover:scale-150 ${
								theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700"
							}`}
						>
							<FontAwesomeIcon icon={faLinkedin} className="mr-2" size="xl" />
						</a>
						<a
							href="mailto:zohar@alumni.upenn.edu"
							className={`transition-all duration-300 ease-in-out transform hover:scale-150 ${
								theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-700"
							}`}
						>
							<FontAwesomeIcon icon={faEnvelope} className="mr-2" size="xl" />
						</a>
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="block xl:hidden transition-all duration-300 ease-in-out transform hover:scale-150"
						>
							{theme === "dark" ? "🌙" : "🌞"}
						</button>
					</div>
					<div className="hidden md:flex gap-4">
						<a
							href="https://github.com/z0san/portfolio"
							target="_blank"
							rel="noopener noreferrer"
							className={`hidden xl:flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg
                                    ${
																			theme === "dark"
																				? "bg-white text-gray-800 hover:bg-gray-100 focus:ring-gray-300"
																				: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-300"
																		}
                                `}
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							Check out this website on GitHub
						</a>
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="hidden xl:block transition-all duration-300 ease-in-out transform hover:scale-150"
						>
							{theme === "dark" ? "🌙" : "🌞"}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
