import { ButtonLink } from "./ButtonLink";

export function HeroSection() {
  return (
    <main className="flex flex-col items-center justify-center h-full text-center px-4">
      <img src="/logo.png" aria-hidden="true" alt="" className="w-28 md:w-48 mb-6" />

      <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
        Estamos construindo algo <span className="text-brand">incrível!</span>
      </h1>

      <p className="text-sm md:text-lg text-gray-200 mb-8">
        Nosso novo site está em desenvolvimento.
      </p>

      <div className="flex gap-6">
        <ButtonLink href="https://www.linkedin.com/company/octalweboficial/" >
          LinkedIn
        </ButtonLink>

        <ButtonLink href="mailto:atendimento@octalweb.com.br" variant="secondary" >
          Contato
        </ButtonLink>
      </div>
    </main>
  )
}