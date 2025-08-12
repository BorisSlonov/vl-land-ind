import { colorsKit } from "@/shared/config/colors";
import React from "react";

interface Props {
    className?: string;
}

const TGIcon: React.FC<Props> = ({ className }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="61"
            fill="none"
            viewBox="0 0 60 61"
            className={className}
        >
            <g clipPath="url(#clip0_357_52)">
                <path
                    fill="#7BF2DA"
                    d="M30 60.5c16.568 0 30-13.432 30-30 0-16.568-13.431-30-30-30-16.569 0-30 13.432-30 30 0 16.568 13.432 30 30 30z"
                ></path>
                <path
                    fill="#1E1E1E"
                    d="M12.486 30.24s15-6.156 20.202-8.324c1.994-.867 8.757-3.642 8.757-3.642s3.121-1.213 2.861 1.735c-.086 1.214-.78 5.462-1.474 10.058-1.04 6.502-2.167 13.612-2.167 13.612s-.174 1.995-1.648 2.342-3.901-1.214-4.335-1.561c-.347-.26-6.503-4.162-8.757-6.07-.607-.52-1.3-1.56.087-2.774 3.121-2.861 6.85-6.416 9.104-8.67 1.04-1.041 2.08-3.469-2.255-.52-6.156 4.248-12.225 8.236-12.225 8.236s-1.387.867-3.988.087c-2.602-.78-5.636-1.821-5.636-1.821s-2.081-1.3 1.474-2.688z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_357_52">
                    <path
                        fill="#fff"
                        d="M0 0H60V60H0z"
                        transform="translate(0 .5)"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export default TGIcon;