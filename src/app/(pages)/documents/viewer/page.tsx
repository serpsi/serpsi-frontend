"use client";
import { useEffect, useState } from "react";
import { DocumentViewer } from "react-documents";
export default function Viewer(params: { id: string }) {
	let [url, setUrl] = useState("");

	useEffect(() => {
		async function getUrlFromDocument(id: string) {
			let url = "https://res.cloudinary.com/carabolasjoao/image/upload/v1729105086/samples/ecommerce/PDS_-_prova_1_maq3my.pdf";
      setUrl(url);
		}
    getUrlFromDocument(params.id);
	}, [params.id]);
	return (
		<main className="flex h-full w-full items-center justify-center bg-white p-3">
			<div className="flex h-[80vh] w-full items-center justify-center">
				<DocumentViewer
					queryParams="hl=pt"
					style={{ width: "100%", height: "100%" }}
					url={url}
				/>
			</div>
		</main>
	);
}
