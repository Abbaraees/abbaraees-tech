export type ProjectPropsType = {
  title: string
  description: string
  coverImage: string
  technologies: string[],
  link: string,
  reverse?: boolean
}

function Project({title, description, coverImage, technologies, reverse}: ProjectPropsType) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
      <img src={coverImage} alt={title} className="rounded-lg w-full md:w-1/2" />
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-4 text-lg text-left leading-relaxed">{description}</p>
        <ul className="list-disc list-inside text-gray-400 text-left text-lg">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Project