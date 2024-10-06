import { ChangeEvent } from "react";
import styles from "./FormInput.module.scss";
import classnames from "classnames";

type FormInputProps = {
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  type: string;
  value: string;
};

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div className={styles.group}>
      <input className={styles.formInput} {...otherProps} />
      {label && (
        <label
          className={classnames(styles.formInputLabel, {
            [styles.shrink]: otherProps.value && otherProps.value.length > 0,
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
