import { useState } from "react";
import { Card } from "./components/Card";
import { ArrowLeft } from "lucide-react";
import { calculateImc, levels, type Level } from "./helpers/imc";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [imc, setImc] = useState<Level | null>(null);

  const handleCalculateImc = (height: number, weight: number) => {
    if (height && weight) {
      setImc(calculateImc(height, weight));
    } else {
      alert("Preencha os campos antes de calcular");
    }
  };

  return (
    <main className="max-w-7xl m-auto px-4">
      <header className="bg-zinc-500 p-4 text-white text-2xl md:p-6 text-center md:text-left rounded-lg mt-10">
        IMC - Powered By Gs
      </header>

      <section className="flex flex-col gap-6 md:flex-row mt-8">
        {/* Formulário */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl mb-4">Calcule o seu IMC</h1>
          <p className="text-lg md:text-2xl mb-4">
            IMC é a sigla para Índice de massa corpórea. Parâmetro adotado pela
            OMS para calcular o chamado “peso ideal”.
          </p>

          <input
            className="w-full mb-4 px-3 py-2 border-b-2 border-zinc-600 outline-none disabled:opacity-40"
            type="number"
            placeholder="Informe sua altura em metros. Ex 1.73"
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            value={heightField > 0 ? heightField : ""}
            disabled={imc != null}
          />
          <input
            className="w-full mb-4 px-3 py-2 border-b-2 border-zinc-600 outline-none disabled:opacity-40"
            type="number"
            placeholder="Informe seu peso em quilos. Ex 85.3"
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            value={weightField > 0 ? weightField : ""}
            disabled={imc != null}
          />
          <button
            disabled={imc != null}
            onClick={() => handleCalculateImc(heightField, weightField)}
            className={`w-full py-3 rounded-xl text-white bg-blue-600 transition-all duration-300 hover:bg-blue-400 hover:scale-105 disabled:bg-gray-300 disabled:text-gray-500 disabled:scale-100 disabled:cursor-not-allowed`}
          >
            Calcular
          </button>
        </div>

        {/* Cards */}
        <div className="flex-1 relative mt-6 md:mt-0">
          <section
            className={`grid gap-4 ${
              imc ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {!imc && levels.map((item, key) => <Card key={key} item={item} />)}
          </section>

          {imc && (
            <>
              <button
                className="absolute top-0 left-0 md:-left-6 bg-sky-300 p-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-blue-400 hover:scale-105"
                onClick={() => {
                  setImc(null);
                  setHeightField(0);
                  setWeightField(0);
                }}
              >
                <ArrowLeft />
              </button>
              <div className="mt-6 md:mt-0">
                <Card item={imc} />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
