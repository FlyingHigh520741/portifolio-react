import { motion } from "framer-motion";
import Skills from "./Skills";
import DanielCode from "../../assets/svg/Daniel-code.svg";

const About = () => {
  return (
    <div className="min-h-screen lg:px-1">
      <div className="flex flex-col justify-between md:pt-40 pt-28">
        <div className="flex flex-col px-10 mt-10">
          <div className="flex flex-col items-center md:flex-row max-w-screen-xl mx-auto">
            <div className="md:px-8">
              <motion.div
                className="md:w-96"
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
                <h1 className="text-2xl font-krona text-center md:text-left text-white font-bold md:text-4xl mb-8">
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
                <h2 className="font-bold font-krona text-white text-center text-2xl md:text-4xl md:text-left mb-10">
                  <span className="text-azul"> Estudante de Engenharia de Software</span> apaixonado por
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
            >
              <p className="text-justify text-white text-lg lg:text-xl font-montserrat font-medium mb-5 flex-wrap">
                Atualmente, sou bacharelando em <span className="text-azul font-bold">Engenharia de Software (2/8) na FIAP.</span> Aqui, vivo uma jornada repleta de empolgação e dedicação para aprender mais sobre o <span className="text-azul font-bold">mundo da tecnologia.</span>
              </p>
              <p className="text-justify text-white text-lg lg:text-xl font-medium font-montserrat mb-5 flex-wrap">
                Além disso, estou em busca de uma oportunidade de  <span className="text-azul font-bold">Estagiar em TI</span>, possuo conhecimentos em front-end e estou aperfeiçoando meus conhecimentos para atuar com tratamento de dados.
              </p>
              <p className="text-justify text-white text-lg lg:text-xl font-montserrat font-medium mb-5 flex-wrap">
                Fora do ambiente acadêmico e profissional, gosto de <span className="text-azul font-bold">explorar novas tecnologias</span>, <span className="text-azul font-bold">desenvolver projetos desafiadores</span> e me manter atualizado com as <span className="text-azul font-bold">últimas tendências</span> do mercado de tecnologia.
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
            className="flex justify-center mt-10"
          >
            <img
              src={DanielCode}
              alt="Daniel codando"
              className="w-96 max-w-screen-xl"
            />
          </motion.div>
          <div className="text-bold text-white text-3xl mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
