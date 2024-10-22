"use server"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { toast } from "sonner";


export async function getProfileData() {

  const jwt = cookies().get("Authorization")?.value!;
  if (jwt) {
    const sub = cookies().get("sub")?.value!;
    const response = await fetch(
      process.env.BACKEND_URL + "/psychologists/" + sub,
      {
        method: "GET",
        next: { revalidate: 1 },
        headers: {
          Authorization: jwt
        },
      }
    );
    return await response.json();
  }
}

export async function setProfile(data: any): Promise<any | undefined> {
  const jwt = cookies().get("Authorization")?.value!;
  if (jwt) {
    const sub = cookies().get("sub")?.value!;
    const response = await fetch(process.env.BACKEND_URL + "/psychologists/" + sub, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
      body: JSON.stringify(data)
    });
    // if (response.ok) {
    //   revalidatePath(`/psychologists/${sub}`);
    // }
    return await response.json();
  }
  return undefined;
}


export async function updateProfilePicture(id: string) {
  const jwt = cookies().get("Authorization")?.value!;
  if (jwt) {
    // const sub = cookies().get("sub")?.value!;
    const response = await fetch(process.env.BACKEND_URL + "/persons/picture/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
      // body: JSON.stringify(data)
    });
    // if (response.ok) {
    //   revalidatePath(`/psychologists/${sub}`);
    // }
    return await response.json();
  }
  return undefined
}