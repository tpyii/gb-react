import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists } from "./features/gists/gistsSlice";

function Gists() {
  const dispatch = useDispatch();
  const gists = useSelector((state) => state.gists.gists);
  const error = useSelector((state) => state.gists.error);
  const loading = useSelector((state) => state.gists.loading);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description}</li>,
    []
  );

  const requestGists = () => {
    dispatch(getGists());
  }

  useEffect(() => {
    requestGists();
  }, []);

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }
  
  return <ul>{gists.map(renderGist)}</ul>;
};

export default Gists;
