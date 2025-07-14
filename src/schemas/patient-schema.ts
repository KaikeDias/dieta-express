import z from "zod";

export const patientSchema = z.object({
  name: z.string().min(3, 'Nome obrigatório'),
  age: z.coerce.number().int().positive('Idade inválida'),
  weight: z.coerce.number().positive('Peso inválido'),
  height: z.coerce.number().positive('Altura inválida'),
})

export type PatientFormData = z.infer<typeof patientSchema>