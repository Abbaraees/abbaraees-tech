type PostType = {
  title: string
  description: string
  link: string
}

const Post = ({title, description, link}: PostType) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <a href={link} className="text-[#B36A10] hover:underline">Read More →</a>
    </div>
  )
}

export default Post