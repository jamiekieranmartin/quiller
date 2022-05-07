export type Note = {
  id: string;
  title: string;
  content: string;
  created_at: number;
  updated_at: number;
};

export type Response<T> = {
  data: T | null;
  error?: Error;
};
