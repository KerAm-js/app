import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { TECHNICS, TECHS_LIST } from "../../../../consts/data";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import {
  INPUT_VALUES,
  INPUT_VALUES_WITH_ALL,
} from "../../../../consts/inputValues";
import { DATE_REGEX } from "../../../../consts/regex";
import { getLabelForParam } from "../../../../helpers/technicParams";

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
  const [weight1, onWeight1Change, isWeight1Valid, weight1Error] =
    useInputValidator({
      minValue: 0,
    });
  const [weight2, onWeight2Change, isWeight2Valid, weight2Error] =
    useInputValidator({
      minValue: 0,
    });
  const [height1, onHeight1Change, isHeight1Valid, height1Error] =
    useInputValidator({
      minValue: 0,
    });
  const [height2, onHeight2Change, isHeight2Valid, height2Error] =
    useInputValidator({
      minValue: 0,
    });
  const [volume1, onVolume1Change, isVolume1Valid, volume1Error] =
    useInputValidator({
      minValue: 0,
    });
  const [volume2, onVolume2Change, isVolume2Valid, volume2Error] =
    useInputValidator({
      minValue: 0,
    });
  const [
    passengersCount1,
    onPassengersCount1Change,
    isPassengersCount1Valid,
    passengersCount1Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    passengersCount2,
    onPassengersCount2Change,
    isPassengersCount2Valid,
    passengersCount2Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    pipeLength1,
    onPipeLength1Change,
    isPipeLength1Valid,
    pipeLength1Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    pipeLength2,
    onPipeLength2Change,
    isPipeLength2Valid,
    pipeLength2Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    boomLength1,
    onBoomLength1Change,
    isBoomLength1Valid,
    boomLength1Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    boomLength2,
    onBoomLength2Change,
    isBoomLength2Valid,
    boomLength2Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    liftingCapacity1,
    onLiftingCapacity1Change,
    isLiftingCapacity1Valid,
    liftingCapacity1Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    liftingCapacity2,
    onLiftingCapacity2Change,
    isLiftingCapacity2Valid,
    liftingCapacity2Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    performance1,
    onPerformance1Change,
    isPerformance1Valid,
    performance1Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    performance2,
    onPerformance2Change,
    isPerformance2Valid,
    performance2Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [rollersTypeI, setRollersTypeI] = useState(0);
  const [
    rollersCount1,
    onRollersCount1Change,
    isRollersCount1Valid,
    rollersCount1Error,
  ] = useInputValidator({
    minValue: 1,
  });
  const [
    rollersCount2,
    onRollersCount2Change,
    isRollersCount2Valid,
    rollersCount2Error,
  ] = useInputValidator({
    minValue: 1,
  });
  const [sizeTypeI, setSizeTypeI] = useState(0);
  const [ossigI, setOssigI] = useState(0);
  const [axesCountI, setAxesCountI] = useState(0);
  const [
    bodyLength1,
    onBodyLength1Change,
    isBodyLength1Valid,
    bodyLength1Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    bodyLength2,
    onBodyLength2Change,
    isBodyLength2Valid,
    bodyLength2Error,
  ] = useInputValidator({
    minValue: 0,
  });
  const [
    trailerType,
    selectTrailerType,
    unselectTrailerType,
    ____,
    isTrailerTypeValid,
    trailerTypeError,
  ] = useSelectionValidator({});
  const [loadingTypeI, setLoadingTypeI] = useState(0);
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
        {
          id: "weight",
          type: "interval",
          firstValue: weight1,
          secondValue: weight2,
          onFirstValueChange: onWeight1Change,
          onSecondValueChange: onWeight2Change,
          hidden: !technicType[0] || !TECHNICS[technicType[0]].params.weight,
          error: weight1Error || weight2Error,
          label: getLabelForParam("weight"),
          keyboardType: "decimal-pad",
        },
        {
          id: "height",
          type: "interval",
          firstValue: height1,
          secondValue: height2,
          onFirstValueChange: onHeight1Change,
          onSecondValueChange: onHeight2Change,
          hidden: !technicType[0] || !TECHNICS[technicType[0]].params.height,
          error: height1Error || height2Error,
          label: getLabelForParam("height"),
          keyboardType: "decimal-pad",
        },
        {
          id: "volume",
          type: "interval",
          firstValue: volume1,
          secondValue: volume2,
          onFirstValueChange: onVolume1Change,
          onSecondValueChange: onVolume2Change,
          hidden: !technicType[0] || !TECHNICS[technicType[0]].params.volume,
          error: volume1Error || volume2Error,
          label: getLabelForParam("volume"),
          keyboardType: "decimal-pad",
        },
        {
          id: "passengersCount",
          type: "interval",
          firstValue: passengersCount1,
          secondValue: passengersCount2,
          onFirstValueChange: onPassengersCount1Change,
          onSecondValueChange: onPassengersCount2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.passengersCount,
          error: passengersCount1Error || passengersCount2Error,
          label: getLabelForParam("passengersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "pipeLength",
          type: "interval",
          firstValue: pipeLength1,
          secondValue: pipeLength2,
          onFirstValueChange: onPipeLength1Change,
          onSecondValueChange: onPipeLength2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.pipeLength,
          error: pipeLength1Error || pipeLength2Error,
          label: getLabelForParam("pipeLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "boomLength",
          type: "interval",
          firstValue: boomLength1,
          secondValue: boomLength2,
          onFirstValueChange: onBoomLength1Change,
          onSecondValueChange: onBoomLength2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.boomLength,
          error: boomLength1Error || boomLength2Error,
          label: getLabelForParam("boomLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "liftingCapacity",
          type: "interval",
          firstValue: liftingCapacity1,
          secondValue: liftingCapacity2,
          onFirstValueChange: onLiftingCapacity1Change,
          onSecondValueChange: onLiftingCapacity2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.liftingCapacity,
          error: liftingCapacity1Error || liftingCapacity2Error,
          label: getLabelForParam("liftingCapacity"),
          keyboardType: "decimal-pad",
        },
        {
          id: "performance",
          type: "interval",
          firstValue: performance1,
          secondValue: performance2,
          onFirstValueChange: onPerformance1Change,
          onSecondValueChange: onPerformance2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.performance,
          error: performance1Error || performance2Error,
          label: getLabelForParam("performance"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersCount",
          type: "interval",
          firstValue: rollersCount1,
          secondValue: rollersCount2,
          onFirstValueChange: onRollersCount1Change,
          onSecondValueChange: onRollersCount2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.rollersCount,
          error: rollersCount1Error || rollersCount2Error,
          label: getLabelForParam("rollersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "boyLength",
          type: "interval",
          firstValue: bodyLength1,
          secondValue: bodyLength2,
          onFirstValueChange: onBodyLength1Change,
          onSecondValueChange: onBodyLength2Change,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.bodyLength,
          error: bodyLength1Error || bodyLength2Error,
          label: getLabelForParam("bodyLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersType",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.rollerType,
          selectedIndex: rollersTypeI,
          onChange: (evt) =>
            setRollersTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForParam("rollerType"),
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.rollerType,
        },
        {
          id: "sizeType",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.sizeType,
          selectedIndex: sizeTypeI,
          onChange: (evt) => setSizeTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForParam("sizeType"),
          hidden: !technicType[0] || !TECHNICS[technicType[0]].params.sizeType,
        },
        {
          id: "ossig",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.OSSIG,
          selectedIndex: ossigI,
          onChange: (evt) => setOssigI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForParam("OSSIG"),
          hidden: !technicType[0] || !TECHNICS[technicType[0]].params.OSSIG,
        },
        {
          id: "axesCount",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.axesCount,
          selectedIndex: axesCountI,
          onChange: (evt) =>
            setAxesCountI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForParam("axesCount"),
          hidden: !technicType[0] || !TECHNICS[technicType[0]].params.axesCount,
        },
        {
          id: "trailerType",
          type: "selection",
          itemsList: INPUT_VALUES_WITH_ALL.trailerType,
          value: trailerType,
          selectItem: selectTrailerType,
          unselectItem: unselectTrailerType,
          placeholder: "",
          label: getLabelForParam("trailerType"),
          error: trailerTypeError,
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.trailerType,
        },
        {
          id: "loadingType",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.loadingType,
          selectedIndex: loadingTypeI,
          onChange: (evt) =>
            setLoadingTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForParam("loadingType"),
          hidden:
            !technicType[0] || !TECHNICS[technicType[0]].params.loadingType,
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "count",
          type: "interval",
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
