import { createContext, useContext, useMemo, useState } from 'react';

type AccordionProps = {
  selected?: string;
};

const AccordionContext = createContext({});

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      'Accordion.Collapsible, Accordion.ExpandButton and Accordion.CollapseButton must be used within an Accordion'
    );
  }
  return context;
};

const Accordion: React.FC<AccordionProps> = ({ children, ...otherProps }) => {
  const [open, setOpen] = useState(null);

  const value = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<any> = ({ children, ...otherProps }) => (
  <div style={{ height: otherProps.selected ? 'auto' : 0 }}>{children}</div>
);

export default Accordion;
