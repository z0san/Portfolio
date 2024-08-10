import React from "react"

interface ProjectsProps {
	theme: "dark" | "light"
}

const Projects = ({ theme }: ProjectsProps) => {
	return (
		<section id="projects" className="bg-gray-800 py-20">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-gray-700 p-6 rounded-lg">
						<h3 className="text-xl font-bold mb-2">CreativesApp</h3>
						<p className="mb-4">
							A project management and fintech platform for the creative
							industry.
						</p>
						<a
							href="https://creativesapp.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-400 hover:underline"
						>
							View Project
						</a>
					</div>
					<div className="bg-gray-700 p-6 rounded-lg">
						<h3 className="text-xl font-bold mb-2">ModelAssistant.ai</h3>
						<p className="mb-4">
							An AI-powered assistant for model management and optimization.
						</p>
						<img
							src="/api/placeholder/400/200"
							alt="ModelAssistant.ai"
							className="w-full h-40 object-cover mb-4 rounded"
						/>
						<a href="example.com" className="text-blue-400 hover:underline">
							View Project
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
