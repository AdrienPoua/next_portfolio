import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-center">
        Bienvenue sur mon portfolio !
      </h1>
      <Image
        src="/images/illustration.svg"
        alt="Illustration"
        width={500}
        height={500}
      />
    </main>
  );
}
