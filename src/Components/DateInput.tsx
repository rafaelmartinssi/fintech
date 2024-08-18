import React from "react";

type DateInputProps = React.ComponentProps<'input'> & {
    id: string;
    label: string;
}

const generalStyle: React.CSSProperties = {
    color: "var(--color-2)",
    padding: "var(--gap-s) .75rem",
    backgroundColor: "var(--color-4)",
    borderRadius: "var(--gap)"
}

const labelStyle: React.CSSProperties = {
    ...generalStyle,
    display: "block",
    marginBottom: "var(--gap-s)",
    fontWeight: "600",
}

const inputStyle: React.CSSProperties = {
    ...generalStyle,
    border: "none",
    fontFamily: "monospace",
}

export const DateInput = ({ id, label, ...props }: DateInputProps) => {
    return (
        <div>
            <label style={labelStyle} htmlFor={id}>{label}</label>
            <input style={inputStyle} id={id} name={id} type="date" {...props}/>
        </div>
    )
}