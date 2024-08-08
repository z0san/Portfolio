import React from "react"

interface ExperienceProps {
	theme: "dark" | "light"
}

const Experience = ({ theme }: ExperienceProps) => {
	return (
		<section id="experience" className="py-20">
			<div className="">
				<div className="space-y-8">
					<a
						href="https://www.creativesapp.com/"
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-start justify-center p-6 rounded-lg ${
							theme === "dark"
								? "text-gray-300 bg-gray-700"
								: "text-gray-700 bg-gray-200"
						}`}
					>
						<div className="rounded-md relative overflow-hidden mb-4 min-w-52 min-h-52">
							<img
								src="/experience/creativesapp.jpg"
								alt="CreativesApp home page"
								className="absolute w-full h-full object-left-top "
							/>
						</div>
						<div className="flex flex-col items-start justify-center p-6 pt-0 rounded-lg">
							<p className="text-gray-300 mb-1 w-full text-right">
								September 2023 - Present
							</p>
							<h3 className="text-xl font-bold mb-2">
								Chief Technology Officer - creativesapp
							</h3>
							<p className="text-gray-300 mb-2">London, UK</p>
							<p>
								Led technical development of a project management and fintech
								platform for the creative industry. Architected and implemented
								core platform features using PHP, Laravel, and MySQL. Managed a
								cross-functional team of 4, establishing engineering best
								practices. Developed analytics tracking system to measure user
								engagement and platform performance.
							</p>
						</div>
					</a>
					<a
						href="https://www.pelicargo.com/"
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-start justify-center p-6 rounded-lg ${
							theme === "dark"
								? "text-gray-300 bg-gray-700"
								: "text-gray-700 bg-gray-200"
						}`}
					>
						<div className="rounded-md relative overflow-hidden mb-4 min-w-52 min-h-52">
							<img
								src="/experience/pelicargo.jpg"
								alt="Pelicargo home page"
								className="absolute w-full h-full object-left-top "
							/>
						</div>
						<div className="flex flex-col items-start justify-center p-6 pt-0 rounded-lg">
							<p className="text-gray-300 mb-1 w-full text-right">
								June 2022 - September 2022
							</p>
							<h3 className="text-xl font-bold mb-2">
								Software Engineer Intern - Pelicargo
							</h3>
							<p className="text-gray-300 mb-2">Boston, MA</p>
							<p>
								Designed and developed internal tools to reduce client response
								times by 50%. Created APIs using IATA One Record protocoll
								Implemented front-end and back-end solutions using TypeScript,
								React.js, and Appsmith.
							</p>
						</div>
					</a>
					<a
						href="https://aws.amazon.com/lookout-for-metrics/"
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-start justify-center p-6 rounded-lg ${
							theme === "dark"
								? "text-gray-300 bg-gray-700"
								: "text-gray-700 bg-gray-200"
						}`}
					>
						<div className="rounded-md relative overflow-hidden mb-4 min-w-52 min-h-52">
							<img
								src="/experience/creativesapp.jpg"
								alt="CreativesApp home page"
								className="absolute w-full h-full object-left-top "
							/>
						</div>
						<div className="flex flex-col items-start justify-center p-6 pt-0 rounded-lg">
							<p className="text-gray-300 mb-1 w-full text-right">
								June 2021 - August 2021
							</p>
							<h3 className="text-xl font-bold mb-2">
								Software Development Engineer Intern - Amazon Looking For
								Metrics (AWS)
							</h3>
							<p className="text-gray-300 mb-2">Seattle, WA</p>
							<p>
								Built scalable features for AWS - Lookout for Metrics.
								Implemented back inference for AI inference on specified past
								data. Collaborated with cross-functional teams and gained
								experience with various AWS services.
							</p>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Experience
