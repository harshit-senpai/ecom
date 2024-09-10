import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
});

export const billboardSchema = z.object({
  label: z.string().min(3, { message: "Label must be at least 3 characters" }),
  imageUrl: z.string().min(3, { message: "Image URL must be at least 3 characters" }),
});