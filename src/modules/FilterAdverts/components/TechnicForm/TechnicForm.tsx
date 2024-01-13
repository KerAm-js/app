import { useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { EQUIPMENTS, TECHS_LIST } from "../../../../consts/data";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { DATE_REGEX } from "../../../../consts/regex";
import { USER } from "../../../../consts/devData";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";

const TechnicForm = () => {
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

export default TechnicForm;
