const Button = (props) => {
  return (
    <a
      href="https://github.com/FlyingHigh520741/portfolio-react"
      className="bg-black flex items-center md:bg-azul text-white font-montserrat font-semibold py-2 px-7 w-36 rounded md:ml-8 
                 hover:bg-[#181db3] duration-500 ease-in-out
                 active:bg-[#19118a] active:text-white focus:bg-[#b3184a] focus:ring-4 focus:ring-[#3633e4] focus:outline-none"
    >
      {props.children}
    </a>
  );
};

export default Button;
