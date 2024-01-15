import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { TECHNICS, TECHS_LIST } from "../../../../consts/data";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { DATE_REGEX } from "../../../../consts/regex";
import { isKeyOfObject } from "../../../../helpers/isKeyOfObject";

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
  const [
    equipment,
    selectEquipment,
    unselectEquipment,
    unselectAllEquipments,
    __,
    equipmentError,
  ] = useSelectionValidator({ multySelection: true });
  const [count1, onCount1Change, isCount1Valid, count1Error] =
    useInputValidator({
      minValue: 1,
    });
  const [count2, onCount2Change, isCount2Valid, count2Error] =
    useInputValidator({
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
    rentalDaysCount1,
    onRentalDaysCount1Change,
    isRentalDaysCount1Valid,
    rentalDaysCount1Error,
  ] = useInputValidator({
    minValue: 1,
  });
  const [
    rentalDaysCount2,
    onRentalDaysCount2Change,
    isRentalDaysCount2Valid,
    rentalDaysCount2Error,
  ] = useInputValidator({
    minValue: 1,
  });
  const [
    paymentFor,
    selectPaymentFor,
    unselectPaymentFor,
    ___,
    isPaymentForValid,
    paymentForError,
  ] = useSelectionValidator({
    required: true,
    multySelection: true,
    initValue: [INPUT_VALUES.paymentFor[0]],
  });
  const [
    priceForShift1,
    onPriceForShift1Change,
    isPriceForShift1Valid,
    priceForShift1Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForShift2,
    onPriceForShift2Change,
    isPriceForShift2Valid,
    priceForShift2Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForHour1,
    onPriceForHour1Change,
    isPriceForHour1Valid,
    priceForHour1Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForHour2,
    onPriceForHour2Change,
    isPriceForHour2Valid,
    priceForHour2Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForWeightDistance1,
    onPriceForWeightDistance1Change,
    isPriceForWeightDistance1Valid,
    priceForWeightDistance1Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForWeightDistance2,
    onPriceForWeightDistance2Change,
    isPriceForWeightDistance2Valid,
    priceForWeightDistance2Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForVolumeDistance1,
    onPriceForVolumeDistance1Change,
    isPriceForVolumeDistance1Valid,
    priceForVolumeDistance1Error,
  ] = useInputValidator({ minValue: 1 });
  const [
    priceForVolumeDistance2,
    onPriceForVolumeDistance2Change,
    isPriceForVolumeDistance2Valid,
    priceForVolumeDistance2Error,
  ] = useInputValidator({ minValue: 1 });
  const [paymentTypeI, setPaymentTypeI] = useState(0);

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "type",
          type: "segment",
          values: INPUT_VALUES.technicAdvertType,
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
          id: "equipment",
          type: "selection",
          hidden:
            !technicType[0] ||
            TECHNICS[technicType[0]]?.equipments.length === 0,
          itemsList: TECHNICS[technicType[0]]?.equipments || [],
          value: equipment,
          selectItem: selectEquipment,
          unselectItem: unselectEquipment,
          unselectAll: unselectAllEquipments,
          placeholder: "",
          multySelection: true,
          label: "Дополнительное оборудование",
          error: equipmentError,
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "count",
          type: "interval",
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: count1,
          secondValue: count2,
          onFirstValueChange: onCount1Change,
          onSecondValueChange: onCount2Change,
          error: count1Error || count2Error,
          label: "Количество единиц техники",
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
          firstValue: firstDate,
          secondValue: secondDate,
          onFirstValueChange: onFirstDateChange,
          onSecondValueChange: onSecondDateChange,
          error: firstDateError || secondDateError,
          label: "Период аренды",
        },
        {
          id: "rentalDaysCount",
          type: "interval",
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: rentalDaysCount1,
          secondValue: rentalDaysCount2,
          onFirstValueChange: onRentalDaysCount1Change,
          onSecondValueChange: onRentalDaysCount2Change,
          error: rentalDaysCount1Error || rentalDaysCount2Error,
          label: "Срок аренды (в днях)",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
        {
          id: "paymentFor",
          type: "selection",
          itemsList: INPUT_VALUES.paymentFor,
          value: paymentFor,
          selectItem: selectPaymentFor,
          unselectItem: unselectPaymentFor,
          placeholder: "",
          multySelection: true,
          label: "Оплата за",
          error: paymentForError,
        },
        {
          id: "priceForShift",
          type: "interval",
          hidden: !paymentFor.includes(INPUT_VALUES.paymentFor[0]),
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: priceForShift1,
          secondValue: priceForShift2,
          onFirstValueChange: onPriceForShift1Change,
          onSecondValueChange: onPriceForShift2Change,
          error: priceForShift1Error || priceForShift2Error,
          label: "Цена (руб/смена)",
        },
        {
          id: "priceForHour",
          type: "interval",
          hidden: !paymentFor.includes(INPUT_VALUES.paymentFor[1]),
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: priceForHour1,
          secondValue: priceForHour2,
          onFirstValueChange: onPriceForHour1Change,
          onSecondValueChange: onPriceForHour2Change,
          error: priceForHour1Error || priceForHour2Error,
          label: "Цена (руб/час)",
        },
        {
          id: "priceForVolumeDistance",
          type: "interval",
          hidden: !paymentFor.includes(INPUT_VALUES.paymentFor[2]),
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: priceForVolumeDistance1,
          secondValue: priceForVolumeDistance2,
          onFirstValueChange: onPriceForVolumeDistance1Change,
          onSecondValueChange: onPriceForVolumeDistance2Change,
          error: priceForVolumeDistance1Error || priceForVolumeDistance2Error,
          label: "Цена (руб/(м3/км))",
        },
        {
          id: "priceForWeightDistance",
          type: "interval",
          hidden: !paymentFor.includes(INPUT_VALUES.paymentFor[3]),
          firstPlaceholder: "",
          secondPlaceholder: "",
          firstValue: priceForWeightDistance1,
          secondValue: priceForWeightDistance2,
          onFirstValueChange: onPriceForWeightDistance1Change,
          onSecondValueChange: onPriceForWeightDistance2Change,
          error: priceForWeightDistance1Error || priceForWeightDistance2Error,
          label: "Цена (руб/(т/км))",
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
    isTechnicTypeValid &&
    isCount1Valid &&
    isCount2Valid &&
    isFirstDateValid &&
    isSecondDateValid &&
    isRentalDaysCount1Valid &&
    isRentalDaysCount2Valid &&
    isPaymentForValid &&
    isPriceForHour1Valid &&
    isPriceForHour2Valid &&
    isPriceForShift1Valid &&
    isPriceForShift2Valid &&
    isPriceForVolumeDistance1Valid &&
    isPriceForVolumeDistance2Valid &&
    isPriceForWeightDistance1Valid &&
    isPriceForWeightDistance2Valid;

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

export default TechnicForm;
