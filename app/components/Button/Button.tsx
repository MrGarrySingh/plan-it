import { ReactNode, ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

type ButtonType = "google" | "inverted";

type ButtonProps = {
  buttonType?: ButtonType;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={classnames(styles.buttonContainer, {
        [styles.googleSignIn]: buttonType === "google",
        [styles.inverted]: buttonType === "inverted",
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
