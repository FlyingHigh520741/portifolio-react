import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-azul font-krona">
      <Typewriter
        options={{
          strings: [
            "Engenharia de Software",
            "Buscando estágio em TI",
            "Desenvolvedor",
            "Tecnologia",
            "Programação"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
