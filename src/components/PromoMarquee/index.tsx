"use client";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import styles from "./style.module.css";
import Link from "next/link";

interface Program {
  id: number;
  text: string;
  file?: {
    url?: string;
  };
}

const PromoMarquee: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(
          "https://vibro-laser.institute/api/marquees?populate=*"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch programs");
        }
        const json = await res.json();
        setPrograms(json.data || []);
      } catch (error) {
        console.error("Error fetching programs:", error);
        setPrograms([]);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section className={styles.section}>
      <Marquee>
        <ul className={styles.programs}>
          {programs.map((program) => (
            <li className={styles.program} key={program.id}>
              {program.file?.url ? (
                <Link
                  target="_blank"
                  className={styles.link}
                  href={"https://vibro-laser.institute" + program.file.url}
                  download
                >
                  {program.text}
                </Link>
              ) : (
                <span className={styles.link}>{program.text}</span>
              )}
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
};

export default PromoMarquee;
