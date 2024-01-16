import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { USER } from "../../../../consts/devData";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { MATERIALS, MATERIALS_LIST } from "../../../../consts/data";

const ShovelForm = () => {
  const [typeI, setTypeI] = useState(0);
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 15,
  });
  const [
    materialType,
    selectMaterialType,
    unselectMaterialType,
    __,
    isMaterialTypeValid,
    materialTypeError,
  ] = useSelectionValidator({ required: true });
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
  ] = useSelectionValidator({ required: true });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    _____,
    isFractionsValid,
    fractionsError,
  ] = useSelectionValidator({ required: true });
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [price, onPriceChange, isPriceValid, priceError] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [paymentTypeI, setPaymentTypeI] = useState(0);
  const [deliveryI, setDeliveryI] = useState(0);
  const [username, onUsernameChange, isUsernameValid, usernameError] =
    useInputValidator({ required: true, initValue: USER.username });
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    required: true,
    initValue: USER.phone,
  });
  const [measureInI, setMeasureInI] = useState(0);
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1 }
  );

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "type",
          type: "segment",
          values: INPUT_VALUES.shovelAdvertType,
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
          id: "price",
          type: "input",
          value: price,
          onChangeText: onPriceChange,
          error: priceError,
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
    isPriceValid &&
    isUsernameValid &&
    isPhoneValid;

  const onSubmit = () => {
    console.log({
      type: INPUT_VALUES.shovelAdvertType[typeI],
      title,
      materialType,
      transport,
      measureIn: INPUT_VALUES.measureIn[measureInI],
      amount,
      workMode: INPUT_VALUES.workMode[workModeIndex],
      deliveryI: INPUT_VALUES.delivery[deliveryI],
      comment,
      price,
      paymentType: INPUT_VALUES.paymentType[paymentTypeI],
      username,
      phone,
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

export default ShovelForm;
