type DateInputProps = React.ComponentProps<'input'> & {
    id: string;
    label: string;
}

export const DateInput = ({ id, label, ...props }: DateInputProps) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type="date" {...props}/>
        </div>
    )
}