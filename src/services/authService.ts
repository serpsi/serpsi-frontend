'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { jwtDecode } from "jwt-decode";
export async function login(form: FormData): Promise<Record<string, string> | null> {

  const login = {
    email: form.get("email")?.toString(),
    password: form.get("password")?.toString()
  }

  const schema = z.object({
    email: z.string()
      .email({ message: "Formato de E-mail inválido" })
      .min(1, { message: 'E-mail não pode estar vazio' }),

    password: z.string().min(1, { message: 'Senha não pode estar vazia' })
  });
  const result = schema.safeParse(login);


  if (result.success) {
    const response = await fetch(process.env.BACKEND_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: login.email,
        password: login.password
      })
    });
    const payload = await response.json()
    if (!response.ok) {
      return null;
    }
    cookies().set({
      name: "Authorization",
      value: "Bearer " + payload.access_token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(payload.access_token).exp! * 1000)
    });
    cookies().set({
      name: "sub",
      value: payload.payload.sub,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(payload.access_token).exp! * 1000)
    });
    cookies().set({
      name: "role",
      value: payload.payload.role,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(payload.access_token).exp! * 1000)
    });

    return redirect("/patients");
  }
  else {
    const errors: Record<string, string> = {};
    result.error.issues.forEach((error) => {
      errors[error.path[0]] = error.message
    })
    return errors;
  }
}