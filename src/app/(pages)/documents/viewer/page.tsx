"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { DownloadIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DocumentViewer } from "react-documents";
export default function Viewer(params: { id: string }) {
	let [url, setUrl] = useState("");

	useEffect(() => {
		async function getUrlFromDocument(id: string) {
			let url =
				"https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf";
			setUrl(url);
		}
		getUrlFromDocument(params.id);
	}, [params.id]);

	const DownloadFile = async (image: string) => {
		const response = await fetch(image);
		if (response.status !== 200) {
			console.log("problemas em baixar o arquivo");
			return;
		}
		const name = image.split("/").at(-1)!;
		const blob = await response.blob();
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = name;
		a.click();
	};
	return (
		<main className="flex h-full w-full items-center justify-center bg-white p-3">
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent className="">
					<DialogHeader>
						<DialogTitle>Titulo</DialogTitle>
						<DialogDescription></DialogDescription>
						<div className="flex h-[80vh] w-full flex-col items-end justify-center gap-2">
							<DocumentViewer
								queryParams="hl=pt"
								style={{ width: "100%", height: "100%" }}
								url={url}
							/>
							<Button
								variant="link"
								className="gap-2 text-primary-600"
								onClick={() => DownloadFile(url)}
							>
								Baixar arquivo{" "}
								<DownloadIcon className="h-6 w-6" />
							</Button>
						</div>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</main>
	);
}
