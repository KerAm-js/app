export type TValue = { id: number; name: string } | any;

export type TSelectionProps =
  | {
      itemsList: Array<TValue>;
      value: Array<TValue>;
      selectItem: (value: TValue) => void;
      unselectItem: (value: TValue) => void;
      placeholder?: string;
      usesDataFromApi: false;
      isLoading?: boolean;
      search?: undefined;
      setSearch?: undefined;
    }
  | {
      itemsList?: Array<TValue>;
      value: Array<TValue>;
      selectItem: (value: TValue) => void;
      unselectItem: (value: TValue) => void;
      placeholder?: string;
      usesDataFromApi: true;
      isLoading: boolean;
      search: string;
      setSearch: (value: string) => void;
    };
