import { FC, useMemo, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import {
  ITransportType,
  useGetTransportByLetterQuery,
} from "../../../PostAdvert/api/postAdvert.api";
import {
  DANGER_CLASSES,
  DUMP_TRANSACTION_TYPES,
  ENUM_TITLES,
  ENUMS,
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
  const navigation = useNavigation();
  const initTransactionType = useMemo(
    () =>
      dumpTransactionTypes.find(
        (item) => item.name === currentFilter?.transactionType
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
  const initMeasureI = MEASURE_IN.findIndex(
    (item) => item === currentFilter?.measureIn
  );
  const initAmountFrom = currentFilter?.amountFrom?.toString() || undefined;
  const initAmountTo = currentFilter?.amountTo?.toString() || undefined;
  const initCoefficientFrom =
    currentFilter?.coefficientFrom?.toString() || undefined;
  const initCoefficientTo =
    currentFilter?.coefficientTo?.toString() || undefined;
  const initWorkModeI = SHIFT_TYPES.findIndex(
    (item) => item === currentFilter?.shiftType
  );
  const initPriceFrom = currentFilter?.priceFrom?.toString() || undefined;
  const initPriceTo = currentFilter?.priceTo?.toString() || undefined;
  const initPaymentTypeI = PAYMENT_TYPES.findIndex(
    (item) => item === currentFilter?.paymentType
  );

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
    required: false,
    initValue: initDangerClass ? [initDangerClass] : undefined,
  });
  // TODO - default transport value
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
    setTransportInitial,
    transportSearch,
    setTransportSearch,
  ] = useSelectionValidator<ITransportType>({ multySelection: false });
  const [measureI, setMeasureI] = useState(initMeasureI < 0 ? 0 : initMeasureI);
  const [amountFrom, onAmountFromChange, isAmountFromValid, amountFromError] =
    useInputValidator({ minValue: 1, initValue: initAmountFrom });
  const [amountTo, onAmountToChange, isAmountToValid, amountToError] =
    useInputValidator({ minValue: 1, initValue: initAmountTo });
  const [
    coefficientFrom,
    onCoefficientFromChange,
    isCoefficientFromValid,
    coefficientFromError,
  ] = useInputValidator({ minValue: 1, initValue: initCoefficientFrom });
  const [
    coefficientTo,
    onCoefficientToChange,
    isCoefficientToValid,
    coefficientToError,
  ] = useInputValidator({ minValue: 1, initValue: initCoefficientTo });

  const [workModeIndex, setWorkModeIndex] = useState(
    initWorkModeI < 0 ? 0 : initWorkModeI
  );
  const [priceFrom, onPriceFromChange, isPriceFromValid, priceFromError] =
    useInputValidator({ minValue: 1, initValue: initPriceFrom });
  const [priceTo, onPriceToChange, isPriceToValid, priceToError] =
    useInputValidator({ minValue: 1, initValue: initPriceTo });
  const [paymentTypeI, setPaymentTypeI] = useState(
    initPaymentTypeI < 0 ? 0 : initPaymentTypeI
  );

  const { data: transports, isFetching: isTransportLoading } =
    useGetTransportByLetterQuery(transportSearch);

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
          usesDataFromApi: false,
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
          usesDataFromApi: false,
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
          usesDataFromApi: false,
        },
        {
          id: "transport",
          type: "selection",
          value: transport,
          selectItem: selectTransport,
          unselectItem: unselectTransport,
          itemsList: !!transportSearch && !isTransportLoading ? transports : [],
          error: transportError,
          label: "Вид транспорта",
          usesDataFromApi: true,
          search: transportSearch,
          setSearch: setTransportSearch,
          isLoading: isTransportLoading,
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
        },
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "workMode",
          type: "segment",
          values: ENUMS.shiftTypes,
          selectedIndex: workModeIndex,
          onChange: (evt) =>
            setWorkModeIndex(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
        {
          id: "price",
          type: "interval",
          firstValue: priceFrom,
          secondValue: priceTo,
          onFirstValueChange: onPriceFromChange,
          onSecondValueChange: onPriceToChange,
          error: priceFromError || priceToError,
          label:
            INPUT_VALUES.measure[measureI] === "Вес"
              ? "Цена (руб/тонн)"
              : "Цена (руб/м3)",
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
    isTransportValid &&
    ((isAmountFromValid && isAmountToValid) ||
      (isPriceFromValid && isPriceToValid) ||
      (isCoefficientFromValid && isCoefficientToValid) ||
      isTypeValid ||
      isWasteTypeValid ||
      isDangerClassValid);

  const onSubmit = () => {
    const result: TDumpFilter = {
      transactionType: type[0].value,
      measureIn: MEASURE_IN[measureI],
      paymentType: PAYMENT_TYPES[paymentTypeI],
      shiftType: SHIFT_TYPES[workModeIndex],
    };
    if (transport) result.dumpTransport = transport;
    if (wasteType[0]) result.wasteType = wasteType[0].name;
    if (dangerClass[0]) result.dangerClass = dangerClass[0].value;
    if (amountFrom && amountTo) {
      result.amountFrom = Number(amountFrom);
      result.amountTo = Number(amountTo);
    }
    if (priceFrom && priceTo) {
      result.priceFrom = Number(priceFrom);
      result.priceTo = Number(priceTo);
    }
    if (coefficientFrom && coefficientTo) {
      result.coefficientFrom = Number(coefficientFrom);
      result.coefficientTo = Number(coefficientTo);
    }
    setDumpFilter(result);
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
      <ResetFilterButton advertType="DUMP" />
    </View>
  );
};

export default DumpForm;
