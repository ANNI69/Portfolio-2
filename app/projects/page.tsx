import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Projects() {
  const projects = [
    {
      title: "E Commerce",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://github.com/ANNI69/e-commerce.git",
    },
    {
      title: "Sync Beat",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://github.com/ANNI69/SyncBeat-Music-Player.git",
    },
    {
      title: "Next-Word-Predictor",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://github.com/ANNI69/Next-Word-Predictor.git",
    },
    {
      title: "Fabric",
      description:
        "A Clothing brand that offers a wide range of products Like Hoddies and much more.",
      link: "fabric-one.vercel.app",
    },
    {
      title: "Doot - News App",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://github.com/ANNI69/Doot.git",
    }
  ];
  return (
    <>
      <div className="pb-10 bg-black">
      <a href="/homepage"><h1 className="text-white text-center text-4xl font-bold pt-10 float-left pl-10">←</h1></a>
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
