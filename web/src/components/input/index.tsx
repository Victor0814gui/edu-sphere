import {
  ElementType,
  HTMLAttributes,
  forwardRef,
  HTMLInputTypeAttribute,
} from "react";

import styles from "./styles.module.css";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  premium?: boolean;
  icon?: ElementType;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { premium = false, placeholder, icon: Icon, type = "text", ...rest },
    ref
  ) => {
    return (
      <div className={styles.container}>
        {Icon && <Icon size={24} color="#d9d9d9" weight="bold" />}
        <input
          {...rest}
          ref={ref}
          placeholder={placeholder}
          className={styles.input}
          type={type}
        />
      </div>
    );
  }
);
