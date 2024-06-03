import { FC, useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { USER } from "../../../../consts/devData";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { TDumpForm } from "./types";

const DumpForm: FC<TDumpForm> = ({ submit }) => {
  const [type, selectType, unselectType, clearType, isTypeValid, typeError] =
    useSelectionValidator({
      required: true,
      initValue: [INPUT_VALUES.dumpAdvertType[0]],
    });
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
  });
  const [
    wasteType,
    selectWasteType,
    unselectWasteType,
    clearWasteType,
    isWasteTypeValid,
    wasteTypeError,
  ] = useSelectionValidator({ required: true });
  const [
    dangerClass,
    selectDangerClass,
    unselectDangerClass,
    clearDangerClass,
    isDangerClassValid,
    dangerClassError,
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
  const [
    coefficient,
    onCoefficientChange,
    isCoefficientValid,
    coefficientError,
  ] = useInputValidator({ required: true, minValue: 1, initValue: "1.5" });
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1 }
  );
  const [workModeIndex, setWorkModeIndex] = useState(0);
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
          type: "selection",
          value: type,
          selectItem: selectType,
          unselectItem: unselectType,
          itemsList: INPUT_VALUES.dumpAdvertType,
          error: typeError,
          label: "Тип объявления",
        },
        {
          id: "title",
          type: "input",
          onChangeText: onTitleChange,
          value: title,
          error: titleError,
          label: "Заголовок",
          placeholder: "Нужен отвал",
          maxLength: 100,
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
          label: "Вид транспорта",
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
          id: "priceForWeight",
          type: "input",
          value: priceForWeight,
          onChangeText: onPriceForWeightChange,
          error: priceForWeightError,
          label: "Цена (руб/т)",
          keyboardType: "decimal-pad",
          editable: INPUT_VALUES.measure[measureI] === "Вес",
        },
        {
          id: "priceForVolume",
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
    isTypeValid &&
    isTitleValid &&
    isWasteTypeValid &&
    isDangerClassValid &&
    isTransportValid &&
    isAmountValid &&
    isPriceForWeightValid &&
    isPriceForVolumeValid &&
    isCoefficientValid &&
    isUsernameValid &&
    isPhoneValid;

  const transactionType = type[0];
  const isPhotosAllowed =
    transactionType === INPUT_VALUES.dumpAdvertType[0] ||
    transactionType === INPUT_VALUES.dumpAdvertType[2];

  const onSubmit = () => {
    submit(
      {
        type: "dump",
        transactionType: type,
        title,
        photos: [],
        general: {
          address: "Москва, Лефортово",
          workMode: INPUT_VALUES.workMode[workModeIndex],
          comment,
        },
        params: {
          wasteType,
          dangerClass,
          transport,
          measure: INPUT_VALUES.measure[measureI],
          amount,
          coefficient,
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
    clearType();
    onTitleChange("");
    clearWasteType();
    clearDangerClass();
    clearTransport();
    setMeasureI(0);
    onAmountCange("");
    setWorkModeIndex(0);
    setComment("");
    onPriceForVolumeChange("");
    onPriceForWeightChange("");
    onCoefficientChange("");
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

export default DumpForm;
