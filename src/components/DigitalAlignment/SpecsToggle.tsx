"use client";

import clsx from "clsx";
import styles from "./styles.module.css";

type SpecsToggleProps = {
  showAll: boolean;
  onShowAll: () => void;
  onBack: () => void;
};

const SpecsToggle = ({ showAll, onShowAll, onBack }: SpecsToggleProps) => {
  return (
    <div className={styles.headerRightInner}>
      {!showAll ? (
        <button
          type="button"
          className={clsx(styles.headerBtn, styles.headerBtnPrimary)}
          onClick={onShowAll}
        >
          Все характеристики
        </button>
      ) : (
        <button
          type="button"
          className={clsx(styles.headerBtn, styles.headerBtnIcon)}
          aria-label="Назад к кратким характеристикам"
          onClick={onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
            focusable="false"
          >
            <path
              d="M19 10L1 10"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 1L1 10"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 19L1 10"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SpecsToggle;
