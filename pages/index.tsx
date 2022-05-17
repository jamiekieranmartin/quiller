import dayjs from "../lib/dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useNotes } from "../lib/useNotes";
import { AddIcon, ArrowDownIcon, GitHubIcon } from "../components/icons";
import { Input, Nav } from "../components";
import { Icon } from "../components/icon";
import { Layout } from "../components/layout";
import { useForm } from "react-hook-form";

type Form = {
  search: string;
  order_by: "desc" | "asc";
};

const Page: NextPage = () => {
  const { notes } = useNotes();

  const { register, watch, setValue } = useForm<Form>({
    defaultValues: {
      search: "",
      order_by: "desc",
    },
  });

  const { search, order_by } = watch();

  const equals = (content: string) => content.toLowerCase().includes(search.toLowerCase());

  const filtered_notes = notes
    .filter(
      ({ title, content }) => equals(title) || equals(content)
    )
    .sort((a, b) => {
      switch (order_by) {
        case "asc":
          return a.created_at - b.created_at;
        default:
          return b.created_at - a.created_at;
      }
    });

  const orientation = order_by === "asc" ? "rotate-180" : "";

  return (
    <Layout>
      <Nav>
        <Link href="/new">
          <Icon>
            <AddIcon />
          </Icon>
        </Link>

        <Input
          id="search"
          className="order-last sm:order-none sm:mx-auto text-lg"
          placeholder="Search..."
          {...register("search")}
        >
          Search
        </Input>

        <Icon
          className={`sm:ml-auto ${orientation}`}
          onClick={() =>
            setValue("order_by", order_by === "asc" ? "desc" : "asc")
          }
        >
          <ArrowDownIcon />
        </Icon>

        <Link
          href="https://github.com/jamiekieranmartin/quiller"
          rel="noreferrer noopener"
        >
          <Icon>
            <GitHubIcon />
          </Icon>
        </Link>
      </Nav>

      <section className="w-full flex-grow overflow-y-auto px-2">
        <div className="w-full grid max-w-prose mx-auto divide-y divide-black/10 divide-dashed">
          {filtered_notes.length ? (
            filtered_notes.map((note) => {
              const created_at = dayjs(note.created_at);
              return (
                <Link key={note.id} href={`/${note.id}`}>
                  <a className="hover:opacity-50 transition-all duration-300 ease-in-out">
                    <article className="flex flex-col my-3">
                      <h1 className="w-full font-bold text-2xl py-2 px-3">
                        {note.title}
                      </h1>

                      <small className="px-3 opacity-50">
                        {created_at.format("LLLL")}
                      </small>

                      <p className="w-full flex-grow text-lg py-2 px-3 line-clamp-1 whitespace-pre-line">
                        {note?.content}
                      </p>
                    </article>
                  </a>
                </Link>
              );
            })
          ) : (
            <div className="flex flex-col justify-center text-center py-16">
              <small>
                You have no notes,{" "}
                <Link href="/new">
                  <a className="underline">start writing</a>
                </Link>{" "}
                ✏️
              </small>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Page;
