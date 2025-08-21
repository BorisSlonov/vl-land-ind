"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FormItem } from "@/shared/ui/FormItem";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  privacy: boolean;
  requestText?: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

interface Props {
  requestSoft?: boolean;
}

const Form = ({ requestSoft }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    privacy: false,
    requestText: requestSoft
      ? "запрос приложения VIBRO-LASER INDICATOR"
      : undefined,
  });

  useEffect(() => {
    // если проп поменялся — синхронизируем скрытое поле
    setFormData((prev) => ({
      ...prev,
      requestText: requestSoft
        ? "запрос приложения VIBRO-LASER INDICATOR"
        : undefined,
    }));
  }, [requestSoft]);

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
    if (!formData.fullName) newErrors.fullName = "";
    if (!formData.phone) newErrors.phone = "";
    if (!formData.email) newErrors.email = "";
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
      const payload = { ...formData };
      if (!requestSoft) {
        delete payload.requestText;
      }

      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send feedback");

      const goal = requestSoft ? "request_soft" : "lead_sent";
      if (
        typeof window !== "undefined" &&
        typeof (window as any).ym === "function"
      ) {
        (window as any).ym(103833901, "reachGoal", goal);
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        privacy: false,
        requestText: requestSoft
          ? "приложение VIBRO-LASER INDICATOR"
          : undefined,
      });
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
      {/* скрытое поле только при requestSoft */}
      {requestSoft && (
        <input
          type="hidden"
          id="requestText"
          name="requestText"
          value={formData.requestText ?? ""}
          readOnly
        />
      )}

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
            <span>{isLoading ? "Отправляем..." : "Отправить"}</span>
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
          <a href="/personal-data">согласие на обработку</a> своих персональных
          данных в соответствии с{" "}
          <a href="/privacy-policy">политикой конфиденциальности</a>
        </div>
      </div>
    </form>
  );
};

export default Form;
