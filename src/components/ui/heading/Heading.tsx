import styles from './Heading.module.scss';

type Props = {
  text: string;
};

function Heading({ text }: Props) {
  return (
    <h2 className={styles.heading}>
      <span>{text}</span>
    </h2>
  );
}

export { Heading };
