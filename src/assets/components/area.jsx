export function Area() {
  return (
    <section className="flex flex-col p-4 min-h-screen  gap-10  ">
      <div>
        <h2 className="p-2 w-95 md:w-125 bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent font-bold text-[20px] md:text-[25px]">
          Área de atuação
        </h2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-2 ">
          <div className="flex justify-between items-center border border-gray-500/50 p-2  rounded-br-lg bg-amber-800/20">
            <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent w-full uppercase font-bold ">
              Civil
            </h3>
            <i className="fa-solid fa-city text-amber-500"></i>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              accusantium.
            </p>
            <button className="button">saiba mais</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center border border-gray-500/50  bg-amber-800/20 p-2 rounded-br-lg">
            <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent w-full uppercase font-bold ">
              Direito Médico
            </h3>
            <i className="fa-solid fa-kit-medical text-amber-500"></i>
          </div>

          <div class>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              accusantium.
            </p>
            <button className="button">saiba mais</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center p-2 border border-gray-500/50  bg-amber-800/20 rounded-br-lg">
            <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent w-full uppercase font-bold">
              Trabalhista
            </h3>
            <i className="fa-solid fa-briefcase text-amber-500"></i>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              accusantium.
            </p>
            <button className="button">saiba mais</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center p-2 border border-gray-500/50  bg-amber-800/20 rounded-br-lg">
            <h3 className="bg-linear-to-r from-amber-500 via-amber-700 to-amber-800  bg-clip-text text-transparent w-full uppercase font-bold">
              Previdenciário
            </h3>
            <i className="fa-solid fa-people-group text-amber-500"></i>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              accusantium.
            </p>
            <button className="button">saiba mais</button>
          </div>
        </div>
      </div>
    </section>
  );
}
