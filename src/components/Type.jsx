import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-azul font-krona">
      <Typewriter
        options={{
          strings: [
            "Estagiário no Bradesco",
            "Analista de Dados",
            "Engenharia de Software",
            "Desenvolvedor Back-end",
            "Futuro Full Stack"
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
