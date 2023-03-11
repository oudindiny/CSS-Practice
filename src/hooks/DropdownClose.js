import { useEffect, useRef, useState } from "react";

const DropdownClose = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(isOpen);
      }
    };
  }, []);
};
