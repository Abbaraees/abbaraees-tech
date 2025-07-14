import { urlFor } from "../sanity/client";

export type ProjectPropsType = {
  title: string
  description: string
  image: string
  technologies: string[],
  live: string,
  github?: string
  reverse?: boolean
}

function Project({title, description, image, technologies, reverse, live, github}: ProjectPropsType) {
  return (
    <div className={`flex flex-col-reverse ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
      <img src={urlFor(image).url()} alt={title} className="rounded-lg w-full md:w-1/2 shadow-xl p-1" />
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-4 text-lg text-left leading-relaxed">{description}</p>
        <ul className="list-disc list-inside text-gray-400 text-left text-lg">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div>
          {live && <a href={`${live}`} className="inline-block mt-4 px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#B36A10] to-[#FF8C00] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Live</a>}
          {github && <a href={`${github}`} className="inline-block ml-4 mt-4 px-6 py-2 text-lg font-semibold text-white bg-gray-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Source Code</a>}
        </div>
      </div>
    </div>
  )
}

export default Project