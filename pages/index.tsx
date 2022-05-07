import dayjs from "../lib/dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useNotes } from "../lib/useNotes";

const Page: NextPage = () => {
  const { notes } = useNotes();

  return (
    <section className="max-w-prose mx-auto grid gap-8 py-16 px-2">
      <nav>
        <Link href="/">
          <a>
            <h1 className="text-xl font-bold">quiller</h1>
          </a>
        </Link>

        <Link href="/new">
          <button className="group icon-button">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </Link>
      </nav>

      {notes.length ? (
        notes.map((note) => {
          const created_at = dayjs(note.created_at);
          return (
            <Link key={note.id} href={`/${note.id}`}>
              <a className="hover:opacity-50 transition-all duration-300 ease-in-out">
                <article className="flex flex-col h-full">
                  <h1 className="w-full font-bold text-2xl py-2 px-3">
                    {note.title}
                  </h1>

                  <small className="px-3 opacity-50">
                    {created_at.format("LLLL")}
                  </small>

                  <p className="w-full flex-grow text-lg py-2 px-3 line-clamp-1">
                    {note?.content}
                  </p>
                </article>
              </a>
            </Link>
          );
        })
      ) : (
        <small className="py-16 my-16 text-center">
          You have no notes,{" "}
          <Link href="/new">
            <a className="underline">start writing</a>
          </Link>
        </small>
      )}
    </section>
  );
};

export default Page;
