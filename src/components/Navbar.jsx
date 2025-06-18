// src/components/Navbar.jsx

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-10 py-4 bg-transparent shadow-2xl border-b border-white/20">
    <div className="flex items-center gap-2">
      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg tracking-widest">PORTFOLIO 3D</span>
    </div>
    <ul className="flex gap-10 text-lg font-semibold">
      <li><a href="#home" className="text-white/90 hover:text-pink-400 transition-colors duration-200">Home</a></li>
      <li><a href="#about" className="text-white/90 hover:text-pink-400 transition-colors duration-200">About</a></li>
      <li><a href="#projects" className="text-white/90 hover:text-pink-400 transition-colors duration-200">Projects</a></li>
      <li><a href="#contact" className="text-white/90 hover:text-pink-400 transition-colors duration-200">Contact</a></li>
    </ul>
    <button className="bg-gradient-to-r from-pink-400 to-blue-400 hover:from-blue-400 hover:to-pink-400 text-white font-bold px-6 py-2 rounded-full shadow-lg border border-white/30 transition-all duration-200 backdrop-blur-md">Resume</button>
  </nav>
);

export default Navbar;
