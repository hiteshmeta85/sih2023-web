import { EditScriptForm } from "@/components/edit-script-form";

export default function EditScript() {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
              5.
            </p>
            <h2 className="text-4xl tracking-wider text-yellow-400">
              Edit Script
            </h2>
          </div>
          <p className="max-w-screen-md text-sm tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
            lorem non sem consectetur rhoncus. Sed nec semper nibh.
          </p>
        </div>

        <div className="mt-10">
          <EditScriptForm />
        </div>
      </div>
    </div>
  );
}
