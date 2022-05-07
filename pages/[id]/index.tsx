import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNote } from "../../lib/useNote";

const Page: NextPage = () => {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { note, mutate } = useNote(id!);

  return (
    <section className="h-screen max-w-prose mx-auto py-16 px-2">
      <nav>
        <Link href="/">
          <a>
            <h1 className="text-xl font-bold">✏️ quiller</h1>
          </a>
        </Link>

        <Link href="/">
          <button className="group icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 stroke-stone-900 group-hover:stroke-white transition-all duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </Link>
        <Link href={`/${id}/edit`}>
          <button className="group icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 stroke-stone-900 group-hover:stroke-white transition-all duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => {
            const { error } = mutate.delete(id!);
            if (error) window.alert(error.message);
            else router.push("/");
          }}
          className="group icon-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 stroke-stone-900 group-hover:stroke-white transition-all duration-300 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </nav>

      <article className="flex flex-col h-full gap-4">
        <h1 className="w-full font-bold text-2xl py-2 px-3 focus:outline-none">
          {note?.title}
        </h1>

        <div className="w-full flex-grow text-lg py-2 px-3 focus:outline-none">
          {note?.content}
        </div>
      </article>
    </section>
  );
};

export default Page;
