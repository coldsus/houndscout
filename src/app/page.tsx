export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col px-16 pt-32 pb-16 bg-white dark:bg-black">
        <h1 className="text-primary font-boldfont text-5xl lg:text-6xl tracking-widest">
          Tech hounds Scouting system
        </h1>

        <div className="mt-16 flex w-full items-center justify-between">
          <h2 className="text-left text-primary font-boldfont text-3xl lg:text-4xl tracking-widest">
            Scout a team
          </h2>

          <h2 className="text-right text-primary font-boldfont text-3xl lg:text-4xl tracking-widest">
            Pick list
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-120 text-base font-medium sm:flex-row">
          <input
            className="h-12 w-full rounded-full border border-solid border-black/[.12] bg-white px-5 text-foreground outline-none transition-colors placeholder:text-black/40 focus:border-foreground dark:border-white/[.18] dark:bg-black dark:placeholder:text-white/40 md:w-[300px]"
            type="text"
            placeholder="Enter team number"
          />
          <input
            className="h-12 w-full rounded-full border border-solid border-black/[.12] bg-white px-5 text-foreground outline-none transition-colors placeholder:text-black/40 focus:border-foreground dark:border-white/[.18] dark:bg-black dark:placeholder:text-white/40 md:w-[300px]"
            type="text"
            placeholder="Enter a tournament"
          />
        </div>
      </main>
    </div>
  );
}