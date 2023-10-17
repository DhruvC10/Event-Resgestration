import { ChangeEvent, FormEvent, useState } from "react";
import { FormValue } from "../../types/form.type";
import { screenValue } from "../../types/screen.types";
import styles from "./FormScreen.module.css";

type Props = {
  form: FormValue;
  setForm: React.Dispatch<React.SetStateAction<FormValue>>;
  screens: screenValue;
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
};

function FormScreen({ form, setForm, screens, setCurrentScreen }: Props) {
  const [formErrors, setFormErrors] = useState({});
  console.log(formErrors);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    setFormErrors(validate(form));
    setCurrentScreen(screens.formConfirm);
  };

  const validate = (values: FormValue) => {
    const errors = { name: "", email: "", department: "", number: "" };

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.department) {
      errors.department = "Department is required";
    }

    if (!values.phone) {
      errors.number = "Number is required";
    }

    return errors;
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Register Form</h1>
        <div className={styles.inputField}>
          <label htmlFor="name">
            Name
            <span className="required">*</span>
            <input
              type="text"
              name="name"
              placeholder="John Mark"
              value={form.name}
              onChange={handleChange}
            />
            <span className="error">{}</span>
          </label>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="email">
            Email
            <span className="required">*</span>
            <input
              type="mail"
              name="email"
              placeholder="abc@test.com"
              value={form.email}
              onChange={handleChange}
            />
            <span className="error">{}</span>
          </label>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="name">
            Department
            <span className="required">*</span>
            <input
              type="text"
              name="department"
              placeholder="Mechanical"
              value={form.department}
              onChange={handleChange}
            />
            <span className="error">{}</span>
          </label>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="name">
            Number
            <span className="required">*</span>
            <input
              type="number"
              name="number"
              value={form.phone}
              onChange={handleChange}
            />
            <span className="error">{}</span>
          </label>
        </div>

        <input
          type="submit"
          value="Register"
          className={styles.registerButton}
          // disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default FormScreen;
