import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { getCatsFetch } from "./store/cat/catState";

function App() {
  const cats = useSelector((state: RootState) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <>
      <h1>Cats</h1>
      {cats.map((cat: any) => (
        <li>{cat.name}</li>
      ))}
    </>
  );
}

export default App;
