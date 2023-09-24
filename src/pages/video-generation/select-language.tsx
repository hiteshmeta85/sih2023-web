import { LANGUAGES } from "@/constants";

export default function SelectLanguage() {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center p-4">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <p className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground text-4xl">
              2.
            </p>
            <h2 className="text-4xl tracking-wider text-yellow-400">
              Select Language
            </h2>
          </div>
          <p className="max-w-screen-md text-sm tracking-wide text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis elit vel urna cursus suscipit et ac risus. Phasellus viverra
            lorem non sem consectetur rhoncus. Sed nec semper nibh.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-5 gap-4">
          {LANGUAGES.map((language) => (
            <div
              key={language.value}
              onClick={() => {
                console.log(language.value);
              }}
              className="relative flex transform cursor-pointer flex-col items-center justify-center space-y-2 rounded-xl border-2 p-10 transition-all duration-300 hover:bg-primary-foreground"
            >
              {language.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
