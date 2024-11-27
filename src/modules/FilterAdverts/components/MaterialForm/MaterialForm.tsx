import { FC, useMemo, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import {
  INPUT_VALUES,
  INPUT_VALUES_WITH_ALL,
} from "../../../../consts/inputValues";
import {
  IMaterialType,
  useGetMaterialTypeByLetterQuery,
  useGetTransportByLetterQuery,
} from "../../../PostAdvert/api/postAdvert.api";
import { TMaterialFilter } from "../../store/types";
import { useActions } from "../../../../hooks/store/useActions";
import { useNavigation } from "@react-navigation/native";
import {
  DELIVERY,
  ENUM_TITLES,
  ENUMS,
  MATERIAL_TRANSACTION_TYPES,
  MEASURE_IN,
  PAYMENT_TYPES,
  SHIFT_TYPES,
} from "../../../../consts/enums";
import { ITransportType } from "../../api/filterAdverts.api";

const MaterialForm: FC<TMaterialFilter> = (currentFilter) => {
  const { setMaterialFilter } = useActions();
  const navigation = useNavigation();

  const initTransactionTypeI = useMemo(
    () =>
      MATERIAL_TRANSACTION_TYPES.findIndex(
        (item) => item === currentFilter?.transactionType
      ),
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
  const initWorkModeI = useMemo(
    () => SHIFT_TYPES.findIndex((item) => item === currentFilter?.shiftType),
    []
  );
  const initDeliveryI = useMemo(
    () => DELIVERY.findIndex((item) => item === currentFilter.deliveryType),
    []
  );
  const initPaymentTypeI = useMemo(
    () =>
      PAYMENT_TYPES.findIndex((item) => item === currentFilter?.paymentType),
    []
  );
  // TODO - add init values for fractions, materialType, transports
  const [typeI, setTypeI] = useState(
    initTransactionTypeI < 0 ? 0 : initTransactionTypeI
  );
  const [
    materialType,
    selectMaterialType,
    unselectMaterialType,
    __,
    ___,
    materialTypeError,
    ______,
    materialTypeSearch,
    setMaterialTypeSearch,
  ] = useSelectionValidator<IMaterialType>({});
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
    _______,
    transportSearch,
    setTransportSearch,
  ] = useSelectionValidator<ITransportType>({ multySelection: false });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    _____,
    ________,
    fractionsError,
  ] = useSelectionValidator({ multySelection: true });
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
  const [deliveryI, setDeliveryI] = useState(
    initDeliveryI < 0 ? 0 : initDeliveryI
  );
  const [paymentTypeI, setPaymentTypeI] = useState(
    initPaymentTypeI < 0 ? 0 : initPaymentTypeI
  );

  const { data: materialTypes, isFetching: isMaterialTypesLoading } =
    useGetMaterialTypeByLetterQuery(materialTypeSearch, {
      skip: !materialTypeSearch,
    });

  const { data: transports, isFetching: isTransportsFetching } =
    useGetTransportByLetterQuery(transportSearch, {
      skip: !transportSearch,
    });

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "type",
          type: "segment",
          values: INPUT_VALUES.materialAdvertType,
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
          id: "materialType",
          type: "selection",
          value: materialType,
          selectItem: selectMaterialType,
          unselectItem: unselectMaterialType,
          itemsList:
            !!materialTypeSearch && !isMaterialTypesLoading
              ? materialTypes
              : [],
          error: materialTypeError,
          label: "Вид материала",
          usesDataFromApi: true,
          search: materialTypeSearch,
          setSearch: setMaterialTypeSearch,
          isLoading: isMaterialTypesLoading,
        },
        {
          id: "transport",
          type: "selection",
          value: transport,
          selectItem: selectTransport,
          unselectItem: unselectTransport,
          itemsList:
            !!transportSearch && !isTransportsFetching ? transports : [],
          error: transportError,
          label: "Вид транспорта",
          usesDataFromApi: true,
          search: transportSearch,
          setSearch: setTransportSearch,
          isLoading: isTransportsFetching,
        },
        {
          id: "fractions",
          type: "selection",
          value: fractions,
          selectItem: selectFractions,
          unselectItem: unselectFractions,
          itemsList: materialType[0]?.fractions || [],
          error: fractionsError,
          hidden: !materialType[0] || materialType[0]?.fractions.length === 0,
          label: "Фракции",
          usesDataFromApi: false,
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
        {
          id: "delivery",
          type: "segment",
          values: INPUT_VALUES_WITH_ALL.delivery,
          selectedIndex: deliveryI,
          onChange: (evt) => setDeliveryI(evt.nativeEvent.selectedSegmentIndex),
          label: "Доставка",
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
    isTransportValid &&
    ((isAmountFromValid && isAmountToValid) ||
      (isCoefficientFromValid && isCoefficientToValid));

  const onSubmit = () => {
    const result: TMaterialFilter = {
      transactionType: MATERIAL_TRANSACTION_TYPES[typeI],
      measureIn: MEASURE_IN[measureI],
      paymentType: PAYMENT_TYPES[paymentTypeI],
      shiftType: SHIFT_TYPES[workModeIndex],
      deliveryType: DELIVERY[deliveryI],
    };
    if (transport) result.transports = transport;
    if (amountFrom && amountTo) {
      result.amountFrom = Number(amountFrom);
      result.amountTo = Number(amountTo);
    }
    if (coefficientFrom && coefficientTo) {
      result.coefficientFrom = Number(coefficientFrom);
      result.coefficientTo = Number(coefficientTo);
    }
    // TODO - add fractions, materialType, transports
    setMaterialFilter(result);
    navigation.goBack();
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

export default MaterialForm;
