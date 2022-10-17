import { useCallback, useEffect, useState } from "react";

export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";

function Gists() {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  const requestGists = async () => {
    setLoading(true);

    try {
      const response = await fetch(API_URL_PUBLIC);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setGists(result);
    } catch (error) {
      setError(true);
      console.warn(error);
    } finally {
      setLoading(false);
    }
  }

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description}</li>,
    []
  );

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
