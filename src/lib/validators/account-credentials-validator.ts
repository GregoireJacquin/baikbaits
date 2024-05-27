import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Votre mot de passe doit contenir au minimum 8 characteres',
  }),
})

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>
