import styles from './Subheading.module.scss';

type Props = {
  text: string;
};

function Subheading({ text }: Props) {
  return <p className={styles.subheading}>{text}</p>;
}

export { Subheading };
