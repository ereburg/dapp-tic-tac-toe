import styles from '../typography.module.scss';

type HelpDescriptionProps = BaseComponentProps & {};

export function HelpDescription({ children }: HelpDescriptionProps) {
  return <div className={styles.description}>{children}</div>;
}
