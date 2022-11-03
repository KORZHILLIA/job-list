import useBreakpoints from 'shared/hooks/useBreakpoints';
import defineTerm from 'helpers/defineTerm';
import styles from './titleSalaryAndPosted.module.css';

const TitleSalaryAndPosted = ({ title, salary, term }) => {
  const { bigger1920px } = useBreakpoints();
  const salaryTransformed = salary.replaceAll('k', ' 000');
  const termTransformed = defineTerm(term);
  const salaryElement = (
    <div className={styles.salary}>
      <p className={styles.brutto}>Brutto, per year</p>
      <p className={styles.money}>&#8364; {salaryTransformed}</p>
    </div>
  );
  return (
    <div className={styles.general}>
      <div className={styles.upper}>
        <h2 className={styles.title}>{title}</h2>
        {bigger1920px && salaryElement}
      </div>
      <div className={styles.lower}>
        <p className={styles.posted}>Posted {termTransformed} ago</p>
        {!bigger1920px && salaryElement}
      </div>
    </div>
  );
};

export default TitleSalaryAndPosted;
