import dayjs from "../lib/dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useNotes } from "../lib/useNotes";
import { AddIcon } from "../components/icons";
import { Nav } from "../components";
import { Icon } from "../components/icon";
import { Layout } from "../components/layout";

const Page: NextPage = () => {
  const { notes } = useNotes();

  return (
    <Layout>
      <Nav>
        <Link href="/new">
          <Icon>
            <AddIcon />
          </Icon>
        </Link>
      </Nav>

      {notes.length ? (
        notes.map((note) => {
          const created_at = dayjs(note.created_at);
          return (
            <Link key={note.id} href={`/${note.id}`}>
              <a className="hover:opacity-50 transition-all duration-300 ease-in-out">
                <article className="flex flex-col">
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
    </Layout>
  );
};

export default Page;
