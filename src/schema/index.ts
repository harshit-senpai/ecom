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

export const colorSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  value: z.string().min(4).regex(/^#/, {
    message: "String must be a valid hex code",
  }),
});

export const productSchema = z.object({
  name: z.string().min(1),
  images: z.array(
    z.object({
      url: z.string().url("Invalid image URL"),
    })
  ),
  price: z.coerce.number().min(1),
  categoryId: z.string().min(1),
  colorId: z.string().min(1),
  sizeId: z.string().min(1),
  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional(),
});
