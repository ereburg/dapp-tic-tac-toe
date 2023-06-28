import styles from '../columns.module.scss';

type ContainerProps = BaseComponentProps & {};

export function ColumnRight({ children }: ContainerProps) {
  return <div className={styles.container__right}>{children}</div>;
}
