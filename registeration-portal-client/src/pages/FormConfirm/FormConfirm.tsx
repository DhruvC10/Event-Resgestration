import Button from "../../components/button/Button";
import { FormValue } from "../../types/form.type";
import { screenValue } from "../../types/screen.types";
import styles from "./FormConfirm.module.css";

type Props = {
  form: FormValue;
  screens: screenValue;
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
};

function FormConfirm({ form, screens, setCurrentScreen }: Props) {
  return (
    <div className={styles.container}>
      <h1>Register Form</h1>
      <div className={styles.inputField}>
        <div className={styles.label}>
          Name
          <span className="required">*</span>
          <div>{form.name}</div>
        </div>
      </div>

      <div className={styles.inputField}>
        <div className={styles.label}>
          Email
          <span className="required">*</span>
          <div>{form.email}</div>
        </div>
      </div>

      <div className={styles.inputField}>
        <div className={styles.label}>
          Department
          <span className="required">*</span>
          <div>{form.department}</div>
        </div>
      </div>

      <div className={styles.inputField}>
        <div className={styles.label}>
          Number
          <span className="required">*</span>
          <div>{form.phone}</div>
        </div>
      </div>

      <Button
        padding="0.45rem"
        margin="1rem"
        border="none"
        color="lightgrey"
        height="auto"
        onClick={() => setCurrentScreen(screens.end)}
        radius="2px"
        width="200px"
        children="Confirm"
      />
    </div>
  );
}

export default FormConfirm;
