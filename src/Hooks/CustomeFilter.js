import { useState } from "react";

export function CustomeFilter(datalist, callBack) {
  const [query, setQuery] = useState("");

  const filterData = datalist.filter((expense) =>
    callBack(expense).toLowerCase().includes(query)
  );
  return [filterData, setQuery];
}
