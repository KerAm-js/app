import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import {
  INPUT_VALUES,
  INPUT_VALUES_WITH_ALL,
} from "../../../../consts/inputValues";
import { MATERIALS, MATERIALS_LIST } from "../../../../consts/data";

const ShovelForm = () => {
  const [typeI, setTypeI] = useState(0);
  const [
    materialType,
    selectMaterialType,
    unselectMaterialType,
    __,
    isMaterialTypeValid,
    materialTypeError,
  ] = useSelectionValidator({});
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
  ] = useSelectionValidator({ multySelection: true });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    _____,
    isFractionsValid,
    fractionsError,
  ] = useSelectionValidator({ multySelection: true });
  const [measureInI, setMeasureInI] = useState(0);
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
  const [deliveryI, setDeliveryI] = useState(0);
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
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.shovelAdvertType,
          selectedIndex: typeI,
          onChange: (evt) => setTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Тип объявления",
        },
      ],
    },
    {
      title: "Характеристики",
      inputs: [
        {
          id: "materialType",
          type: "selection",
          value: materialType,
          selectItem: selectMaterialType,
          unselectItem: unselectMaterialType,
          itemsList: MATERIALS_LIST,
          error: materialTypeError,
          placeholder: "",
          label: "Вид материала",
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
          id: "fractions",
          type: "selection",
          value: fractions,
          selectItem: selectFractions,
          unselectItem: unselectFractions,
          itemsList: MATERIALS[materialType[0]]?.fractions || [],
          error: fractionsError,
          hidden:
            !materialType[0] ||
            MATERIALS[materialType[0]]?.fractions.length === 0,
          multySelection: true,
          label: "Фракции",
        },
        {
          id: "measureIn",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.measureIn,
          selectedIndex: measureInI,
          onChange: (evt) =>
            setMeasureInI(evt.nativeEvent.selectedSegmentIndex),
          label: "Измерять в",
        },
        {
          id: "amountInWeight",
          type: "interval",
          hidden: INPUT_VALUES_WITH_ALL.measureIn[measureInI] === 'м3',
          firstValue: amountInWeight1,
          secondValue: amountInWeight2,
          onFirstValueChange: onAmountInWeight1Change,
          onSecondValueChange: onAmountInWeight2Change,
          error: amountInWeight1Error || amountInWeight2Error,
          label: "Вес (тонн)",
        },
        {
          id: "amountInVolume",
          type: "interval",
          hidden: INPUT_VALUES_WITH_ALL.measureIn[measureInI] === 'Тоннах',
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
          values: INPUT_VALUES.workMode,
          selectedIndex: workModeIndex,
          onChange: (evt) =>
            setWorkModeIndex(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
        {
          id: "delivery",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.delivery,
          selectedIndex: deliveryI,
          onChange: (evt) => setDeliveryI(evt.nativeEvent.selectedSegmentIndex),
          label: "Доставка",
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

  const isFormValid =
    isAmountInWeight1Valid &&
    isAmountInWeight2Valid &&
    isAmountInVolume1Valid &&
    isAmountInVolume2Valid &&
    isPrice1Valid &&
    isPrice2Valid &&
    isTransportValid &&
    isMaterialTypeValid;

  const onSubmit = () => {
    console.log({
      type: INPUT_VALUES_WITH_ALL.shovelAdvertType[typeI],
      materialType,
      transport,
      amountInWeight1,
      amountInWeight2,
      amountInVolume1,
      amountInVolume2,
      price1,
      price2,
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

export default ShovelForm;
