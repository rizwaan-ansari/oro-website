import Image from "next/image";
import Hero from "@components/Hero"
import ClientLogos from "@components/ClientLogos";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ClientLogos />
    </main>
  );
}
