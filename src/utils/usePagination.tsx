import { useState } from "react";

const usePagination = (): [number, () => void, () => void] => {
  const [page, setPage] = useState(1);

  const handleIncrement = () => setPage((prevState) => prevState + 1);
  const handleDecrement = () => setPage((prevState) => prevState - 1);

  return [page, handleIncrement, handleDecrement];
};

export default usePagination;
