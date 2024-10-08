import MaoIcon from "../../assets/svg/Mão.svg";
import Type from "../Type";
import Daniel from "../../assets/svg/Daniel.svg";
import DanielProfile from "../../assets/img/Daniel.png";
import Github from "./GitHub";

function Home() {
    return (
        <>
        <header className="flex flex-col w-full items-center mt-28 py-10 px-7 md:flex-row md:justify-between md:px-20 md:mt-44 lg:px-44 max-w-screen-2xl mx-auto">
            <div className="flex flex-col text-start text-white justify-center items-center w-full md:items-start">
                <div className="flex items-center space-x-3">
                    <h1 className="text-4xl text-start font-krona text:text-[2.4rem] md:text-4xl">Olá!</h1>
                    <img src={MaoIcon} alt="Mão Icon" className="wave w-14 h-14 mb-3 md:w-16 md:h-16" />
                </div>
                <h1 className="text-3xl font-krona leading-normal w-full text-center md:text-left text:text-[2.4rem] md:text-4xl md:leading-normal">
                    Meu nome é <span className="text-azul whitespace-nowrap">Daniel Vieira</span>
                </h1>
                <div className="flex text-center mt-12 mb-16 h-10 text-2xl text:text-4xl md:text-start">
                    <Type/>
                </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0 md:w-1/2 md:justify-end">
                <img src={Daniel} alt="Desenho Daniel" className="w-64 h-64 text:w-80 text:h-80 md:w-96 md:h-full" />
            </div>
        </header>
        
        <section className="flex flex-col items-center p-8 py-24 text-white md:flex-row md:justify-between md:items-center md:px-12 md:py-36 lg:px-32 max-w-screen-2xl mx-auto">
            <div className="text-xl w-full md:w-1/2">
                <h1 className="text-xl text-center font-krona mb-10 text:text-2xl md:text-3xl">UM POUCO MAIS <span className="text-azul">SOBRE MIM</span></h1>
                <p className="font-montserrat font-medium mb-6 text-sm md:text-md lg:text-2xl text-justify">
                    Desde que comecei a programar, <span className="text-azul font-bold"> me apaixonei pelo universo da tecnolgia </span> e estou sempre aprendendo coisas novas, ou pelo menos tentando... 😅
                </p>
                <p className="font-montserrat font-medium mb-6 text-sm md:text-md lg:text-2xl text-justify">
                    Atualmente estou aprendendo um pouco mais sobre <span className="text-azul font-bold">Python, React JS e MySQL. 💻</span>
                </p>
                <p className="font-montserrat font-medium mb-6 text-sm md:text-md lg:text-2xl text-justify">
                Um dos meus maiores objetivos atualmente é  <span className="text-azul font-bold">ingressar no mercado de trabalho na área de TI</span>, buscando uma oportunidade de  <span className="text-azul font-bold">estágio</span> que me permita aplicar meus conhecimentos e desenvolver minhas habilidades em um ambiente profissional real.   💡
                </p>
                <p className="font-montserrat font-medium text-sm md:text-md lg:text-2xl text-justify">
                    Além da <span className="text-azul font-bold">programação</span>, adoro <span className="text-azul font-bold">compor músicas</span> e ir para <span className="text-azul font-bold">academia treinar</span>, o que sempre me inspira a ser criativo e focado nos projetos que estou desenvolvendo. 💪🏻
                </p>
            </div>
            <div className="flex justify-end mt-10 md:mt-0 md:w-1/2 pl-6">
                <img src={DanielProfile} alt="Foto de Perfil Daniel" className="w-80 h-auto xl:w-full md:max-w-md"/>
            </div>
        </section>

        <section className="flex flex-col justify-center p-10 text-white mb-5 max-w-screen-2xl mx-auto">
            <h1 className="font-krona text-white text-xl text-center mb-3 text:text-3xl">
                Minhas <strong className="flex text-azul justify-center">CONTRIBUIÇÕES</strong>
            </h1>
            <div className="w-full max-w-4xl mx-auto mt-3">
                <Github />
            </div>
        </section>
        </>
    );
}

export default Home;
