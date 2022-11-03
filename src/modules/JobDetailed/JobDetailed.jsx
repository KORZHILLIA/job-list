import PersonalActivity from './PersonalActivity';
import TitleSalaryAndPosted from './TitleSalaryAndPosted';
import Benefits from './Benefits';
import ButtonApply from './ButtonApply';
import JobImages from './JobImages';
import AdditionalInfo from './AdditionalInfo';
import Contacts from './Contacts';
import Map from './Map';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import styles from './jobDetailed.module.css';

const JobDetailed = ({ job }) => {
  const {
    id,
    address,
    benefits,
    description,
    email,
    employment_type,
    location,
    name,
    phone,
    pictures,
    salary,
    title,
    updatedAt,
  } = job;
  const { lat, long } = location;
  const center = { lat, lng: long };
  const { bigger1920px } = useBreakpoints();
  return (
    <div className={styles.general}>
      {!bigger1920px && <PersonalActivity id={id} />}
      <TitleSalaryAndPosted title={title} salary={salary} term={updatedAt} />
      <p className={styles.description}>{description}</p>
      <h3 className={styles.subheader}>Resposibilities</h3>
      <p className={styles.responsibilities}>{description}</p>
      <h3 className={styles.subheader}>Compensation & Benefits:</h3>
      <Benefits items={benefits} />
      <div className={styles.btn}>
        <ButtonApply
          type="button"
          text={bigger1920px ? 'Apply now' : 'Upgrade'}
        />
      </div>
      <div className={styles.infoAndImg}>
        <JobImages images={pictures} alt={name} />
        <AdditionalInfo benefits={benefits} employmentTypes={employment_type} />
      </div>
      <div className={styles.contacts}>
        <Contacts name={name} address={address} email={email} phone={phone} />
        <Map center={center} />
      </div>
    </div>
  );
};

export default JobDetailed;
