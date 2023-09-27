import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GENDER_OPTIONS } from "@/constants";

export const UpdateAvatarFormSchema = z.object({
  nickname: z
    .string()
    .nonempty({
      message: "Nickname cannot be empty",
    })
    .min(2, {
      message: "Nickname must be at least 2 characters long",
    })
    .max(20, {
      message: "Nickname must be at most 20 characters long",
    }),
  description: z.string().nonempty({
    message: "Description cannot be empty",
  }),
  gender: z.string().nonempty({
    message: "Gender cannot be empty",
  }),
});

export function UpdateAvatarForm({
  onSubmit,
}: {
  onSubmit: (data: z.infer<typeof UpdateAvatarFormSchema>) => void;
}) {
  const form = useForm<z.infer<typeof UpdateAvatarFormSchema>>({
    resolver: zodResolver(UpdateAvatarFormSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input placeholder="eg. JohnDoe92" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="eg. Tech enthusiast and software developer with a passion for AI and machine learning. Exploring the endless possibilities of technology."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="gender"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormDescription>
                Pick a voice gender for text-to-speech
              </FormDescription>
              <div className="flex flex-wrap gap-2">
                {GENDER_OPTIONS.map((option) => (
                  <Button
                    key={option.value}
                    type="button"
                    variant={
                      field.value === option.value ? "secondary" : "outline"
                    }
                    onClick={() => field.onChange(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isSubmitting}>
          Save
        </Button>
      </form>
    </Form>
  );
}
