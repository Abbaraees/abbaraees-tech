import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
        <Header />
        <div className="text-center mt-16 w-full items-center justify-center">
          {children}
        </div>
      </div>
      <footer className="text-center text-gray-200 py-2 mt-auto bg-gray-800">
        <p>&copy; {new Date().getFullYear()} Abba Raees. All rights reserved.</p>
      </footer>
    </>

  );
};

export default Layout;