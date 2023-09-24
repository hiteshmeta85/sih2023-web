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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRightIcon,
  KeyboardIcon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

const FormSchema = z.object({
  script: z
    .array(
      z.object({
        text: z.string().nonempty({
          message: "Text cannot be empty",
        }),
      }),
    )
    .min(1, {
      message: "At-least one script is required",
    }),
});

export function EditScriptForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      script: [
        {
          text: "",
        },
      ],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "script",
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

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
                name={`script.${index}.text`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                {index === fields.length - 1 && (
                  <Button
                    type="button"
                    size="sm"
                    onClick={() =>
                      append({
                        text: "",
                      })
                    }
                  >
                    <PlusIcon className="mr-1 h-4 w-4" />
                    Add
                  </Button>
                )}
                <div className="w-2" />
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                >
                  <TrashIcon className="mr-1 h-4 w-4" />
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            <>
              Save & Generate Video
              <ArrowRightIcon className="ml-2" />
            </>
          </Button>
        </div>
      </form>
    </Form>
  );
}
