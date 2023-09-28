import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import DisclaimerCard from "@/components/disclaimer-card";

export const PromptFormSchema = z.object({
  prompt: z.string().min(1, {
    message: "Please enter a prompt",
  }),
});

export function PromptInput({
  placeholder = "Enter a prompt",
  onSubmit,
}: {
  placeholder?: string;
  onSubmit: (data: z.infer<typeof PromptFormSchema>) => void;
}) {
  const form = useForm<z.infer<typeof PromptFormSchema>>({
    resolver: zodResolver(PromptFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-screen-md transform rounded-3xl bg-primary/30 p-3 transition-all duration-300 focus-within:bg-gradient-to-r focus-within:from-violet-500 focus-within:to-blue-500">
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
                      placeholder={placeholder}
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
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              <>
                {form.formState.isSubmitting ? "Generating..." : "Start"}
                {form.formState.isSubmitting ? (
                  <ReloadIcon className="ml-2 animate-spin" />
                ) : (
                  <ArrowRightIcon className="ml-2" />
                )}
              </>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
