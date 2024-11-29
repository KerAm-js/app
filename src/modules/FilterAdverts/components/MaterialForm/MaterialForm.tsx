import { FC, useMemo, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { TMaterialFilter } from "../../store/types";
import { useActions } from "../../../../hooks/store/useActions";
import { useNavigation } from "@react-navigation/native";
import {
  ALL,
  DELIVERY,
  ENUM_TITLES,
  ENUMS,
  FILTER_ENUMS_WITH_ALL,
  MATERIAL_TRANSACTION_TYPES,
  MEASURE_IN,
  PAYMENT_TYPES,
  SHIFT_TYPES,
} from "../../../../consts/enums";
import {
  IDumpTransportType,
  IMaterialType,
  TFraction,
  useDumpTransports,
  useMaterialTypes,
} from "../../../MiniEntities";
import { View } from "react-native";
import { ResetFilterButton } from "../ResetFilterButton/ResetFilterButton";

const MaterialForm: FC<TMaterialFilter> = (currentFilter) => {
  const { setMaterialFilter } = useActions();
  const materialTypes = useMaterialTypes();
  const dumpTransports = useDumpTransports();
  const navigation = useNavigation();

  const initMaterialType = useMemo(
    () =>
      materialTypes.find((item) => item.name === currentFilter.materialType),
    []
  );

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
  const initDeliveryI = useMemo(() => {
    const i = DELIVERY.findIndex((item) => item === currentFilter.deliveryType);
    return i < 0 ? FILTER_ENUMS_WITH_ALL.delivery.length - 1 : i;
  }, []);
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
  ] = useSelectionValidator<IMaterialType>({
    initValue: initMaterialType ? [initMaterialType] : undefined,
  });
  const [
    transport,
    selectTransport,
    unselectTransport,
    ____,
    isTransportValid,
    transportError,
    _______,
  ] = useSelectionValidator<IDumpTransportType>({
    multySelection: false,
    initValue: currentFilter.transports,
  });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    _____,
    ________,
    fractionsError,
  ] = useSelectionValidator<TFraction>({
    multySelection: true,
    initValue: currentFilter.fractions,
  });
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

  const [shiftTypeI, setShiftTypeI] = useState(initShiftTypeI);
  const [deliveryI, setDeliveryI] = useState(initDeliveryI);
  const [paymentTypeI, setPaymentTypeI] = useState(initPaymentTypeI);

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "type",
          type: "segment",
          values: ENUMS.materialTransactionTypes,
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
          itemsList: materialTypes,
          error: materialTypeError,
          label: "Вид материала",
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
          id: "fractions",
          type: "selection",
          value: fractions,
          selectItem: selectFractions,
          unselectItem: unselectFractions,
          itemsList: materialType[0]?.fractions || [],
          error: fractionsError,
          hidden: !materialType[0] || materialType[0]?.fractions.length === 0,
          label: "Фракции",
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
          values: FILTER_ENUMS_WITH_ALL.shiftTypes,
          selectedIndex: shiftTypeI,
          onChange: (evt) =>
            setShiftTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
        {
          id: "delivery",
          type: "segment",
          values: FILTER_ENUMS_WITH_ALL.delivery,
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
    };
    if (materialTypes.length > 0) {
      result.materialType = materialType[0]?.name;
    }
    if (fractions.length > 0) {
      result.fractions = fractions;
    }
    if (transport.length > 0) {
      result.transports = transport;
    }
    if (FILTER_ENUMS_WITH_ALL.delivery[deliveryI] !== ALL) {
      result.deliveryType = DELIVERY[deliveryI];
    }
    if (FILTER_ENUMS_WITH_ALL.shiftTypes[shiftTypeI] !== ALL) {
      result.shiftType = SHIFT_TYPES[shiftTypeI];
    }
    if (PAYMENT_TYPES[paymentTypeI] !== "ANY") {
      result.paymentType = PAYMENT_TYPES[paymentTypeI];
    }
    if (amountFrom && amountTo) {
      result.amountFrom = Number(amountFrom);
      result.amountTo = Number(amountTo);
    }
    if (coefficientFrom && coefficientTo) {
      result.coefficientFrom = Number(coefficientFrom);
      result.coefficientTo = Number(coefficientTo);
    }
    setMaterialFilter(result);
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
      <ResetFilterButton advertType="NON_MATERIAL" />
    </View>
  );
};

export default MaterialForm;
