import { useRef, useState } from "react";
import { AiFillGithub, AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import DanielImg from "../../assets/svg/Contato-img.svg";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando mensagem...' });

    emailjs.sendForm(
      'service_4uz06ur',
      'template_zpi93qj',
      form.current,
      'yyaC4Jf8WXr2TqF1L'
    )
    .then((result) => {
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Obrigado pelo contato.'
      });
      form.current.reset();
    })
    .catch((error) => {
      setStatus({
        type: 'error',
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
      });
    });
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto mt-48 lg:mt-56 md:mt-52">
        <div className="text-center mb-20 md:mb-32">
        <h1 className="font-krona font-semibold text-azul text-3xl mb-5 px-3">
          ONDE ME ENCONTRAR
        </h1>
        <p className="text-lg font-montserrat text-white font-medium mb-6">
          Sinta-se livre para <span className="text-azul font-semibold">conectar</span> comigo
        </p>
        <ul className="flex justify-center space-x-8">
          <li className="social-icons">
            <a
              href="https://github.com/FlyingHigh520741"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#1b2cc1] transition-all"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://wa.me/5511984316645"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#1b2cc1] transition-all"
            >
              <AiOutlineWhatsApp />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/daniel-vieira-novais-3a644a148"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#1b2cc1] transition-all"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/danielftvn"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#1b2cc1] transition-all"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-36">
        <div className="flex justify-center items-center lg:justify-end">
          <img
            src={DanielImg}
            alt="Ilustração de Daniel"
            className="w-64 sm:w-96 lg:h-fit lg:w-full md:w-96"
          />
        </div>
        <div className="p-10 lg:p-8 md:p-20">
          <h1 className="font-krona font-semibold text-white text-2xl md:text-3xl mb-5">
            Me envie uma mensagem! 👇
          </h1>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label className="text-lg font-montserrat text-white font-medium">
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-2 px-3 border font-montserrat font-medium border-white rounded-md focus:ring-2 focus:ring-azul outline-none"
            />

            <label className="text-lg font-montserrat font-medium text-white">
              E-mail
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-2 px-3 border font-medium border-white rounded-md focus:ring-2 focus:ring-azul outline-none"
            />

            <label className="text-lg font-montserrat font-medium text-white">
              Mensagem
            </label>
            <textarea
              name="message"
              required
              className="font-montserrat font-medium w-full p-2 px-3 border border-white rounded-md focus:ring-2 focus:ring-azul outline-none h-36 resize-none"
            />

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className={`font-krona w-full p-3 mt-4 bg-azul text-white rounded-md cursor-pointer hover:bg-[#1b26c1] transition-all duration-200 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-azul ${
                status.type === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status.type === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>

            {status.message && (
              <p className={`text-center font-montserrat font-medium ${
                status.type === 'success' ? 'text-green-500' : 
                status.type === 'error' ? 'text-red-500' : 
                'text-white'
              }`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
