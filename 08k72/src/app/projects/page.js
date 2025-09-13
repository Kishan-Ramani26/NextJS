"use client";
import React from "react";
import Link from "next/link";

const projects = [
	{
		title: "Project One",
		image: "/images/Carl_480x640-480x640.jpg",
		link: "/projects/1",
	},
	{
		title: "Project Two",
		image: "/images/SebR_640X960-640x960.jpg",
		link: "/projects/2",
	},
	{
		title: "Project Three",
		image: "/images/SebR_640X960-640x960.jpg",
		link: "/projects/3",
	},
	{
		title: "Project Four",
		image: "/images/MEGGIE_480X640_2-480x640.jpg",
		link: "/projects/4",
	},
	{
		title: "Project Five",
		image: "/images/Claire_480x640-480x640.jpg",
		link: "/projects/5",
	},
	
	{
		title: "Project Six",
		image: "/images/Claire_480x640-480x640.jpg",
		link: "/projects/6",
	},
	
];



const Page = () => {
	return (
		<main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
			<h1 className="text-6xl md:text-8xl font-extrabold text-white mb-16 uppercase tracking-tight text-center">
				Projects
			</h1>
			<section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
				{projects.map((project, idx) => (
					<Link
						href={project.link}
						key={idx}
						className="group relative w-full block overflow-hidden rounded-3xl shadow-xl"
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75 origin-bottom"
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-500">
							<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-3xl md:text-4xl font-bold uppercase tracking-wider text-center drop-shadow-lg">
								{project.title}
							</span>
						</div>
					</Link>
				))}
			</section>
		</main>
	);
};

export default Page;


