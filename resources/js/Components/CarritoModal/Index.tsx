import { useEffect, useRef, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";

import { IoMdClose } from "react-icons/io";
interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }:PortalProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal-root");
    setMounted(true);
  }, []);
  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

interface ModalVerticalProps {
  children: ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
  blur?: boolean;
  right?: boolean;
  bgDark?: boolean;
  selectable?: boolean;
}

export default function CarritoModal({
  children,
  isOpenModal = false,
  setIsOpenModal,
  blur,
  right,
  bgDark = true,
  selectable,
}: ModalVerticalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`h-full w-full  fixed left-0 top-0 z-[200] grid place-content-center place-items-center ${
              selectable ? "pointer-events-none" : ""
            } ${blur ? "backdrop-blur-[6px]" : ""} ${
              bgDark ? "bg-black/40" : ""
            }  `}
          >
            <motion.div
              className={`absolute top-0 h-full border-x border-base-content/20 overflow-y-auto max-h-screen ${
                selectable ? "pointer-events-auto" : ""
              } ${right ? "right-0" : "left-0"}  pb-2 bg-base-100`}
              initial={right ? { x: "100%" } : { x: "-100%" }}
              animate={right ? { x: 0 } : { x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              exit={right ? { x: "100%" } : { x: "-100%" }}
            >
              <button
                onClick={() => setIsOpenModal(false)}
                className="btn absolute right-2 top-2 btn-sm btn-square "
              >
                <IoMdClose  size="24px"  />
              </button>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}