import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import styles from './buttons.module.scss';

const buttonVariants = cva(styles.btn, {
  variants: {
    variant: {
      primary: styles.primary,
      white: styles.white,
      black: styles.black,
      outline: styles.outline,
      text: styles.text,
    },
    size: {
      small: '',
      medium: styles.md,
    },
    state: {
      normal: '',
      loading: styles.loading,
    },
  },
  // compoundVariants: [{ variant: 'primary', size: 'medium', className: styles.primaryMedium }],
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    state: 'normal',
  },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export function Button({ children, className, variant, size, state, isLoading, disabled, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size, state: isLoading ? 'loading' : 'normal', className })}
      disabled={disabled || isLoading}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      {isLoading && <Loader2 className={styles.loader} />}
      {children}
    </button>
  );
}
