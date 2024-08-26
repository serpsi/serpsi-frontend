export default function LoginPage() {
    return (
        <main className="bg-zinc-400 flex md:items-center md:justify-center w-screen h-screen p-10">
            <section className="h-full border border-cyan-500 p-3 rounded-md flex justify-around flex-col-reverse sm:flex-row sm:items-center sm:h-1/2">
                <section className="sm:w-1/2">
                    <h2 className="text-3xl">Gerencie o seu consultório de psicologia</h2>
                    <p className="text-xl">Horários, pacientes, documentos, tudo num só lugar.</p>
                    <button>Saiba Mais</button>
                </section>
                <section className="sm:w-1/2">
                    <h1 className="text-3xl text-center mb-2">Login</h1>
                    <form>
                        <label className="w-full">
                            Insira seu email
                            <input type="text" className="w-full" />
                        </label>
                        <br />
                        <label className="w-full">
                            Insira sua senha
                            <input type="password" className="w-full" />
                        </label>
                        <br />
                        <button type="submit" className="w-full bg-cyan-500 mt-2">Entrar</button>
                    </form>
                </section>
            </section>
        </main >
    )
}