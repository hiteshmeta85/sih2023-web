import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRightIcon,
  KeyboardIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";

export const EditScriptFormSchema = z.object({
  script_sections: z
    .array(
      z.object({
        content: z.string().nonempty({
          message: "Text cannot be empty",
        }),
        id: z.number(),
      }),
    )
    .min(1, {
      message: "At-least one script is required",
    }),
});

export function EditScriptForm({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (data: z.infer<typeof EditScriptFormSchema>) => void;
  defaultValues: z.infer<typeof EditScriptFormSchema>;
}) {
  const form = useForm<z.infer<typeof EditScriptFormSchema>>({
    resolver: zodResolver(EditScriptFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "script_sections",
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="space-y-6 rounded-md border p-4">
          {fields.map((script, index) => (
            <div key={script.id} className="space-y-2">
              <div className="flex items-center rounded-md bg-muted px-3 py-2">
                <KeyboardIcon className="mr-2 h-4 w-4 " />
                <p className="text-sm font-medium">Para {index + 1}</p>
              </div>
              <FormField
                control={form.control}
                name={`script_sections.${index}.content`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            <>
              {form.formState.isSubmitting
                ? "Generating..."
                : "Save & Generate Video"}
              {form.formState.isSubmitting ? (
                <ReloadIcon className="ml-2 animate-spin" />
              ) : (
                <ArrowRightIcon className="ml-2" />
              )}
            </>
          </Button>
        </div>
      </form>
    </Form>
  );
}
