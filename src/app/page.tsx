"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dados-iniciais");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white w-xs p-8 rounded-lg gap-6">
        <h1 className="text-4xl font-bold text-[#2b8fa8] ">Dieta Express</h1>
        <p className="text-center text-sm">
          Crie cardapios personalizados em poucos passos e gere um PDF para o
          seu paciente.
        </p>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button className="cursor-pointer" onClick={handleClick}>
            Criar nova dieta
          </Button>
        </div>
      </div>
    </div>
  );
}
