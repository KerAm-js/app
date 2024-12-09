import { FC, useMemo, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import {
  ALL,
  DANGER_CLASSES,
  DUMP_TRANSACTION_TYPES,
  ENUM_TITLES,
  ENUMS,
  FILTER_ENUMS_WITH_ALL,
  MEASURE_IN,
  PAYMENT_TYPES,
  SHIFT_TYPES,
} from "../../../../consts/enums";
import { WASTE_TYPES } from "../../../../consts/data";
import { useActions } from "../../../../hooks/store/useActions";
import { TDumpFilter } from "../../store/types";
import { View } from "react-native";
import { ResetFilterButton } from "../ResetFilterButton/ResetFilterButton";
import { useNavigation } from "@react-navigation/native";
import { IDumpTransportType, useDumpTransports } from "../../../MiniEntities";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useIntervalValidator } from "../../../../hooks/inputValidators/useIntervalValidator";

const dumpTransactionTypes = DUMP_TRANSACTION_TYPES.map((type, index) => ({
  id: index,
  value: type,
  name: ENUM_TITLES[type],
}));

const wasteTypes = WASTE_TYPES.map((type, index) => ({
  id: index,
  name: type,
}));

const dangerClasses = DANGER_CLASSES.map((item, index) => ({
  id: index,
  value: item,
  name: ENUM_TITLES[item],
}));

const DumpForm: FC<TDumpFilter> = (currentFilter) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dumpTransports = useDumpTransports();
  const initTransactionType = useMemo(
    () =>
      dumpTransactionTypes.find(
        (item) => item.value === currentFilter?.transactionType
      ) || undefined,
    []
  );
  const initWasteType = useMemo(
    () =>
      wasteTypes.find((item) => item.name === currentFilter?.wasteType) ||
      undefined,
    []
  );
  const initDangerClass = useMemo(
    () =>
      dangerClasses.find((item) => item.value === currentFilter?.dangerClass) ||
      undefined,
    []
  );
  const initMeasureI = useMemo(
    () => MEASURE_IN.findIndex((item) => item === currentFilter?.measureIn),
    []
  );
  const initAmountFrom = currentFilter?.amountFrom?.toString() || undefined;
  const initAmountTo = currentFilter?.amountTo?.toString() || undefined;
  const initCoefficientFrom =
    currentFilter?.coefficientFrom?.toString() || undefined;
  const initCoefficientTo =
    currentFilter?.coefficientTo?.toString() || undefined;
  const initShiftTypeI = useMemo(() => {
    const i = SHIFT_TYPES.findIndex((item) => item === currentFilter.shiftType);
    return i < 0 ? FILTER_ENUMS_WITH_ALL.shiftTypes.length - 1 : i;
  }, []);
  const initPaymentTypeI = useMemo(() => {
    const i = PAYMENT_TYPES.findIndex(
      (item) => item === currentFilter.paymentType
    );
    return i < 0 ? PAYMENT_TYPES.length - 1 : i;
  }, []);

  const { setDumpFilter } = useActions();
  const [type, selectType, unselectType, _, isTypeValid, typeError] =
    useSelectionValidator({
      required: true,
      initValue: [initTransactionType || dumpTransactionTypes[0]],
    });
  const [
    wasteType,
    selectWasteType,
    unselectWasteType,
    __,
    isWasteTypeValid,
    wasteTypeError,
  ] = useSelectionValidator<(typeof wasteTypes)[0]>({
    required: false,
    initValue: initWasteType ? [initWasteType] : undefined,
  });
  const [
    dangerClass,
    selectDangerClass,
    unselectDangerClass,
    ___,
    isDangerClassValid,
    dangerClassError,
  ] = useSelectionValidator<(typeof dangerClasses)[0]>({
    initValue: initDangerClass ? [initDangerClass] : undefined,
  });
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
  ] = useSelectionValidator<IDumpTransportType>({
    multySelection: false,
    initValue: currentFilter.transports || [],
  });
  const [measureI, setMeasureI] = useState(initMeasureI < 0 ? 0 : initMeasureI);
  const [
    amountFrom,
    amountTo,
    onAmountFromChange,
    onAmountToChange,
    isAmountFromValid,
    isAmountToValid,
    amountFromError,
    amountToError,
  ] = useIntervalValidator({
    minValue: 1,
    firstInitValue: initAmountFrom,
    secondInitValue: initAmountTo,
    requiredBothOrNone: true,
  });
  const [
    coefficientFrom,
    coefficientTo,
    onCoefficientFromChange,
    onCoefficientToChange,
    isCoefficientFromValid,
    isCoefficientToValid,
    coefficientFromError,
    coefficientToError,
  ] = useIntervalValidator({
    minValue: 1,
    firstInitValue: initCoefficientFrom,
    secondInitValue: initCoefficientTo,
    requiredBothOrNone: true,
  });
  const [shiftTypeI, setShiftTypeI] = useState(initShiftTypeI);
  const [paymentTypeI, setPaymentTypeI] = useState(initPaymentTypeI);

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
          itemsList: dumpTransactionTypes,
          error: typeError,
          placeholder: "",
          label: "Тип объявления",
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
          itemsList: wasteTypes,
          error: wasteTypeError,
          placeholder: "",
          label: "Вид отходов",
        },
        {
          id: "dangerClass",
          type: "selection",
          value: dangerClass,
          selectItem: selectDangerClass,
          unselectItem: unselectDangerClass,
          itemsList: dangerClasses,
          error: dangerClassError,
          placeholder: "",
          label: "Класс опасности",
        },
        {
          id: "transport",
          type: "selection",
          value: transport,
          selectItem: selectTransport,
          unselectItem: unselectTransport,
          itemsList: dumpTransports,
          error: transportError,
          label: "Вид транспорта",
        },
        {
          id: "measure",
          type: "segment",
          values: ENUMS.measureIn,
          selectedIndex: measureI,
          onChange: (evt) => setMeasureI(evt.nativeEvent.selectedSegmentIndex),
          label: "Измерять",
        },
        {
          id: "amount",
          type: "interval",
          firstValue: amountFrom,
          secondValue: amountTo,
          onFirstValueChange: onAmountFromChange,
          onSecondValueChange: onAmountToChange,
          error: amountFromError || amountToError,
          isFirstFieldInvalid: !isAmountFromValid,
          isSecondFieldInvalid: !isAmountToValid,
          label:
            ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME
              ? "Объём (м3)"
              : "Вес (т)",
          keyboardType: "decimal-pad",
        },
        {
          id: "coefficient",
          type: "interval",
          firstValue: coefficientFrom,
          secondValue: coefficientTo,
          onFirstValueChange: onCoefficientFromChange,
          onSecondValueChange: onCoefficientToChange,
          error: coefficientFromError || coefficientToError,
          label: "Коэффициент (вес/объём)",
          keyboardType: "decimal-pad",
          isFirstFieldInvalid: !isCoefficientFromValid,
          isSecondFieldInvalid: !isCoefficientToValid,
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "workMode",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.shiftTypes,
          selectedIndex: shiftTypeI,
          onChange: (evt) =>
            setShiftTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
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
    isTypeValid &&
    isAmountFromValid &&
    isAmountToValid &&
    isCoefficientFromValid &&
    isCoefficientToValid;

  const onSubmit = () => {
    const result: TDumpFilter = {
      title: null,
      description: null,
      priceFrom: null,
      priceTo: null,
      //parameters below are not using for filter
      transactionType: type[0].value,
      measureIn: MEASURE_IN[measureI],
      amountFrom: Number(amountFrom) || null,
      amountTo: Number(amountTo) || null,
      coefficientFrom: Number(coefficientFrom) || null,
      coefficientTo: Number(coefficientTo) || null,
      shiftType:
        FILTER_ENUMS_WITH_ALL.shiftTypes[shiftTypeI] !== ALL
          ? SHIFT_TYPES[shiftTypeI]
          : null,
      paymentType:
        PAYMENT_TYPES[paymentTypeI] !== "ANY"
          ? PAYMENT_TYPES[paymentTypeI]
          : null,
      transports: transport.length > 0 ? transport : null,
      wasteType: wasteType[0]?.name || null,
      dangerClass: dangerClass[0]?.value || null,
    };
    setDumpFilter(result);
    navigation.navigate("Main");
  };

  return (
    <View>
      <Form
        inputs={inputs}
        isFormValid={isFormValid}
        onSubmit={onSubmit}
        submitTitle="Сохранить"
      />
      <ResetFilterButton advertType="DUMP" />
    </View>
  );
};

export default DumpForm;
