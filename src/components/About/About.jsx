import { motion } from "framer-motion";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      <div className="flex flex-col justify-between md:pt-40 pt-28">
        <div className="flex flex-col px-2 sm:px-4 md:px-10 mt-10">
          <div className="flex flex-col items-center md:flex-row w-full max-w-screen-xl mx-auto">
            <div className="w-full md:px-8">
              <motion.div
                className="w-full md:w-96"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="text-xl sm:text-2xl font-krona text-center md:text-left text-white font-bold md:text-4xl mb-4 sm:mb-8">
                  Quem <span className="text-azul">sou eu?</span>
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1,
                    },
                  },
                }}
              >
                <h2 className="font-bold font-krona text-white text-center text-lg sm:text-xl md:text-4xl md:text-left mb-6 sm:mb-10">
                  <span className="text-azul">Analista de Dados</span> apaixonado por
                  <span className="text-azul"> Tecnologia</span>
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
              className="w-full"
            >
              <p className="text-justify text-white text-sm sm:text-base lg:text-xl font-montserrat font-medium mb-3 sm:mb-5">
                Atualmente, sou bacharelando em <span className="text-azul font-bold">Engenharia de Software (4/8) na FIAP</span> e estagiário na área de <span className="text-azul font-bold">Produtos do Global Trade & Finance no Bradesco</span>, onde trabalho com <span className="text-azul font-bold">análise e processamento de dados</span>. Aqui, vivo uma jornada repleta de empolgação e dedicação para aprender mais sobre o <span className="text-azul font-bold">mundo da tecnologia.</span>
              </p>
              <p className="text-justify text-white text-sm sm:text-base lg:text-xl font-medium font-montserrat mb-3 sm:mb-5">
                No meu trabalho atual, atuo com todo o processo de <span className="text-azul font-bold">ETL (Extração, Transformação e Carga)</span> utilizando tecnologias como <span className="text-azul font-bold">SQL, Python, SAS, Power Query e Power BI</span>. Paralelamente, venho me aprofundando em desenvolvimento <span className="text-azul font-bold">back-end com Java, Spring Boot e Kafka</span>, buscando uma transição para a área de desenvolvimento.
              </p>
              <p className="text-justify text-white text-sm sm:text-base lg:text-xl font-montserrat font-medium mb-3 sm:mb-5">
                Fora do ambiente profissional, gosto de <span className="text-azul font-bold">explorar novas tecnologias</span>, <span className="text-azul font-bold">desenvolver projetos desafiadores</span> e me manter atualizado com as <span className="text-azul font-bold">últimas tendências</span> do mercado de tecnologia, especialmente em <span className="text-azul font-bold">arquiteturas distribuídas</span> e <span className="text-azul font-bold">desenvolvimento Full Stack</span>.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.8,
                },
              },
            }}
            className="flex justify-center mt-6 sm:mt-10 w-full"
          >
            <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] aspect-video relative overflow-hidden rounded-lg shadow-lg bg-[#2a2a2a]">
              <img 
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
                alt="Programador codificando"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="text-bold text-white text-3xl mt-6 sm:mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
