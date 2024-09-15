import { Value } from "@radix-ui/react-select";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
});

export const billboardSchema = z.object({
  label: z.string().min(3, { message: "Label must be at least 3 characters" }),
  imageUrl: z
    .string()
    .min(3, { message: "Image URL must be at least 3 characters" }),
});

export const categorySchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  billboardId: z
    .string()
    .min(3, { message: "Billboard ID must be at least 3 characters" }),
});

export const sizeSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  value: z.string().min(1),
});
