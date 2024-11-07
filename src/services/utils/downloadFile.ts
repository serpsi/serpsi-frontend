export const DownloadFile = async (image: string, title: string) => {
  const response = await fetch(image);
  if (response.status !== 200) {
    console.log("problemas em baixar o arquivo");
    return;
  }
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = title;
  a.click();
};