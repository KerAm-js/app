import { FC, useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { USER } from "../../../../consts/devData";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { MATERIALS, MATERIALS_LIST } from "../../../../consts/data";
import { TMaterialForm } from "./types";

const MaterialForm: FC<TMaterialForm> = ({ submit }) => {
  const [typeI, setTypeI] = useState(0);
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
  });
  const [
    materialType,
    selectMaterialType,
    unselectMaterialType,
    clearMaterialType,
    isMaterialTypeValid,
    materialTypeError,
  ] = useSelectionValidator({ required: true });
  const [
    transport,
    selectTransport,
    unselectTransport,
    clearTransport,
    isTransportValid,
    transportError,
  ] = useSelectionValidator({ required: true });
  const [measureI, setMeasureI] = useState(0);
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1 }
  );
  const [
    coefficient,
    onCoefficientChange,
    isCoefficientValid,
    coefficientError,
  ] = useInputValidator({ required: true, minValue: 1, initValue: "1.5" });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    clearFractions,
    isFractionsValid,
    fractionsError,
  ] = useSelectionValidator({ required: true });
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [deliveryI, setDeliveryI] = useState(0);
  const [comment, setComment] = useState("");
  const [
    priceForWeight,
    onPriceForWeightChange,
    isPriceForWeightValid,
    priceForWeightError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [
    priceForVolume,
    onPriceForVolumeChange,
    isPriceForVolumeValid,
    priceForVolumeError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [paymentTypeI, setPaymentTypeI] = useState(0);
  const [username, onUsernameChange, isUsernameValid, usernameError] =
    useInputValidator({ required: true, initValue: USER.username });
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    required: true,
    initValue: USER.phone,
  });

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "type",
          type: "segment",
          values: INPUT_VALUES.materialAdvertType,
          selectedIndex: typeI,
          onChange: (evt) => setTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Тип объявления",
        },
        {
          id: "title",
          type: "input",
          onChangeText: onTitleChange,
          value: title,
          error: titleError,
          label: "Заголовок",
          placeholder: "Продаю пескогрунт",
          maxLength: 100,
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
          label: "Вид транспорта",
        },
        {
          id: "fractions",
          type: "selection",
          value: fractions,
          selectItem: selectFractions,
          unselectItem: unselectFractions,
          itemsList: MATERIALS[materialType[0]]?.fractions || [],
          hidden:
            !materialType[0] ||
            MATERIALS[materialType[0]]?.fractions.length === 0,
          error: fractionsError,
          label: "Фракция",
        },
        {
          id: "measure",
          type: "segment",
          values: INPUT_VALUES.measure,
          selectedIndex: measureI,
          onChange: (evt) => setMeasureI(evt.nativeEvent.selectedSegmentIndex),
          label: "Измерять",
        },
        {
          id: "amount",
          type: "input",
          onChangeText: onAmountCange,
          error: amountError,
          value: amount,
          label:
            INPUT_VALUES.measure[measureI] === "Объём"
              ? "Объём (м3)"
              : "Вес (т)",
          keyboardType: "decimal-pad",
        },
        {
          id: "coefficient",
          type: "input",
          onChangeText: onCoefficientChange,
          error: coefficientError,
          value: coefficient,
          label: "Коэффициент (вес/объём)",
          keyboardType: "decimal-pad",
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
          values: INPUT_VALUES.delivery,
          selectedIndex: deliveryI,
          onChange: (evt) => setDeliveryI(evt.nativeEvent.selectedSegmentIndex),
          label: "Доставка",
        },
        {
          id: "comment",
          type: "textArea",
          onChangeText: (text: string) => setComment(text),
          value: comment,
          label: "Комментарий",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
        {
          id: "priceWeight",
          type: "input",
          value: priceForWeight,
          onChangeText: onPriceForWeightChange,
          error: priceForWeightError,
          label: "Цена (руб/т)",
          keyboardType: "decimal-pad",
          editable: INPUT_VALUES.measure[measureI] === "Вес",
        },
        {
          id: "priceVolume",
          type: "input",
          value: priceForVolume,
          onChangeText: onPriceForVolumeChange,
          error: priceForVolumeError,
          label: "Цена (руб/м3)",
          keyboardType: "decimal-pad",
          editable: INPUT_VALUES.measure[measureI] === "Объём",
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
    {
      title: "Данные пользователя",
      inputs: [
        {
          id: "username",
          type: "input",
          value: username,
          onChangeText: onUsernameChange,
          error: usernameError,
          label: "Имя пользователя",
        },
        {
          id: "phone",
          type: "input",
          value: phone,
          onChangeText: onPhoneChange,
          error: phoneError,
          label: "Имя пользователя",
          keyboardType: "phone-pad",
        },
      ],
    },
  ];

  const isFormValid =
    isTitleValid &&
    isMaterialTypeValid &&
    isTransportValid &&
    isAmountValid &&
    isCoefficientValid &&
    (isFractionsValid || MATERIALS[materialType[0]]?.fractions.length === 0) &&
    isPriceForWeightValid &&
    isPriceForVolumeValid &&
    isUsernameValid &&
    isPhoneValid;

  const transactionType = INPUT_VALUES.materialAdvertType[typeI];
  const isPhotosAllowed = transactionType === "Продать";

  const onSubmit = () => {
    submit(
      {
        transactionType,
        title,
        photos: [],
        general: {
          delivery: INPUT_VALUES.delivery[deliveryI],
          address: "Москва, Лефортово",
          workMode: INPUT_VALUES.workMode[workModeIndex],
          comment,
        },
        params: {
          materialType,
          transport,
          measure: INPUT_VALUES.measure[measureI],
          amount,
          coefficient
        },
        price: {
          price: Number(priceForWeight),
          paymentType: INPUT_VALUES.paymentType[paymentTypeI],
        },
        username,
        phone,
      },
      isPhotosAllowed
    );
  };

  const clearForm = () => {
    setTypeI(0);
    onTitleChange("");
    clearMaterialType();
    clearTransport();
    setMeasureI(0);
    onAmountCange("");
    onCoefficientChange("");
    clearFractions();
    setWorkModeIndex(0);
    setDeliveryI(0);
    setComment("");
    onPriceForVolumeChange("");
    onPriceForWeightChange("");
    setPaymentTypeI(0);
  };

  useEffect(() => {
    if (
      priceForWeight &&
      coefficient &&
      INPUT_VALUES.measure[measureI] === "Вес"
    ) {
      const priceVolume = Number(priceForWeight) * Number(coefficient);
      onPriceForVolumeChange(Math.floor(priceVolume).toString());
    }
  }, [coefficient, priceForWeight]);

  useEffect(() => {
    if (
      priceForVolume &&
      coefficient &&
      INPUT_VALUES.measure[measureI] === "Объём"
    ) {
      const priceWeight = Number(priceForVolume) / Number(coefficient);
      onPriceForWeightChange(Math.floor(priceWeight).toString());
    }
  }, [priceForVolume]);

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle={isPhotosAllowed ? "Далее" : "Опубликовать"}
    />
  );
};

export default MaterialForm;
