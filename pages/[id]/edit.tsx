import dayjs from "../../lib/dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useNote } from "../../lib/useNote";
import { Note } from "../../lib/types";
import { useEffect } from "react";
import {
  Button,
  TextArea,
  Form,
  Icon,
  Input,
  Layout,
  Nav,
} from "../../components";
import { ArrowRightIcon } from "../../components/icons";

type Form = {
  title: string;
  content: string;
};

const Page: NextPage = () => {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { note, mutate } = useNote(id!);

  const { register, handleSubmit, setValue } = useForm<Form>({
    defaultValues: {
      title: note?.title,
      content: note?.content,
    },
  });

  useEffect(() => {
    if (note) {
      setValue("title", note?.title);
      setValue("content", note.content);
    }
  }, [note]);

  const onSubmit = (formData: Form) => {
    const updated_at = +dayjs();

    const { data, error } = mutate.edit({
      ...(note as Note),
      ...formData,
      updated_at,
    });

    if (error) window.alert(error.message);

    router.push(`/${id}`);
  };

  return (
    <Layout>
      <Nav>
        <Link href={`/${id}`}>
          <Icon>
            <ArrowRightIcon />
          </Icon>
        </Link>
      </Nav>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          required
          minLength={3}
          placeholder="Title..."
          {...register("title")}
        >
          Title
        </Input>

        <TextArea
          id="content"
          required
          placeholder="Content..."
          {...register("content")}
        >
          Content
        </TextArea>

        <Button type="submit">Save</Button>
      </Form>
    </Layout>
  );
};

export default Page;
