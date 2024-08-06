const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 px-20 z-1">
        <div>
            <h1 className="text-2xl font-bold text-emerald-600">
                Gusti
            </h1>
        </div>

        <div>
            <ul className="flex items-center gap-8">
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300"><a href="#home">Home</a></li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300"><a href="#about">About</a></li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300"><a href="#education">Education</a></li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300"><a href="#skills">Skills</a></li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300"><a href="#projects">Projects</a></li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;