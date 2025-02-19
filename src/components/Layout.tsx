import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Header />
      <div className="text-center mt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;