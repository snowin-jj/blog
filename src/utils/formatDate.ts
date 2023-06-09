type FormatOption = {
  day?: boolean;
  month?: boolean;
  year?: boolean;
};

export const formatDate = (
  date: string,
  { day = false, month = false, year = false }: FormatOption
) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: day ? 'numeric' : undefined,
    month: month ? 'short' : undefined,
    year: year ? 'numeric' : undefined,
  });
};

export const getYear = (date?: string) => new Date(date!).getFullYear();
