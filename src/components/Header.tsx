import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center ">
        <div className="text-2xl font-bold">
          <Link to="/"><img src="/logo.png" className="h-16" style={{objectFit: 'fill'}}/></Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/projects" className="hover:text-primary">Projects</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </nav>
    </header>
  );
}