interface InputProps {
  name: string;
  label: string;
  register: any;
  required: boolean;
  type: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  name,
  label,
  register,
  required,
  type,
}) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} ref={register({ required })} />
  </>
);
