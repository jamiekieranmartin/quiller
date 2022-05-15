import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNote } from "../../lib/useNote";
import { Icon, Layout, Nav } from "../../components";
import { ArrowRightIcon, DeleteIcon, EditIcon } from "../../components/icons";

const Page: NextPage = () => {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { note, mutate } = useNote(id!);

  return (
    <Layout>
      <Nav>
        <Link href="/">
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </Link>
        <Link href={`/${id}/edit`}>
          <Icon>
            <EditIcon />
          </Icon>
        </Link>

        <button
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you wish to delete this?"
            );
            if (!confirm) return;

            const { error } = mutate.delete(id!);
            if (error) return window.alert(error.message);

            router.push("/");
          }}
          className="group icon-button"
        >
          <DeleteIcon />
        </button>
      </Nav>

      <article className="flex flex-col h-full gap-4">
        <h1 className="w-full font-bold text-2xl py-2 px-3 focus:outline-none">
          {note?.title}
        </h1>

        <div className="w-full flex-grow text-lg py-2 px-3 focus:outline-none whitespace-pre-line">
          {note?.content}
        </div>
      </article>
    </Layout>
  );
};

export default Page;
