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
  const [typeI, setTypeI] = useState(0);
  const [
    technicType,
    selectTechnicTyoe,
    unselectTechnicType,
    _,
    isTechnicTypeValid,
    technicTypeError,
  ] = useSelectionValidator({ required: true });
  const [mark, onChangeMark] = useInputValidator();
  const [model, onModelChange] = useInputValidator();
  const [prodYear, onProdYearChange, isProdYearValid, prodYearError] =
    useInputValidator({
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
  const [images, setImages] = useState<string[]>([]);
  const [count, onCountChange, isCountValid, countError] = useInputValidator({
    required: true,
    minValue: 1,
  });
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [firstDate, onFirstDateChange, isFirstDateValid, firstDateError] =
    useInputValidator({
      pattern: DATE_REGEX,
      patternErrorMessage: "Введите дату по шаблону ДД.ММ.ГГГГ",
    });
  const [secondDate, onSecondDateChange, isSecondDateValid, secondDateError] =
    useInputValidator({
      pattern: DATE_REGEX,
      patternErrorMessage: "Введите дату по шаблону ДД.ММ.ГГГГ",
    });
  const [
    rentalDaysCount,
    onRentalDaysCountChange,
    isRentalDaysCountValid,
    rentalDaysCountError,
  ] = useInputValidator({ required: true, minValue: 1 });
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
          id: "rental",
          type: "segment",
          values: INPUT_VALUES.technicAdvertType,
          selectedIndex: typeI,
          onChange: (evt) =>
            setTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Тип объявления",
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
          placeholder: "",
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
          placeholder: "",
        },
        {
          id: "model",
          type: "input",
          onChangeText: onModelChange,
          value: model,
          label: "Модель",
          placeholder: "",
        },
        {
          id: "prodYear",
          type: "input",
          onChangeText: onProdYearChange,
          error: prodYearError,
          value: prodYear,
          label: "Год выпуска",
          placeholder: "",
          keyboardType: "decimal-pad",
        },
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
        {
          id: "photo",
          type: "photo",
          photosCount: 3,
          images,
          setImages
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "count",
          type: "input",
          onChangeText: onCountChange,
          error: countError,
          value: count,
          label: "Количество единиц",
          placeholder: "",
          keyboardType: "decimal-pad",
        },
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
          id: "rentalPeriod",
          type: "interval",
          firstPlaceholder: "ДД.ММ.ГГГГ",
          secondPlaceholder: "ДД.ММ.ГГГГ",
          value: { first: firstDate, second: secondDate },
          onFirstValueChange: onFirstDateChange,
          onSecondValueChange: onSecondDateChange,
          error: firstDateError || secondDateError,
          label: "Период аренды",
        },
        {
          id: "rentalDaysCount",
          type: "input",
          placeholder: "",
          value: rentalDaysCount,
          onChangeText: onRentalDaysCountChange,
          error: rentalDaysCountError,
          label: "Период аренды",
          editable: !(
            firstDate &&
            isFirstDateValid &&
            secondDate &&
            isSecondDateValid
          ),
        },
        {
          id: "comment",
          type: "textArea",
          onChangeText: (text: string) => setComment(text),
          value: comment,
          label: "Комментарий",
          placeholder: "",
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
          placeholder: "",
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
          placeholder: "",
        },
        {
          id: "phone",
          type: "input",
          value: phone,
          onChangeText: onPhoneChange,
          error: phoneError,
          label: "Имя пользователя",
          placeholder: "",
          keyboardType: 'phone-pad'
        },
      ],
    },
  ];

  const isFormValid =
    isTechnicTypeValid &&
    isProdYearValid &&
    isCountValid &&
    isFirstDateValid &&
    isSecondDateValid &&
    isRentalDaysCountValid &&
    isPriceValid &&
    isUsernameValid &&
    isPhoneValid;

  const onSubmit = () => {
    console.log({
      type: INPUT_VALUES.technicAdvertType[typeI],
      technicType,
      mark,
      model,
      prodYear,
      equipment,
      images,
      count,
      workMode: INPUT_VALUES.workMode[workModeIndex],
      rentalPeriod: firstDate + " - " + secondDate,
      rentalDaysCount,
      comment,
      price,
      paymentFor: INPUT_VALUES.paymentFor[paymentForI],
      paymentType: INPUT_VALUES.paymentType[paymentTypeI],
      username,
      phone
    });
  };

  useEffect(() => {
    if (firstDate && isFirstDateValid && secondDate && isSecondDateValid) {
      const first = new Date(firstDate.split(".").reverse().join("-"));
      const second = new Date(secondDate.split(".").reverse().join("-"));
      const daysCount =
        Math.round(
          (second.valueOf() - first.valueOf()) / (1000 * 60 * 60 * 24)
        ) + 1;
      onRentalDaysCountChange(daysCount.toString());
    }
  }, [firstDate, secondDate]);

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
