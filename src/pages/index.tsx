import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  Pencil1Icon,
  PersonIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import avatar5 from "@/images/avatar_5.jpg";
import avatar6 from "@/images/avatar_6.jpg";

// const icons = [
//   {
//     id: 1,
//     icon: <VideoIcon />,
//     title: 'Video',
//   },
//   {
//     id: 2,
//     icon: <PersonIcon />,
//     title: 'AI avatar',
//   },
//   {
//     id: 3,
//     icon: <VideoIcon />,
//     title: 'AI voice',
//   },
//   {
//     id: 4,
//     icon: <Pencil1Icon />,
//     title: 'Text to Video',
//   },
//   {
//     id: 5,
//     icon: <FileTextIcon />,
//     title: 'AI Templates',
//   },
//   {
//     id: 6,
//     icon: <VideoIcon />,
//     title: 'More Videos',
//   },
// ]

export default function Home() {
  return (
    <main className="m-4 min-h-screen bg-background">
      <Navbar />
      <hr />
      <div className="mx-auto mb-[4rem] mt-[14rem]  grid space-y-8 text-center md:container">
        <div className="text-3xl font-bold leading-loose md:text-5xl">
          <p className="p-2">Make Great Videos</p>
          <p className="p-2">Automate Your Brand</p>
        </div>
        <p className="md:text-md mx-auto w-[40%] text-sm">
          Automatically create short, highly-sharable branded videos from your
          long form content.
        </p>

        <div className="mx-auto grid grid-cols-3 gap-4 md:grid-cols-6">
          <div className="flex cursor-pointer flex-col items-center gap-3">
            <VideoIcon className="h-[50px] w-[50px] rounded-full bg-amber-300 p-2 text-white" />
            <p>Video</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-3">
            <PersonIcon className="h-[50px] w-[50px] rounded-full bg-blue-400 p-2 text-white" />
            <p>AI avatar</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-3">
            <VideoIcon className="h-[50px] w-[50px] rounded-full bg-fuchsia-400 p-2 text-white" />
            <p>AI voice</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-3">
            <Pencil1Icon className="h-[50px] w-[50px] rounded-full bg-indigo-600 p-2 text-white" />
            <p>Text to Video</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-3">
            <FileTextIcon className="h-[50px] w-[50px] rounded-full bg-purple-500 p-2 text-white" />
            <p>AI Templates</p>
          </div>
          <div className="flex cursor-pointer flex-col items-center gap-3">
            <VideoIcon className="h-[50px] w-[50px] rounded-full bg-orange-400 p-2 text-white" />
            <p>More Videos</p>
          </div>
        </div>

        <div>
          <Button
            className="my-[4rem] w-fit rounded-full bg-violet-500 py-2"
            variant="secondary"
          >
            Create a free AI Video
          </Button>
        </div>

        <div className="mx-auto rounded-lg bg-zinc-800 p-[4rem] text-2xl font-bold text-white md:text-4xl">
          <p className="p-2">START YOUR JOURNEY</p>
          <p className="p-2">ASK THE AI TO DESIGN</p>
        </div>

        <div className="mx-auto grid w-[70%] gap-6 py-[4rem] md:grid-cols-2">
          <div>
            <p className="text-left text-3xl font-bold">
              Stark.inc is revolutionizing the field of AI image generation with
              its innovation solutions.
            </p>
          </div>
          <div className="md:col-start-1 md:row-span-2">
            <Image
              src={avatar5}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
          <div>
            <p className="text-left text-3xl font-bold">
              Stark.inc is revolutionizing the field of AI image generation with
              its innovation solutions.
            </p>
          </div>
          <div>
            <Image
              src={avatar6}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="py-4 text-2xl font-bold md:container">
        <p>ART CREATED BY AI:</p>
      </div>

      <div className="no-scrollbar mb-[8rem] flex cursor-pointer gap-4 overflow-x-auto">
        <Image
          src={avatar6}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar5}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar6}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar5}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar6}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar5}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar6}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar5}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar6}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
        <Image
          src={avatar5}
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-md"
        />
      </div>

      <hr className="mb-[2rem]" />
      <Footer />
    </main>
  );
}
