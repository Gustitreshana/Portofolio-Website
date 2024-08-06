const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 px-20 border-b border-emerald-600">
        <div>
            <h1 className="text-2xl font-bold text-emerald-600">
                Gusti
            </h1>
        </div>

        <div>
            <ul className="flex items-center gap-8">
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300">Home</li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300">About</li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300">Education</li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300">Skills</li>
                <li className="text-xl font-bold hover:text-emerald-600 cursor-pointer transition-all duration-300">Projects</li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;