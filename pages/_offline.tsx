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
            <h1 className="text-xl font-bold">✏️ quiller</h1>
          </a>
        </Link>
      </nav>

      <small className="py-16 my-16 text-center">You are offline.</small>
    </section>
  );
};

export default Page;
