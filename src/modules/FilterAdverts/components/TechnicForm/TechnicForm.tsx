import { FC, useMemo, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { getLabelForTechnicParam } from "../../../../helpers/advertParams";
import {
  ITechnicType,
  useGetTechnicTypesByLetterQuery,
} from "../../../PostAdvert/api/postAdvert.api";
import { handleError } from "../../../Auth/helpers/getErrorMessage";
import { View } from "react-native";
import { TTechnicFilter } from "../../store/types";
import {
  ALL,
  AXES_COUNTS,
  ENUM_TITLES,
  ENUMS,
  FILTER_ENUMS_WITH_ALL,
  LOADING_TYPES,
  PAYMENT_TYPES,
  PAYMENT_UNITS,
  ROLLER_TYPES,
  SHIFT_TYPES,
  SIZE_TYPES,
  TECHNIC_TRANSACTION_TYPES,
  TRAILER_TYPES,
} from "../../../../consts/enums";
import { useNavigation } from "@react-navigation/native";
import { useActions } from "../../../../hooks/store/useActions";
import { TEquipment } from "../../api/filterAdverts.api";

const trailerTypes = TRAILER_TYPES.map((item, index) => ({
  id: index,
  name: ENUM_TITLES[item],
  value: item,
}));

const TechnicForm: FC<TTechnicFilter> = (currentFilter) => {
  const navigation = useNavigation();
  const { setTechnicFilter } = useActions();

  const initTypeI = useMemo(
    () =>
      TECHNIC_TRANSACTION_TYPES.findIndex(
        (item) => item === currentFilter.transactionType
      ),
    []
  );
  const initRollersTypeI = useMemo(
    () => ROLLER_TYPES.findIndex((item) => item === currentFilter.rollerType),
    []
  );
  const initSizeTypeI = useMemo(
    () => SIZE_TYPES.findIndex((item) => item === currentFilter.sizeType),
    []
  );
  const initOssigI = currentFilter.OSSIG ? 1 : 0;
  const initAxesCountI = useMemo(
    () =>
      AXES_COUNTS.findIndex(
        (item) => item === currentFilter.axesCountFrom?.toString()
      ),
    []
  );
  const initLoadingTypeI = useMemo(
    () => LOADING_TYPES.findIndex((item) => item === currentFilter.loadingType),
    []
  );
  const initShiftTypeI = useMemo(
    () => SHIFT_TYPES.findIndex((item) => item === currentFilter.shiftType),
    []
  );
  const initPaymentUnitI = useMemo(
    () => PAYMENT_UNITS.findIndex((item) => item === currentFilter.paymentUnit),
    []
  );
  const initPaymentTypeI = useMemo(
    () => PAYMENT_TYPES.findIndex((item) => item === currentFilter.paymentType),
    []
  );
  const initTrailerType = trailerTypes.find(
    (item) => item.value === currentFilter.trailerType
  );
  const initTechnicType = null; // TODO - default technicType
  const initEquipment = null; // TODO - default initEquipment
  const initWeightFrom = currentFilter?.weightFrom?.toString() || undefined;
  const initWeightTo = currentFilter?.weightTo?.toString() || undefined;
  const initHeightFrom = currentFilter?.heightFrom?.toString() || undefined;
  const initHeightTo = currentFilter?.heightTo?.toString() || undefined;
  const initVolumeFrom = currentFilter?.volumeFrom?.toString() || undefined;
  const initVolumeTo = currentFilter?.volumeTo?.toString() || undefined;
  const initPassengersCountFrom =
    currentFilter?.passengersCountFrom?.toString() || undefined;
  const initPassengersCountTo =
    currentFilter?.passengersCountTo?.toString() || undefined;
  const initPipeLengthFrom =
    currentFilter?.pipeLengthFrom?.toString() || undefined;
  const initPipeLengthTo = currentFilter?.pipeLengthTo?.toString() || undefined;
  const initBoomLengthFrom =
    currentFilter?.boomLengthFrom?.toString() || undefined;
  const initBoomLengthTo = currentFilter?.boomLengthTo?.toString() || undefined;
  const initLiftingCapacityFrom =
    currentFilter?.liftingCapacityFrom?.toString() || undefined;
  const initLiftingCapacityTo =
    currentFilter?.liftingCapacityTo?.toString() || undefined;
  const initPerformanceFrom =
    currentFilter?.performanceFrom?.toString() || undefined;
  const initPerformanceTo =
    currentFilter?.performanceTo?.toString() || undefined;
  const initRollersCountFrom =
    currentFilter?.rollersCountFrom?.toString() || undefined;
  const initRollersCountTo =
    currentFilter?.rollersCountTo?.toString() || undefined;
  const initBodyLengthFrom =
    currentFilter?.bodyLengthFrom?.toString() || undefined;
  const initBodyLengthTo = currentFilter?.bodyLengthTo?.toString() || undefined;
  const initUnitAmountFrom =
    currentFilter?.unitAmountFrom?.toString() || undefined;
  const initUnitAmountTo = currentFilter?.unitAmountTo?.toString() || undefined;
  const initRentalDaysCountFrom =
    currentFilter?.rentalDaysCountFrom?.toString() || undefined;
  const initRentalDaysCountTo =
    currentFilter?.rentalDaysCountTo?.toString() || undefined;

  const [typeI, setTypeI] = useState(initTypeI < 0 ? 0 : initTypeI);
  const [
    technicType,
    selectTechnicType,
    unselectTechnicType,
    _,
    isTechnicTypeValid,
    technicTypeError,
    _____,
    technicTypeSearch,
    setTechnicTypeSearch,
  ] = useSelectionValidator<ITechnicType>({ required: true });
  const [
    equipment,
    selectEquipment,
    unselectEquipment,
    ______,
    __,
    equipmentError,
  ] = useSelectionValidator<TEquipment>({ multySelection: true });
  const [
    weightFrom,
    onWeightFromChange,
    ______________________,
    weightFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initWeightFrom,
  });
  const [weightTo, onWeightToChange, _______________________, weightToError] =
    useInputValidator({
      minValue: 0,
      initValue: initWeightTo,
    });
  const [
    heightFrom,
    onHeightFromChange,
    ________________________,
    heightFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initHeightFrom,
  });
  const [heightTo, onHeightToChange, _________________________, heightToError] =
    useInputValidator({
      minValue: 0,
      initValue: initHeightTo,
    });
  const [
    volumeFrom,
    onVolumeFromChange,
    __________________________,
    volumeFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initVolumeFrom,
  });
  const [
    volumeTo,
    onVolumeToChange,
    ___________________________,
    volumeToError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initVolumeTo,
  });
  const [
    passengersCountFrom,
    onPassengersCountFromChange,
    _________,
    passengersCountFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initPassengersCountFrom,
  });
  const [
    passengersCountTo,
    onPassengersCountToChange,
    _______,
    passengersCountToError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initPassengersCountTo,
  });
  const [
    pipeLengthFrom,
    onPipeLengthFromChange,
    ________,
    pipeLengthFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initPipeLengthFrom,
  });
  const [
    pipeLengthTo,
    onPipeLengthToChange,
    ________________,
    pipeLengthToError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initPipeLengthTo,
  });
  const [
    boomLengthFrom,
    onBoomLengthFromChange,
    ______________,
    boomLengthFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initBoomLengthFrom,
  });
  const [boomLengthTo, onBoomLengthToChange, ___________, boomLengthToError] =
    useInputValidator({
      minValue: 0,
      initValue: initBoomLengthTo,
    });
  const [
    liftingCapacityFrom,
    onLiftingCapacityFromChange,
    __________,
    liftingCapacityFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initLiftingCapacityFrom,
  });
  const [
    liftingCapacityTo,
    onLiftingCapacityToChange,
    ____________,
    liftingCapacityToError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initLiftingCapacityTo,
  });
  const [
    performanceFrom,
    onPerformanceFromChange,
    _____________,
    performanceFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initPerformanceFrom,
  });
  const [
    performanceTo,
    onPerformanceToChange,
    ___________________,
    performanceToError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initPerformanceTo,
  });
  const [rollersTypeI, setRollersTypeI] = useState(
    initRollersTypeI < 0 ? 0 : initRollersTypeI
  );
  const [
    rollersCountFrom,
    onRollersCountFromChange,
    _________________,
    rollersCountFromError,
  ] = useInputValidator({
    minValue: 1,
    initValue: initRollersCountFrom,
  });
  const [
    rollersCountTo,
    onRollersCountToChange,
    _______________,
    rollersCountToError,
  ] = useInputValidator({
    minValue: 1,
    initValue: initRollersCountTo,
  });
  const [sizeTypeI, setSizeTypeI] = useState(
    initSizeTypeI < 0 ? 0 : initSizeTypeI
  );
  const [ossigI, setOssigI] = useState(initOssigI < 0 ? 0 : initOssigI);
  const [axesCountI, setAxesCountI] = useState(
    initAxesCountI < 0 ? 0 : initAxesCountI
  );
  const [
    bodyLengthFrom,
    onBodyLengthFromChange,
    __________________,
    bodyLengthFromError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initBodyLengthFrom,
  });
  const [
    bodyLengthTo,
    onBodyLengthToChange,
    ____________________,
    bodyLengthToError,
  ] = useInputValidator({
    minValue: 0,
    initValue: initBodyLengthTo,
  });
  const [
    trailerType,
    selectTrailerType,
    unselectTrailerType,
    ____,
    _____________________,
    trailerTypeError,
  ] = useSelectionValidator<(typeof trailerTypes)[0]>({
    initValue: initTrailerType ? [initTrailerType] : undefined,
  });
  const [loadingTypeI, setLoadingTypeI] = useState(
    initLoadingTypeI < 0 ? 0 : initLoadingTypeI
  );
  const [
    unitAmountFrom,
    onUnitAmountFromChange,
    isUnitAmountFromValid,
    unitAmountFromError,
  ] = useInputValidator({
    minValue: 1,
    initValue: initUnitAmountFrom,
  });
  const [
    unitAmountTo,
    onUnitAmountToChange,
    isUnitAmountToValid,
    unitAmountToError,
  ] = useInputValidator({
    minValue: 1,
    initValue: initUnitAmountTo,
  });
  const [shiftTypeI, setShiftTypeI] = useState(
    initShiftTypeI < 0 ? 0 : initShiftTypeI
  );
  const [
    rentalDaysCountFrom,
    onRentalDaysCountFromChange,
    isRentalDaysCountFromValid,
    rentalDaysCountFromError,
  ] = useInputValidator({
    minValue: 1,
    initValue: initRentalDaysCountFrom,
  });
  const [
    rentalDaysCountTo,
    onRentalDaysCountToChange,
    isRentalDaysCountToValid,
    rentalDaysCountToError,
  ] = useInputValidator({
    minValue: 1,
    initValue: initRentalDaysCountTo,
  });
  const [paymentUnitI, setPaymentUnitI] = useState(
    initPaymentUnitI < 0 ? 0 : initPaymentUnitI
  );
  const [paymentTypeI, setPaymentTypeI] = useState(
    initPaymentTypeI < 0 ? 0 : initPaymentTypeI
  );

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
  const hasPassengersCount = !!technicType[0]?.parameters.find(
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
          values: ENUMS.technincTransactionTypes,
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
          firstValue: weightFrom,
          secondValue: weightTo,
          onFirstValueChange: onWeightFromChange,
          onSecondValueChange: onWeightToChange,
          hidden: !technicType[0] || !hasWeight,
          error: weightFromError || weightToError,
          label: getLabelForTechnicParam("weight"),
          keyboardType: "decimal-pad",
        },
        {
          id: "height",
          type: "interval",
          firstValue: heightFrom,
          secondValue: heightTo,
          onFirstValueChange: onHeightFromChange,
          onSecondValueChange: onHeightToChange,
          hidden: !technicType[0] || !hasHeight,
          error: heightFromError || heightToError,
          label: getLabelForTechnicParam("height"),
          keyboardType: "decimal-pad",
        },
        {
          id: "volume",
          type: "interval",
          firstValue: volumeFrom,
          secondValue: volumeTo,
          onFirstValueChange: onVolumeFromChange,
          onSecondValueChange: onVolumeToChange,
          hidden: !technicType[0] || !hasVolume,
          error: volumeFromError || volumeToError,
          label: getLabelForTechnicParam("volume"),
          keyboardType: "decimal-pad",
        },
        {
          id: "passengersCount",
          type: "interval",
          firstValue: passengersCountFrom,
          secondValue: passengersCountTo,
          onFirstValueChange: onPassengersCountFromChange,
          onSecondValueChange: onPassengersCountToChange,
          hidden: !technicType[0] || !hasPassengersCount,
          error: passengersCountFromError || passengersCountToError,
          label: getLabelForTechnicParam("passengersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "pipeLength",
          type: "interval",
          firstValue: pipeLengthFrom,
          secondValue: pipeLengthTo,
          onFirstValueChange: onPipeLengthFromChange,
          onSecondValueChange: onPipeLengthToChange,
          hidden: !technicType[0] || !hasPipeLength,
          error: pipeLengthFromError || pipeLengthToError,
          label: getLabelForTechnicParam("pipeLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "boomLength",
          type: "interval",
          firstValue: boomLengthFrom,
          secondValue: boomLengthTo,
          onFirstValueChange: onBoomLengthFromChange,
          onSecondValueChange: onBoomLengthToChange,
          hidden: !technicType[0] || !hasBoomLength,
          error: boomLengthFromError || boomLengthToError,
          label: getLabelForTechnicParam("boomLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "liftingCapacity",
          type: "interval",
          firstValue: liftingCapacityFrom,
          secondValue: liftingCapacityTo,
          onFirstValueChange: onLiftingCapacityFromChange,
          onSecondValueChange: onLiftingCapacityToChange,
          hidden: !technicType[0] || !hasLiftingCapacity,
          error: liftingCapacityFromError || liftingCapacityToError,
          label: getLabelForTechnicParam("liftingCapacity"),
          keyboardType: "decimal-pad",
        },
        {
          id: "performance",
          type: "interval",
          firstValue: performanceFrom,
          secondValue: performanceTo,
          onFirstValueChange: onPerformanceFromChange,
          onSecondValueChange: onPerformanceToChange,
          hidden: !technicType[0] || !hasPerformance,
          error: performanceFromError || performanceToError,
          label: getLabelForTechnicParam("performance"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersCount",
          type: "interval",
          firstValue: rollersCountFrom,
          secondValue: rollersCountTo,
          onFirstValueChange: onRollersCountFromChange,
          onSecondValueChange: onRollersCountToChange,
          hidden: !technicType[0] || !hasRollerType,
          error: rollersCountFromError || rollersCountToError,
          label: getLabelForTechnicParam("rollersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "bodyLength",
          type: "interval",
          firstValue: bodyLengthFrom,
          secondValue: bodyLengthTo,
          onFirstValueChange: onBodyLengthFromChange,
          onSecondValueChange: onBodyLengthToChange,
          hidden: !technicType[0] || !hasBodyLength,
          error: bodyLengthFromError || bodyLengthToError,
          label: getLabelForTechnicParam("bodyLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersType",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.rollerTypes,
          selectedIndex: rollersTypeI,
          onChange: (evt) =>
            setRollersTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("rollerType"),
          hidden: !technicType[0] || !hasRollerType,
        },
        {
          id: "sizeType",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.sizeTypes,
          selectedIndex: sizeTypeI,
          onChange: (evt) => setSizeTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("sizeType"),
          hidden: !technicType[0] || !hasSizeType,
        },
        {
          id: "ossig",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.ossig,
          selectedIndex: ossigI,
          onChange: (evt) => setOssigI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("OSSIG"),
          hidden: !technicType[0] || !hasOSSIG,
        },
        {
          id: "axesCount",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.axesCount,
          selectedIndex: axesCountI,
          onChange: (evt) =>
            setAxesCountI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("axesCount"),
          hidden: !technicType[0] || !hasAxesCount,
        },
        {
          id: "trailerType",
          type: "selection",
          itemsList: trailerTypes,
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
          values: FILTER_ENUMS_WITH_ALL.loadingTypes,
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
          firstValue: unitAmountFrom,
          secondValue: unitAmountTo,
          onFirstValueChange: onUnitAmountFromChange,
          onSecondValueChange: onUnitAmountToChange,
          error: unitAmountFromError || unitAmountToError,
          label: "Количество единиц техники",
        },
        {
          id: "workMode",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.shiftTypes,
          selectedIndex: shiftTypeI,
          onChange: (evt) =>
            setShiftTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
        {
          id: "rentalDaysCount",
          type: "interval",
          firstValue: rentalDaysCountFrom,
          secondValue: rentalDaysCountTo,
          onFirstValueChange: onRentalDaysCountFromChange,
          onSecondValueChange: onRentalDaysCountToChange,
          error: rentalDaysCountFromError || rentalDaysCountToError,
          label: "Срок аренды (в днях)",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
        {
          id: "paymentFor",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.paymentUnits,
          selectedIndex: paymentUnitI,
          onChange: (evt) =>
            setPaymentUnitI(evt.nativeEvent.selectedSegmentIndex),
          label: "Оплата за",
        },
        {
          id: "paymentType",
          type: "segment",
          values: ENUMS.paymentTypes,
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
    isUnitAmountFromValid &&
    isUnitAmountToValid &&
    isRentalDaysCountFromValid &&
    isRentalDaysCountToValid;

  const onSubmit = () => {
    const result: TTechnicFilter = {};
    if (hasAxesCount && FILTER_ENUMS_WITH_ALL.axesCount[axesCountI] !== ALL) {
      const axesCount = Number(FILTER_ENUMS_WITH_ALL.axesCount[axesCountI]);
      result.axesCountFrom = axesCount;
      result.axesCountTo = axesCount;
    }
    if (equipment.length > 0) {
      result.equipment = equipment;
    }
    if (
      hasLoadingType &&
      FILTER_ENUMS_WITH_ALL.loadingTypes[loadingTypeI] !== ALL
    ) {
      result.loadingType = LOADING_TYPES[loadingTypeI];
    }
    if (hasOSSIG && FILTER_ENUMS_WITH_ALL.ossig[ossigI] !== ALL) {
      result.OSSIG = !!ossigI;
    }
    if (
      hasRollerType &&
      FILTER_ENUMS_WITH_ALL.rollerTypes[rollersTypeI] !== ALL
    ) {
      result.rollerType = ROLLER_TYPES[rollersTypeI];
    }
    if (trailerType.length === 1) {
      result.trailerType = trailerType[0].value;
    }
    result.bodyLengthFrom = Number(bodyLengthFrom) || undefined;
    result.bodyLengthTo = Number(bodyLengthTo) || undefined;
    result.boomLengthFrom = Number(boomLengthFrom) || undefined;
    result.boomLengthTo = Number(boomLengthTo) || undefined;
    result.heightFrom = Number(heightFrom) || undefined;
    result.heightTo = Number(heightTo) || undefined;
    result.liftingCapacityFrom = Number(liftingCapacityFrom) || undefined;
    result.liftingCapacityTo = Number(liftingCapacityTo) || undefined;
    result.passengersCountFrom = Number(passengersCountFrom) || undefined;
    result.passengersCountTo = Number(passengersCountTo) || undefined;
    result.performanceFrom = Number(performanceFrom) || undefined;
    result.performanceTo = Number(performanceTo) || undefined;
    result.pipeLengthFrom = Number(pipeLengthTo) || undefined;
    result.pipeLengthTo = Number(pipeLengthTo) || undefined;
    result.rentalDaysCountFrom = Number(rentalDaysCountFrom) || undefined;
    result.rentalDaysCountTo = Number(rentalDaysCountTo) || undefined;
    result.rollersCountFrom = Number(rollersCountFrom) || undefined;
    result.rollersCountTo = Number(rollersCountTo) || undefined;
    result.unitAmountFrom = Number(unitAmountFrom) || undefined;
    result.unitAmountTo = Number(unitAmountTo) || undefined;
    result.volumeFrom = Number(volumeFrom) || undefined;
    result.volumeTo = Number(volumeTo) || undefined;
    result.weightFrom = Number(weightFrom) || undefined;
    result.weightTo = Number(weightTo) || undefined;
    result.technicType = technicType[0].name;
    result.transactionType = TECHNIC_TRANSACTION_TYPES[typeI];
    if (FILTER_ENUMS_WITH_ALL.paymentTypes[paymentTypeI] !== ALL) {
      result.paymentType = PAYMENT_TYPES[paymentTypeI];
    }
    if (FILTER_ENUMS_WITH_ALL.paymentUnits[paymentUnitI] !== ALL) {
      result.paymentUnit = PAYMENT_UNITS[paymentUnitI];
    }
    if (FILTER_ENUMS_WITH_ALL.shiftTypes[shiftTypeI] !== ALL) {
      result.shiftType = SHIFT_TYPES[shiftTypeI];
    }
    setTechnicFilter(result);
    console.log('json', JSON.stringify(result))
    navigation.goBack();
  };

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
