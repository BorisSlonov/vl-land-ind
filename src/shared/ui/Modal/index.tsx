"use client";

import React, { useEffect, useCallback, useState } from "react";
import styles from "./styles.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeWithAnimation();
    }
  }, []);

  const closeWithAnimation = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.fadeOut : ""}`}
      onClick={closeWithAnimation}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.modalFadeOut : ""}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className={styles.closeButton}
          onClick={closeWithAnimation}
          aria-label="Close"
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
