import { HeadingSecond } from "@/components/Heading";

export function Newsletter() {
  return (
    <div className="mb-16 bg-card-background rounded-2xl">
      <form className="px-4 py-6">
        <HeadingSecond>Newsletter</HeadingSecond>

        <p className="mb-4 font-medium text-base text-text">
          Inscreva-se abaixo para receber atualizações diretamente em sua caixa
          de entrada.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg placeholder:text-text w-full md:w-auto grow"
          />

          <button className="flex items-center justify-center gap-0 md:gap-2 rounded-lg px-4 py-2 bg-text text-background">
            <span className="text-sm md:text-base">Inscrever-se</span>
          </button>
        </div>
      </form>
    </div>
  );
}
