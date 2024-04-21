import { FC, useState } from "react";
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
  const [measureInI, setMeasureInI] = useState(0);
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1 }
  );
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [price, onPriceChange, isPriceValid, priceError] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [paymentForI, setPaymentForI] = useState(0);
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
          type: "input",
          onChangeText: onAmountCange,
          error: amountError,
          value: amount,
          label:
            INPUT_VALUES.measureIn[measureInI] === "м3"
              ? "Объём (м3)"
              : "Вес (тонн)",
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
          id: "price",
          type: "input",
          value: price,
          onChangeText: onPriceChange,
          error: priceError,
          label: "Цена (руб)",
        },
        {
          id: "paymentFor",
          type: "segment",
          values: INPUT_VALUES.paymentFor,
          selectedIndex: paymentForI,
          onChange: (evt) =>
            setPaymentForI(evt.nativeEvent.selectedSegmentIndex),
          label: "Оплата за",
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
    isPriceValid &&
    isUsernameValid &&
    isPhoneValid;

  const onSubmit = () => {
    submit({
      type: "dump",
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
        measureIn: INPUT_VALUES.measureIn[measureInI],
        amount,
      },
      price: {
        price: Number(price),
        paymentType: INPUT_VALUES.paymentType[paymentTypeI],
      },
      username,
      phone,
    });
    clearForm();
  };

  const clearForm = () => {
    clearType();
    onTitleChange("");
    clearWasteType();
    clearDangerClass();
    clearTransport();
    setMeasureInI(0);
    onAmountCange("");
    setWorkModeIndex(0);
    setComment("");
    onPriceChange("");
    setPaymentTypeI(0);
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

export default DumpForm;
