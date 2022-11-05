import { useState, useEffect } from 'react';

const useFetch = ({ initialState, fetchFunction, query = '' }) => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    const getItems = async () => {
      setState(prevState => ({ ...prevState, loading: true }));
      try {
        const items = query
          ? await fetchFunction(query)
          : await fetchFunction();
        setState(prevState => ({ ...prevState, items, loading: false }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error, loading: false }));
      }
    };
    getItems();
  }, [fetchFunction, query]);

  return { state, setState };
};

export default useFetch;
