import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { USER } from "../../../../consts/devData";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";

const ShovelForm = () => {
  const inputs: TFormInputsArray = [];

  const isFormValid = false;

  const onSubmit = () => {
    console.log({});
  };

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle="Сохранить"
    />
  );
};

export default ShovelForm;
