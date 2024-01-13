import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";

const DumpForm = () => {
  const [type, selectType, unselectType, _, isTypeValid, typeError] =
    useSelectionValidator({
      required: true,
      initValue: [INPUT_VALUES.dumpAdvertType[0]],
    });
  const [
    wasteType,
    selectWasteType,
    unselectWasteType,
    __,
    isWasteTypeValid,
    wasteTypeError,
  ] = useSelectionValidator({ required: true });
  const [
    dangerClass,
    selectDangerClass,
    unselectDangerClass,
    ___,
    isDangerClassValid,
    dangerClassError,
  ] = useSelectionValidator({ required: true });
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
  ] = useSelectionValidator({ required: true });
  const [measureInI, setMeasureInI] = useState(0);
  const [amount1, onAmount1Change, isAmount1Valid, amount1Error] =
    useInputValidator({ required: true, minValue: 1 });
  const [amount2, onAmount2Change, isAmount2Valid, amount2Error] =
    useInputValidator({ required: true, minValue: 1 });

  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [price1, onPrice1Change, isPrice1Valid, price1Error] =
    useInputValidator({ required: true, minValue: 1 });
  const [price2, onPrice2Change, isPrice2Valid, price2Error] =
    useInputValidator({ required: true, minValue: 1 });
  const [paymentTypeI, setPaymentTypeI] = useState(0);

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "type",
          type: "selection",
          value: type,
          selectItem: selectType,
          unselectItem: unselectType,
          itemsList: INPUT_VALUES.dumpAdvertType,
          error: typeError,
          placeholder: "",
          label: "Тип объявления",
        },
      ],
    },
    {
      title: "Характеристики",
      inputs: [
        {
          id: "wasteType",
          type: "selection",
          value: wasteType,
          selectItem: selectWasteType,
          unselectItem: unselectWasteType,
          itemsList: INPUT_VALUES.wasteTypes,
          error: wasteTypeError,
          placeholder: "",
          label: "Вид отходов",
        },
        {
          id: "dangerClass",
          type: "selection",
          value: dangerClass,
          selectItem: selectDangerClass,
          unselectItem: unselectDangerClass,
          itemsList: INPUT_VALUES.dangerClasses,
          error: dangerClassError,
          placeholder: "",
          label: "Класс опасности",
        },
        {
          id: "transport",
          type: "selection",
          value: transport,
          selectItem: selectTransport,
          unselectItem: unselectTransport,
          itemsList: INPUT_VALUES.dumpTransport,
          error: transportError,
          placeholder: "",
          label: "Вид транспорта",
        },
        {
          id: "measureIn",
          type: "segment",
          values: INPUT_VALUES.measureIn,
          selectedIndex: measureInI,
          onChange: (evt) =>
            setMeasureInI(evt.nativeEvent.selectedSegmentIndex),
          label: "Измерять в",
        },
        {
          id: "amount",
          type: "interval",
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: amount1,
          secondValue: amount2,
          onFirstValueChange: onAmount1Change,
          onSecondValueChange: onAmount2Change,
          error: amount1Error || amount2Error,
          label:
            INPUT_VALUES.measureIn[measureInI] === "м3"
              ? "Объём (м3)"
              : "Вес (тонн)",
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "workMode",
          type: "segment",
          values: INPUT_VALUES.workMode,
          selectedIndex: workModeIndex,
          onChange: (evt) =>
            setWorkModeIndex(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
        {
          id: "price",
          type: "interval",
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: price1,
          secondValue: price2,
          onFirstValueChange: onPrice1Change,
          onSecondValueChange: onPrice2Change,
          error: amount1Error || amount2Error,
          label:
            INPUT_VALUES.measureIn[measureInI] === "м3"
              ? "Цена (руб/м3)"
              : "Цена (руб/тонн)",
        },
        {
          id: "paymentType",
          type: "segment",
          values: INPUT_VALUES.paymentType,
          selectedIndex: paymentTypeI,
          onChange: (evt) =>
            setPaymentTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Способ оплаты",
        },
      ],
    },
  ];

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

export default DumpForm;
