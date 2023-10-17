import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { FormValue } from "../../types/form.type";
import End from "../End/End";
import FormConfirm from "../FormConfirm/FormConfirm";
import FormScreen from "../FormScreen/FormScreen";

const screens = {
  form: "form",
  formConfirm: "formConfirm",
  registrationSuccess: "registrationSuccess",
  end: "end",
};

function Home() {
  const [currentScreen, setCurrentScreen] = useState(screens.form);
  const [form, setForm] = useLocalStorage<FormValue>("registration", {
    name: "",
    email: "",
    department: "",
    phone: "",
  });

  return (
    <>
      {currentScreen === screens.form ? (
        <FormScreen
          form={form}
          setForm={setForm}
          screens={screens}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === screens.formConfirm ? (
        <FormConfirm
          form={form}
          screens={screens}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === screens.registrationSuccess ? (
        <FormConfirm
          form={form}
          screens={screens}
          setCurrentScreen={setCurrentScreen}
        />
      ) : null}

      {currentScreen === screens.end ? <End /> : null}
    </>
  );
}

export default Home;
