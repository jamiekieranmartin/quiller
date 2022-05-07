import { Note, Response } from "./types";

// getNotesFromStorage retrieves notes from localstorage
const getNotesFromStorage = (): Response<Note[]> => {
  try {
    const notes = localStorage.getItem("notes") || "[]";

    return {
      data: JSON.parse(notes) as Note[],
    };
  } catch (error: any) {
    return {
      data: null,
      error,
    };
  }
};

// writeNotesToStorage writes notes to localstorage
const writeNotesToStorage = (notes: Note[]): Response<never> => {
  try {
    const data = JSON.stringify(notes);
    localStorage.setItem("notes", data);
    return { data: null };
  } catch (error: any) {
    return {
      data: null,
      error,
    };
  }
};

// newNote to storage
export const newNote = (note: Note): Response<Note> => {
  const { data: notes, error } = getNotesFromStorage();
  if (error) {
    return {
      data: null,
      error,
    };
  }
  {
    notes?.unshift(note);

    const { error } = writeNotesToStorage(notes as Note[]);
    if (error) {
      return {
        data: null,
        error,
      };
    }

    return {
      data: note,
    };
  }
};

// listNotes in storage
export const listNotes = (): Response<Note[]> => {
  return getNotesFromStorage();
};

// getNote from storage
export const getNote = (id: string): Response<Note> => {
  const { data, error } = getNotesFromStorage();
  if (error) {
    return {
      data: null,
      error,
    };
  }

  const note = (data as Note[]).find((note) => note.id === id) || null;

  return {
    data: note,
  };
};

// editNote in storage
export const editNote = (note: Note): Response<Note> => {
  const { data, error } = getNotesFromStorage();
  if (error) {
    return {
      data: null,
      error,
    };
  }

  const notes = (data as Note[]).map((n) => {
    if (n.id === note.id) {
      return { ...note, id: n.id };
    }

    return n;
  });

  return writeNotesToStorage(notes);
};

// deleteNote from storage
export const deleteNote = (id: string): Response<Note> => {
  const { data, error } = getNotesFromStorage();
  if (error) {
    return {
      data: null,
      error,
    };
  }

  const notes = (data as Note[]).filter((note) => note.id !== id);

  return writeNotesToStorage(notes);
};
