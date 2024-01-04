import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputType } from "../../../../components/Form/types";
import { TECHS_LIST } from "../../../../consts/data";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";

const TechnicForm = () => {
  const [rentalIndex, setRentalIndex] = useState(0);
  const [technicType, selectTechnicTyoe, _, unselectTechnicType, isTechnicTypeValid, technicTypeError] = useSelectionValidator({ required: true });
  const [mark, onChangeMark] = useInputValidator({
    initValue: "",
  });
  const [model, onModelChange] = useInputValidator({
    initValue: "",
  });
  const [prodYear, onProdYearChange, isProdYearValid, prodYearError] =
    useInputValidator({
      initValue: "",
      minLength: 4,
      required: true,
      minValue: 1800,
      maxValue: new Date().getFullYear(),
    });

  const segmentInput: Array<TFormInputType> = [
    {
      id: "rentalType",
      type: "segment",
      values: ["Сдать в аренду", "Взять в аренду"],
      selectedIndex: rentalIndex,
      onChange: (evt) => setRentalIndex(evt.nativeEvent.selectedSegmentIndex),
      label: "",
    },
  ];

  const mainParams: Array<TFormInputType> = [
    {
      id: "technicType",
      type: "selection",
      itemsList: TECHS_LIST,
      value: technicType,
      selectItem: selectTechnicTyoe,
      unselectAll: unselectTechnicType,
      placeholder: "Самосвал",
      multySelection: false,
      label: "Вид техники",
      error: technicTypeError
    },
    {
      id: "mark",
      type: "input",
      onChangeText: onChangeMark,
      value: mark,
      label: "Марка",
      placeholder: "Volvo",
    },
    {
      id: "model",
      type: "input",
      onChangeText: onModelChange,
      value: model,
      label: "Модель",
      placeholder: "FM TRUCK",
    },
    {
      id: "prodYear",
      type: "input",
      onChangeText: onProdYearChange,
      error: prodYearError,
      value: prodYear,
      label: "Год выпуска",
      placeholder: new Date().getFullYear().toString(),
      keyboardType: "decimal-pad",
    },
    {
      id: "photo",
      type: "photo",
      photosCount: 3,
    },
  ];

  const isFormValid = isTechnicTypeValid && isProdYearValid;

  const onSubmit = () => {
    console.log({
      rentalIndex,
      technicType,
      mark,
      model,
      prodYear,
    });
  };

  return (
    <Form
      inputs={{ noTitle: segmentInput, params: mainParams }}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle="Опубликовать"
    />
  );
};

export default TechnicForm;
