"use client";
import { useState } from "react";

export default function Home() {
	const [contador, setContador] = useState(0);

	const somaUm = () => {
		setContador((prev) => prev + 1);
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>olá mundo! {contador}</h1>
			<button onClick={() => somaUm()}>soma um</button>
		</main>
	);
}
