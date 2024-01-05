import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { EQUIPMENTS, TECHS_LIST } from "../../../../consts/data";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";

const TechnicForm = () => {
  const [rentalIndex, setRentalIndex] = useState(0);
  const [
    technicType,
    selectTechnicTyoe,
    unselectTechnicType,
    _,
    isTechnicTypeValid,
    technicTypeError,
  ] = useSelectionValidator({ required: true });
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
  const [
    equipment,
    selectEquipment,
    unselectEquipment,
    unselectAllEquipments,
    __,
    equipmentError,
  ] = useSelectionValidator({ multySelection: true });

  const inputs: TFormInputsArray = [
    {
      inputs: [
        {
          id: "rentalType",
          type: "segment",
          values: ["Сдать в аренду", "Взять в аренду"],
          selectedIndex: rentalIndex,
          onChange: (evt) =>
            setRentalIndex(evt.nativeEvent.selectedSegmentIndex),
          label: "",
        },
      ],
    },
    {
      title: "Характеристики",
      inputs: [
        {
          id: "technicType",
          type: "selection",
          itemsList: TECHS_LIST,
          value: technicType,
          selectItem: selectTechnicTyoe,
          unselectItem: unselectTechnicType,
          placeholder: "Самосвал",
          multySelection: false,
          label: "Вид техники",
          error: technicTypeError,
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
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "equipment",
          type: "selection",
          hidden: !technicType[0] || !EQUIPMENTS[technicType[0]],
          itemsList: EQUIPMENTS[technicType[0]],
          value: equipment,
          selectItem: selectEquipment,
          unselectItem: unselectEquipment,
          unselectAll: unselectAllEquipments,
          placeholder: "",
          multySelection: true,
          label: "Доп. оборудование",
          error: equipmentError,
        },
      ],
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
      inputs={inputs}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle="Опубликовать"
    />
  );
};

export default TechnicForm;
