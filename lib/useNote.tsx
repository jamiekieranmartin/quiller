import { useEffect, useMemo, useState } from "react";
import * as storage from "./storage";
import { Response, Note } from "./types";

type useNote = (id: string) => {
  note?: Note;
  mutate: {
    new: (note: Note) => Response<Note>;
    edit: (note: Note) => Response<Note>;
    delete: (id: string) => Response<Note>;
  };
  refresh: () => void;
};

export const useNote: useNote = (id = "") => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [note, setNote] = useState<Note | undefined>();

  useEffect(() => {
    const { data, error } = storage.getNote(id);
    if (error) window.alert(error.message);
    if (data) setNote(data);
  }, [id, refresh]);

  const mutate = useMemo(
    () => ({
      new: storage.newNote,
      edit: storage.editNote,
      delete: storage.deleteNote,
    }),
    []
  );

  return { note, mutate, refresh: () => setRefresh(!refresh) };
};
