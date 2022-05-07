import dayjs from "../lib/dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useNotes } from "../lib/useNotes";

type Form = {
  title: string;
  content: string;
};

const Page: NextPage = () => {
  const router = useRouter();
  const { mutate } = useNotes();

  const { register, handleSubmit } = useForm<Form>();

  const onSubmit = (data: Form) => {
    const created_at = +dayjs();

    const { data: note, error } = mutate.new({
      ...data,
      id: `${created_at}`,
      created_at,
      updated_at: 0,
    });

    if (error) window.alert(error.message);

    router.push(`/${note?.id}`);
  };

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
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>
      </nav>

      <form
        className="flex flex-col h-full gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            id="title"
            className="w-full font-bold text-2xl py-2 px-3 focus:outline-none"
            required
            minLength={3}
            placeholder="Title..."
            {...register("title")}
          />
        </div>

        <div className="flex flex-col flex-grow">
          <label htmlFor="content" className="sr-only">
            Content
          </label>
          <textarea
            id="content"
            className="w-full flex-grow text-lg py-2 px-3 focus:outline-none"
            required
            placeholder="Content..."
            {...register("content")}
          />
        </div>

        <button
          type="submit"
          className="self-end rounded shadow font-bold text-lg bg-stone-600 text-white py-2 px-4 transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-stone-600"
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default Page;
