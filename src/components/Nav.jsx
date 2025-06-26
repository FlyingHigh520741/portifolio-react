import { Link } from "react-router-dom";
import HomeIcon from "../assets/svg/Home.svg";
import SilhuetaIcon from "../assets/svg/Silhueta.svg";
import CodigoIcon from "../assets/svg/Código.svg";
import ContatoIcon from "../assets/svg/Contato.svg";
import Logo from "../assets/svg/Logo.svg";
import Button from "../components/Button";
import { BsList, BsXLg, BsFileEarmarkCode } from "react-icons/bs";
import { useState, useEffect } from "react";

const Nav = () => {
  let [open, setOpen] = useState(false);
  let [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={`shadow-md w-full fixed top-0 left-0 z-[1000] transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-[#090e43] bg-opacity-50" : "bg-transparent"}`}>
      <div className="md:flex items-center justify-between py-4 sm:py-6 md:py-9 px-4 sm:px-8 md:px-12 max-w-screen-large mx-auto bg-black md:bg-opacity-50 md:bg-transparent">
        {/* Logo e DV */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-6 sm:h-8" />
          <span className="font-krona text-azul text-2xl sm:text-3xl font-bold">DV</span>
        </div>

        {/* Botão do Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl sm:text-3xl absolute right-4 sm:right-8 md:right-16 top-[1rem] sm:top-[1.5rem] md:top-[2.3rem] cursor-pointer md:hidden"
        >
          {open ? <BsXLg size={24} sm:size={32} color="#3933e4" /> : <BsList size={24} sm:size={32} color="#3933e4" />}
        </div>

        {/* Navegação */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-azul md:bg-transparent md:z-auto z-[1000] left-0 w-full md:w-auto transition-all duration-500 ease-in-out ${
            open ? "top-[6.7rem] opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100 md:top-0`}
        >
          {/* Itens de navegação */}
          <li className="md:ml-8 text-xl md:my-0 my-7 text-white font-montserrat font-medium flex flex-col items-center relative group">
            <Link to="/" className="flex flex-col items-center" onClick={closeMenu}>
              <img src={HomeIcon} alt="Home" className="h-6 mb-1" />
              Home
            </Link>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#181db3] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7 text-white font-montserrat font-medium flex flex-col items-center relative group">
            <Link to="/sobre" className="flex flex-col items-center" onClick={closeMenu}>
              <img src={SilhuetaIcon} alt="Sobre" className="h-6 mb-1" />
              Sobre
            </Link>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#181db3] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7 text-white font-montserrat font-medium flex flex-col items-center relative group">
            <Link to="/projetos" className="flex flex-col items-center" onClick={closeMenu}>
              <img src={CodigoIcon} alt="Projetos" className="h-6 mb-1" />
              Projetos
            </Link>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#181db3] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7 text-white font-montserrat font-medium flex flex-col items-center relative group">
            <Link to="/contato" className="flex flex-col items-center" onClick={closeMenu}>
              <img src={ContatoIcon} alt="Contato" className="h-6 mb-1" />
              Contato
            </Link>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#181db3] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="flex justify-center w-full md:w-auto">
            <Button className="w-full md:w-auto text-center">
              <BsFileEarmarkCode className="mr-1" size={22} color="white" />
              Código
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
