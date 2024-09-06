import { InputText } from "@/components/form/input";

export default function LoginPage() {
  return (
    <main
      className="flex h-screen w-screen bg-cover p-10 md:items-center md:justify-center"
      style={{ backgroundImage: "url('/img/login-bg.jpg')" }}
    >
      <section className="borderborder-primary-500 flex h-full w-4/5 flex-row items-center justify-around rounded-[30px] bg-gradiente-vidro p-9">
        <section className="hidden w-2/5 text-primary-950 lg:block">
          <h2 className="text-3xl">Gerencie o seu consultório de psicologia</h2>
          <p className="text-xl">
            Horários, pacientes, documentos, tudo num só lugar.
          </p>
          <button className="mt-2 w-full rounded-md bg-primary-600 p-3 text-sm text-primary-50">
            Saiba Mais
          </button>
        </section>
        <section className="w-full text-primary-950 lg:w-2/5">
          <h1 className="text-primary-900 mb-2 text-center text-3xl font-medium">
            Login
          </h1>
          <form>
            <InputText
              type="text"
              label="Insira seu E-mail"
              id="email"
              placeholder="Email"
            />
            <br />
            <InputText
              type="password"
              label="Insira sua Senha"
              id="password"
              placeholder="Senha"
            />
            <br />
            <button
              type="submit"
              className="text-primary-700 mt-2 w-full rounded-xl border border-primary-500 bg-primary-50 pb-1 pt-1 text-xl"
            >
              Entrar
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
