import dayjs from "../lib/dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useNotes } from "../lib/useNotes";
import { CloseIcon } from "../components/icons";
import {
  Nav,
  Layout,
  Icon,
  Form,
  Input,
  TextArea,
  Button,
  Section,
} from "../components";

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
    <Layout>
      <Nav>
        <Link href="/">
          <Icon>
            <CloseIcon />
          </Icon>
        </Link>
      </Nav>

      <Section>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="title"
            className="text-2xl"
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
      </Section>
    </Layout>
  );
};

export default Page;
