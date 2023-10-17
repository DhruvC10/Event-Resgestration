import Button from "../../components/button/Button";
import { screenValue } from "../../types/screen.types";

import styles from "./RegistrationSuccess.module.css";

type Props = {
  screens: screenValue;
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
};

function RegistrationSuccess({ screens, setCurrentScreen }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.ticket}>
        <div className={styles.header}>
          <h1>Movie Ticket</h1>
        </div>
        <div className={styles.info}>
          <p>
            <strong>Movie:</strong> Amartya
          </p>

          <p>
            <strong>Name:</strong> Dhruv Chavda
          </p>

          <p>
            <strong>Date:</strong> October 12, 2023
          </p>
          <p>
            <strong>Time:</strong> 7:00 PM
          </p>
        </div>
        <div className={styles.barcode}>
          <div className={styles.img}> A23452 </div>
        </div>
      </div>
      <Button
        padding="0.45rem"
        margin="1rem"
        border="none"
        color="lightgrey"
        height="auto"
        onClick={() => setCurrentScreen(screens.registrationSuccess)}
        radius="2px"
        width="200px"
        children="Download Ticket"
      />
    </div>
  );
}

export default RegistrationSuccess;
