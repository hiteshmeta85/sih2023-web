import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const FormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Please enter a prompt",
  }),
});

export function PromptInput() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-screen-md rounded-3xl bg-white/30 p-3">
          <div className="flex items-center gap-2 rounded-2xl bg-primary p-4">
            <div className="inline-flex h-10 items-center justify-center rounded-full bg-violet-500 px-8 text-sm">
              Generate:
            </div>
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={"Enter a prompt"}
                      className="w-full flex-1 border-none bg-primary text-lg text-background shadow-none focus-visible:ring-0 focus-visible:ring-primary focus-visible:ring-offset-0"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="rounded-lg font-normal"
            >
              <>
                Start
                <ArrowRightIcon className="ml-2" />
              </>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
