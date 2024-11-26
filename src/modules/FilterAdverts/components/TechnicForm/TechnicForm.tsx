import { useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { TECHNICS } from "../../../../consts/data";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import {
  INPUT_VALUES,
  INPUT_VALUES_WITH_ALL,
} from "../../../../consts/inputValues";
import { DATE_REGEX } from "../../../../consts/regex";
import { getLabelForTechnicParam } from "../../../../helpers/advertParams";
import {
  ITechnicType,
  useGetTechnicTypesByLetterQuery,
} from "../../../PostAdvert/api/postAdvert.api";
import { handleError } from "../../../Auth/helpers/getErrorMessage";
import { View } from "react-native";

const TechnicForm = () => {
  const [typeI, setTypeI] = useState(0);
  const [
    technicType,
    selectTechnicType,
    unselectTechnicType,
    _,
    isTechnicTypeValid,
    technicTypeError,
    setTechnicTypeInitial,
    technicTypeSearch,
    setTechnicTypeSearch,
  ] = useSelectionValidator<ITechnicType>({ required: true });
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
    initValue: [INPUT_VALUES.paymentForTechnic[0]],
  });
  const [paymentTypeI, setPaymentTypeI] = useState(0);

  const {
    data: techTypes,
    isFetching: isTechnicTypeLoading,
    error,
  } = useGetTechnicTypesByLetterQuery(technicTypeSearch, {
    skip: !technicTypeSearch,
  });

  const hasWeight = !!technicType[0]?.parameters.find(
    (param) => param.name === "weight"
  );
  const hasHeight = !!technicType[0]?.parameters.find(
    (param) => param.name === "height"
  );
  const hasVolume = !!technicType[0]?.parameters.find(
    (param) => param.name === "volume"
  );
  const hasPassengersCount = !!!technicType[0]?.parameters.find(
    (param) => param.name === "passengers_count"
  );
  const hasPipeLength = !!technicType[0]?.parameters.find(
    (param) => param.name === "pipe_length"
  );
  const hasBoomLength = !!technicType[0]?.parameters.find(
    (param) => param.name === "boom_length"
  );
  const hasLiftingCapacity = !!technicType[0]?.parameters.find(
    (param) => param.name === "lifting_capacity"
  );
  const hasPerformance = !!technicType[0]?.parameters.find(
    (param) => param.name === "performance"
  );
  const hasRollerType = !!technicType[0]?.parameters.find(
    (param) => param.name === "roller_type"
  );
  const hasSizeType = !!technicType[0]?.parameters.find(
    (param) => param.name === "size_type"
  );
  const hasOSSIG = !!technicType[0]?.parameters.find(
    (param) => param.name === "ossig"
  );
  const hasAxesCount = !!technicType[0]?.parameters.find(
    (param) => param.name === "axes_count"
  );
  const hasBodyLength = !!technicType[0]?.parameters.find(
    (param) => param.name === "body_length"
  );
  const hasTrailerType = !!technicType[0]?.parameters.find(
    (param) => param.name === "trailer_type"
  );
  const hasLoadingType = !!technicType[0]?.parameters.find(
    (param) => param.name === "loading_type"
  );

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
          itemsList:
            !!technicTypeSearch && !isTechnicTypeLoading ? techTypes : [],
          isLoading: isTechnicTypeLoading,
          value: technicType,
          selectItem: selectTechnicType,
          unselectItem: unselectTechnicType,
          label: "Вид техники",
          error: technicTypeError || handleError(error),
          usesDataFromApi: true,
          search: technicTypeSearch,
          setSearch: setTechnicTypeSearch,
        },
        {
          id: "equipment",
          type: "selection",
          hidden: !technicType[0] || technicType[0]?.equipments.length === 0,
          itemsList: technicType[0]?.equipments || [],
          value: equipment,
          selectItem: selectEquipment,
          unselectItem: unselectEquipment,
          label: "Дополнительное оборудование",
          error: equipmentError,
          usesDataFromApi: false,
        },
        {
          id: "weight",
          type: "interval",
          firstValue: weight1,
          secondValue: weight2,
          onFirstValueChange: onWeight1Change,
          onSecondValueChange: onWeight2Change,
          hidden: !technicType[0] || !hasWeight,
          error: weight1Error || weight2Error,
          label: getLabelForTechnicParam("weight"),
          keyboardType: "decimal-pad",
        },
        {
          id: "height",
          type: "interval",
          firstValue: height1,
          secondValue: height2,
          onFirstValueChange: onHeight1Change,
          onSecondValueChange: onHeight2Change,
          hidden: !technicType[0] || !hasHeight,
          error: height1Error || height2Error,
          label: getLabelForTechnicParam("height"),
          keyboardType: "decimal-pad",
        },
        {
          id: "volume",
          type: "interval",
          firstValue: volume1,
          secondValue: volume2,
          onFirstValueChange: onVolume1Change,
          onSecondValueChange: onVolume2Change,
          hidden: !technicType[0] || !hasVolume,
          error: volume1Error || volume2Error,
          label: getLabelForTechnicParam("volume"),
          keyboardType: "decimal-pad",
        },
        {
          id: "passengersCount",
          type: "interval",
          firstValue: passengersCount1,
          secondValue: passengersCount2,
          onFirstValueChange: onPassengersCount1Change,
          onSecondValueChange: onPassengersCount2Change,
          hidden: !technicType[0] || !hasPassengersCount,
          error: passengersCount1Error || passengersCount2Error,
          label: getLabelForTechnicParam("passengersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "pipeLength",
          type: "interval",
          firstValue: pipeLength1,
          secondValue: pipeLength2,
          onFirstValueChange: onPipeLength1Change,
          onSecondValueChange: onPipeLength2Change,
          hidden: !technicType[0] || !hasPipeLength,
          error: pipeLength1Error || pipeLength2Error,
          label: getLabelForTechnicParam("pipeLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "boomLength",
          type: "interval",
          firstValue: boomLength1,
          secondValue: boomLength2,
          onFirstValueChange: onBoomLength1Change,
          onSecondValueChange: onBoomLength2Change,
          hidden: !technicType[0] || !hasBoomLength,
          error: boomLength1Error || boomLength2Error,
          label: getLabelForTechnicParam("boomLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "liftingCapacity",
          type: "interval",
          firstValue: liftingCapacity1,
          secondValue: liftingCapacity2,
          onFirstValueChange: onLiftingCapacity1Change,
          onSecondValueChange: onLiftingCapacity2Change,
          hidden: !technicType[0] || !hasLiftingCapacity,
          error: liftingCapacity1Error || liftingCapacity2Error,
          label: getLabelForTechnicParam("liftingCapacity"),
          keyboardType: "decimal-pad",
        },
        {
          id: "performance",
          type: "interval",
          firstValue: performance1,
          secondValue: performance2,
          onFirstValueChange: onPerformance1Change,
          onSecondValueChange: onPerformance2Change,
          hidden: !technicType[0] || !hasPerformance,
          error: performance1Error || performance2Error,
          label: getLabelForTechnicParam("performance"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersCount",
          type: "interval",
          firstValue: rollersCount1,
          secondValue: rollersCount2,
          onFirstValueChange: onRollersCount1Change,
          onSecondValueChange: onRollersCount2Change,
          hidden: !technicType[0] || !hasRollerType,
          error: rollersCount1Error || rollersCount2Error,
          label: getLabelForTechnicParam("rollersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "bodyLength",
          type: "interval",
          firstValue: bodyLength1,
          secondValue: bodyLength2,
          onFirstValueChange: onBodyLength1Change,
          onSecondValueChange: onBodyLength2Change,
          hidden: !technicType[0] || !hasBodyLength,
          error: bodyLength1Error || bodyLength2Error,
          label: getLabelForTechnicParam("bodyLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersType",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.rollerType,
          selectedIndex: rollersTypeI,
          onChange: (evt) =>
            setRollersTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("rollerType"),
          hidden: !technicType[0] || !hasRollerType,
        },
        {
          id: "sizeType",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.sizeType,
          selectedIndex: sizeTypeI,
          onChange: (evt) => setSizeTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("sizeType"),
          hidden: !technicType[0] || !hasSizeType,
        },
        {
          id: "ossig",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.OSSIG,
          selectedIndex: ossigI,
          onChange: (evt) => setOssigI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("OSSIG"),
          hidden: !technicType[0] || !hasOSSIG,
        },
        {
          id: "axesCount",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.axesCount,
          selectedIndex: axesCountI,
          onChange: (evt) =>
            setAxesCountI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("axesCount"),
          hidden: !technicType[0] || !hasAxesCount,
        },
        {
          id: "trailerType",
          type: "selection",
          itemsList: INPUT_VALUES_WITH_ALL.trailerType,
          value: trailerType,
          selectItem: selectTrailerType,
          unselectItem: unselectTrailerType,
          placeholder: "",
          label: getLabelForTechnicParam("trailerType"),
          error: trailerTypeError,
          usesDataFromApi: false,
          hidden: !technicType[0] || !hasTrailerType,
        },
        {
          id: "loadingType",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.loadingType,
          selectedIndex: loadingTypeI,
          onChange: (evt) =>
            setLoadingTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("loadingType"),
          hidden: !technicType[0] || !hasLoadingType,
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
          itemsList: INPUT_VALUES.paymentForTechnic,
          value: paymentFor,
          selectItem: selectPaymentFor,
          unselectItem: unselectPaymentFor,
          placeholder: "",
          label: "Оплата за",
          error: paymentForError,
          usesDataFromApi: false,
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
    isPaymentForValid;

  const onSubmit = () => {};

  return (
    <View>
      <Form
        inputs={inputs}
        isFormValid={isFormValid}
        onSubmit={onSubmit}
        submitTitle="Сохранить"
      />
    </View>
  );
};

export default TechnicForm;
