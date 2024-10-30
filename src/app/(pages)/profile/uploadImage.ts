export async function updateProfilePicture(id: string, file: FileList) {
  const formData = new FormData();
  formData.append('profilePicture', file[0]);

  const jwt = localStorage.getItem("Authorization"); // Ou pegue de onde estiver armazenado

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/persons/picture/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${jwt}`, 
    },
    body: formData, // Envia o FormData com a imagem
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar a imagem');
  }

  return await response.json();
}
