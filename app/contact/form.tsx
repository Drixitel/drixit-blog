"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel as FormLabelImpl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ComponentProps } from "react";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "./submit";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(160, { message: "Message must be less than 160 characters" }),
});

export type FormSchema = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormSchema>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form className="flex flex-col gap-5" action={submitForm}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormFieldRenderer
                name="name"
                label="Name"
                placeholder="Gandalf the Grey"
                // description="What should I call you?"
                field={field}
                kind="input"
              />
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormFieldRenderer
                name="email"
                label="Email"
                placeholder="shadowfax@maiar.edu"
                // description="How should I reach you?"
                field={field}
                kind="input"
              />
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormFieldRenderer
                name="message"
                label="Message"
                placeholder="Hey, I wanted to ask you about..."
                // description="What do you want to chat about?"
                field={field}
                kind="textarea"
              />
            )}
          />

          <Button
            type="submit"
            disabled={!form.formState.isValid}
            className="md:self-baseline mt-1"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

const FormLabel = (props: ComponentProps<typeof FormLabelImpl>) => (
  <FormLabelImpl className="font-serif text-md font-bold" {...props} />
);

type FormFieldProps<T = undefined | keyof FormSchema> =
  T extends keyof FormSchema
    ? {
        name: T;
        label: string;
        placeholder?: string;
        description: string;
        field: ControllerRenderProps<FormSchema, T>;
        kind: "input" | "textarea";
      }
    : never;

function FormFieldRenderer(props: FormFieldProps) {
  const { label, placeholder, description, kind, field } = props;

  return (
    <FormItem className="*:placeholder:opacity-50">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {kind === "input" ? (
          <Input placeholder={placeholder} {...field} />
        ) : (
          <Textarea placeholder={placeholder} {...field} />
        )}
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
