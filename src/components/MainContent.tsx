import React from "react"
import Experience from "./Experience"

interface MainContentProps {
	theme: "dark" | "light"
}

const MainContent = ({ theme }: MainContentProps) => {
	return (
		<div className="container w-full p-10">
			<Experience theme={theme} />

			{/* Skills Section */}
			<section id="skills" className="py-20">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-gray-800 p-6 rounded-lg">
							<h3 className="text-xl font-bold mb-4">Languages</h3>
							<ul className="list-disc list-inside">
								<li>C/C++/C#</li>
								<li>PHP/Laravel</li>
								<li>Java/Kotlin</li>
								<li>JavaScript/TypeScript</li>
								<li>Python</li>
								<li>HTML/CSS</li>
								<li>React/Vue.js</li>
								<li>OCaml</li>
								<li>Verilog</li>
							</ul>
						</div>
						<div className="bg-gray-800 p-6 rounded-lg">
							<h3 className="text-xl font-bold mb-4">
								Software & Technologies
							</h3>
							<ul className="list-disc list-inside">
								<li>Linux/Bash</li>
								<li>Git</li>
								<li>SQL</li>
								<li>MongoDB</li>
								<li>Node.js</li>
								<li>SolidWorks</li>
								<li>protoTRAK</li>
								<li>MasterCAM</li>
								<li>Unity</li>
								<li>JUnit</li>
								<li>Android Studio</li>
								<li>Apache Spark</li>
							</ul>
						</div>
						<div className="bg-gray-800 p-6 rounded-lg">
							<h3 className="text-xl font-bold mb-4">AWS Services</h3>
							<ul className="list-disc list-inside">
								<li>Lambda</li>
								<li>DynamoDB</li>
								<li>S3</li>
								<li>EC2</li>
								<li>State Machine</li>
								<li>Glue</li>
								<li>SageMaker</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
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
							<a href="#" className="text-blue-400 hover:underline">
								View Project
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MainContent
