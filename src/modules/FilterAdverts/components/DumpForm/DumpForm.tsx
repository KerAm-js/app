import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES, INPUT_VALUES_WITH_ALL } from "../../../../consts/inputValues";

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
  ] = useSelectionValidator({ multySelection: true });
  const [
    dangerClass,
    selectDangerClass,
    unselectDangerClass,
    ___,
    isDangerClassValid,
    dangerClassError,
  ] = useSelectionValidator({ multySelection: true });
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
  ] = useSelectionValidator({ multySelection: true });
  const [measureI, setMeasureI] = useState(0);
  const [
    amountInWeight1,
    onAmountInWeight1Change,
    isAmountInWeight1Valid,
    amountInWeight1Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    amountInWeight2,
    onAmountInWeight2Change,
    isAmountInWeight2Valid,
    amountInWeight2Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    amountInVolume1,
    onAmountInVolume1Change,
    isAmountInVolume1Valid,
    amountInVolume1Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    amountInVolume2,
    onAmountInVolume2Change,
    isAmountInVolume2Valid,
    amountInVolume2Error,
  ] = useInputValidator({ minValue: 1 });

  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [price1, onPrice1Change, isPrice1Valid, price1Error] =
    useInputValidator({ minValue: 1 });
  const [price2, onPrice2Change, isPrice2Valid, price2Error] =
    useInputValidator({ minValue: 1 });
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
          multySelection: true,
          placeholder: "",
          label: "Виды отходов",
        },
        {
          id: "dangerClass",
          type: "selection",
          value: dangerClass,
          selectItem: selectDangerClass,
          unselectItem: unselectDangerClass,
          itemsList: INPUT_VALUES.dangerClasses,
          error: dangerClassError,
          multySelection: true,
          placeholder: "",
          label: "Классы опасности",
        },
        {
          id: "transport",
          type: "selection",
          value: transport,
          selectItem: selectTransport,
          unselectItem: unselectTransport,
          itemsList: INPUT_VALUES.dumpTransport,
          error: transportError,
          multySelection: true,
          placeholder: "",
          label: "Виды транспорта",
        },
        {
          id: "measure",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.measure,
          selectedIndex: measureI,
          onChange: (evt) =>
            setMeasureI(evt.nativeEvent.selectedSegmentIndex),
          label: "Измерять",
        },
        {
          id: "amountInWeight",
          type: "interval",
          hidden: INPUT_VALUES_WITH_ALL.measure[measureI] === 'Объём',
          firstValue: amountInWeight1,
          secondValue: amountInWeight2,
          onFirstValueChange: onAmountInWeight1Change,
          onSecondValueChange: onAmountInWeight2Change,
          error: amountInWeight1Error || amountInWeight2Error,
          label: "Вес (т)",
        },
        {
          id: "amountInVolume",
          type: "interval",
          hidden: INPUT_VALUES_WITH_ALL.measure[measureI] === 'Вес',
          firstValue: amountInVolume1,
          secondValue: amountInVolume2,
          onFirstValueChange: onAmountInVolume1Change,
          onSecondValueChange: onAmountInVolume2Change,
          error: amountInVolume1Error || amountInVolume2Error,
          label: "Объём (м3)",
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "workMode",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.workMode,
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
          firstValue: price1,
          secondValue: price2,
          onFirstValueChange: onPrice1Change,
          onSecondValueChange: onPrice2Change,
          error: price1Error || price2Error,
          label:
            INPUT_VALUES.measure[measureI] === "Вес"
              ? "Цена (руб/тонн)"
              : "Цена (руб/м3)",
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

  const isFormValid =
    isAmountInVolume1Valid &&
    isAmountInVolume2Valid &&
    isAmountInWeight1Valid && 
    isAmountInWeight2Valid &&
    isDangerClassValid &&
    isPrice1Valid &&
    isPrice2Valid &&
    isTransportValid &&
    isTypeValid &&
    isWasteTypeValid;

  const onSubmit = () => {
    console.log({
      type,
      wasteType,
      transport,
      dangerClass,
      amountInVolume1,
      amountInVolume2,
      amountInWeight1,
      amountInWeight2,
      price1,
      price2
    });
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
