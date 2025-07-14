import TextField from "@/components/text-field";
import { Button } from "@/components/ui/button";
import React from "react";

function InitialForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white w-2xl p-8 rounded-lg gap-6">
        <h1 className="text-4xl font-bold text-[#2b8fa8] ">
          Dados do Paciente
        </h1>
        <div className="w-full grid grid-cols-2 gap-4">
          <TextField
            label="Nome completo"
            placeholder="Digite o nome do paciente"
          />
          <TextField label="Idade" placeholder="Digite a idade do paciente" />
          <TextField
            label="Peso (Kg)"
            placeholder="Digite o peso do paciente"
          />
          <TextField
            label="Altura (Metros)"
            placeholder="Digite a altura do paciente"
          />
        </div>
        <Button className="cursor-pointer">Avançar</Button>
      </div>
    </div>
  );
}

export default InitialForm;
