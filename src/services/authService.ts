import { redirect } from "next/navigation";

export async function login(form: FormData) {
  'use server'
  const login = {
    "email": form.get("email")?.toString(),
    password: form.get("password")?.toString()
  }

  const response = await fetch(process.env.BACKEND_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      email: login.email,
      password: login.password
    })
  });
  console.log(await response.json());
  return redirect("/patients");
}