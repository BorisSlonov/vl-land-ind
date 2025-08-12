import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";

type FormItemProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "checkbox" | "textarea";
  value?: string;
  checked?: boolean;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const FormItem = ({
  id,
  label,
  type = "text",
  value,
  checked,
  required,
  error,
  onChange,
}: FormItemProps) => {
  return (
    <div className={styles.formItem}>
      {type === "checkbox" ? (
        <label
          htmlFor={id}
          className={clsx(
            styles.formLabel,
            type === "checkbox" ? styles.formLabelCheckbox : ""
          )}
        >
          {label}
        </label>
      ) : undefined}

      {(type === "text" || type === "email") && (
        <input
          type={type}
          id={id}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={label}
          required={required}
        />
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          className={clsx(styles.input, styles.inputTextarea)}
          value={value}
          onChange={onChange}
          placeholder={"0"}
          required={required}
        />
      )}

      {type === "checkbox" && (
        <input
          type="checkbox"
          id={id}
          className={clsx(styles.checkbox)}
          checked={checked}
          onChange={onChange}
          required={required}
        />
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
