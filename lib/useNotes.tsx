import React, { useEffect, useMemo, useState } from "react";
import * as storage from "./storage";
import { Response, Note } from "./types";

type useNotesResult = {
  notes: Note[];
  mutate: {
    new: (note: Note) => Response<Note>;
    edit: (note: Note) => Response<Note>;
    delete: (id: string) => Response<Note>;
  };
  refresh: () => void;
};

export const useNotes = (): useNotesResult => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const { data, error } = storage.listNotes();
    if (error) window.alert(error.message);
    if (data) setNotes(data);
  }, [refresh]);

  const mutate = useMemo(
    () => ({
      new: storage.newNote,
      edit: storage.editNote,
      delete: storage.deleteNote,
    }),
    []
  );

  return { notes, mutate, refresh: () => setRefresh(!refresh) };
};
