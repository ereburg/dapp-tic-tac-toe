import styles from '../typography.module.scss';

type GradientTitleProps = BaseComponentProps & {};

export function GradientTitle({ children }: GradientTitleProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
