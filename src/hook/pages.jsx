import { createContext, useContext, useState, useEffect } from "react";

export const PageContext = createContext({});

function PageProvider({ children }) {
  const [page, setPage] = useState(JSON.parse(localStorage.getItem(`@sistemaestoque:page`)));
  const [active, setActive] = useState(JSON.parse(localStorage.getItem(`@sistemaestoque:active`)));


  useEffect(() => {
    localStorage.setItem(`@sistemaestoque:page`, JSON.stringify(page));
    localStorage.setItem(`@sistemaestoque:active`, JSON.stringify(active));
  }, [page]);


  return (
    <PageContext.Provider value={{ page, setPage, active, setActive }}>
      {children}
    </PageContext.Provider>
  );
}

function usePage() {
  const context = useContext(PageContext);
  return context;
}

export { PageProvider, usePage };
