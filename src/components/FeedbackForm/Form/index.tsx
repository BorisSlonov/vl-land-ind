"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FormItem } from "@/shared/ui/FormItem";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  privacy: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    const isChecked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? isChecked : value,
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullName) newErrors.fullName = "Это поле обязательное";
    if (!formData.phone) newErrors.phone = "Это поле обязательное";
    if (!formData.email) newErrors.email = "Это поле обязательное";
    else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Неверный формат почты";
    if (!formData.privacy) newErrors.privacy = "error";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setIsSuccess(false);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send feedback");
      setIsSuccess(true);
      setFormData({ fullName: "", phone: "", email: "", privacy: false });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    const t = setTimeout(() => setIsSuccess(false), 5000);
    return () => clearTimeout(t);
  }, [isSuccess]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormItem
        id="fullName"
        label="ФИО"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />
      <FormItem
        id="phone"
        label="Номер для связи"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <FormItem
        id="email"
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <div className={styles.formItemFooter}>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} type="submit" disabled={isLoading}>
            <span> {isLoading ? "Отправляем..." : "Отправить"}</span>
          </button>

          {isSuccess && (
            <div className={styles.successMessage}>
              <p className={styles.successMessageP}>
                Спасибо за заявку, мы свяжемся с вами в ближайшее время!
              </p>
            </div>
          )}
        </div>
        <div className={styles.checkbox}>
          <FormItem
            label=""
            id="privacy"
            type="checkbox"
            required
            checked={formData.privacy}
            onChange={handleChange}
            error={errors.privacy}
          />
        </div>
        <div className={styles.privacyTxt}>
          Отправляя заявку, вы даёте{" "}
          <a href="/persosnal-data">согласие на обработку</a> своих персональных
          данных в соответствии с{" "}
          <a href="/privacy-policy">политикой конфиденциальности</a>
        </div>
      </div>
    </form>
  );
};

export default Form;
