export default function LoginPage() {
    return (
        <main className="bg-cover flex md:items-center md:justify-center w-screen h-screen p-10"
        style={{backgroundImage: "url('/img/login-bg.jpg')"}}>
            <section className="h-full w-4/5 borderborder-primary-500 p-9 rounded-md flex justify-around flex-col-reverse sm:flex-row sm:items-center sm:h-4/5 bg-gradiente-vidro">
                <section className="text-primary-950">
                    <h2 className="text-3xl">Gerencie o seu consultório de psicologia</h2>
                    <p className="text-xl">Horários, pacientes, documentos, tudo num só lugar.</p>
                    <button>Saiba Mais</button>
                </section>
                <section className="text-primary-950">
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