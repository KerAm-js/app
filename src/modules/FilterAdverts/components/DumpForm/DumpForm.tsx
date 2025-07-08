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
  PAYMENT_TYPES,
} from "../../../../consts/enums";
import { useActions } from "../../../../hooks/store/useActions";
import { TDumpFilter } from "../../store/types";
import { View } from "react-native";
import { ResetFilterButton } from "../ResetFilterButton/ResetFilterButton";
import { useNavigation } from "@react-navigation/native";
import { useDumpTransports } from "../../../MiniEntities";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useWasteTypes } from "../../../MiniEntities/store/hooks";
import { IDumpTransportType } from "../../../../types/MiniEntities";

const dumpTransactionTypes = DUMP_TRANSACTION_TYPES.map((type, index) => ({
  id: index,
  value: type,
  name: ENUM_TITLES[type],
}));

const dangerClasses = DANGER_CLASSES.map((item, index) => ({
  id: index,
  value: item,
  name: ENUM_TITLES[item],
}));

const DumpForm: FC<TDumpFilter> = (currentFilter) => {
  const wasteTypes = useWasteTypes();
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
  const initDangerClass = useMemo(
    () =>
      dangerClasses.find((item) => item.value === currentFilter?.dangerClass) ||
      undefined,
    []
  );
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
    multySelection: true,
    initValue:
      wasteTypes.filter((item) =>
        currentFilter.wasteTypes?.find((currentItem) => currentItem === item.id)
      ) || undefined,
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
    multySelection: true,
    initValue:
      dumpTransports.filter((item) =>
        currentFilter.transports?.find((currentItem) => currentItem === item.id)
      ) || undefined,
  });
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
        // {
        //   id: "measure",
        //   type: "segment",
        //   values: ENUMS.measureIn,
        //   selectedIndex: measureI,
        //   onChange: (evt) => setMeasureI(evt.nativeEvent.selectedSegmentIndex),
        //   label: "Способ измерения",
        // },
        // {
        //   id: "amount",
        //   type: "interval",
        //   firstValue: amountFrom,
        //   secondValue: amountTo,
        //   onFirstValueChange: onAmountFromChange,
        //   onSecondValueChange: onAmountToChange,
        //   error: amountFromError || amountToError,
        //   isFirstFieldInvalid: !isAmountFromValid,
        //   isSecondFieldInvalid: !isAmountToValid,
        //   label:
        //     ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME
        //       ? "Количество (м3)"
        //       : "Количество (т)",
        //   keyboardType: "decimal-pad",
        // },
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

  const isFormValid = isTypeValid;

  const onSubmit = () => {
    const result: TDumpFilter = {
      title: null,
      description: null,
      priceFrom: null,
      priceTo: null,
      shiftType: null,
      coefficientFrom: null,
      coefficientTo: null,
      measureIn: null,
      amountFrom: null,
      amountTo: null,
      // the parameters above are not needed for filtering yet.
      transactionType: type[0].value,
      paymentType:
        PAYMENT_TYPES[paymentTypeI] !== "ANY"
          ? PAYMENT_TYPES[paymentTypeI]
          : null,
      transports:
        transport.length > 0 ? transport.map((item) => item.id) : null,
      wasteTypes:
        wasteType.length > 0 ? wasteType.map((item) => item.id) : null,
      dangerClass: dangerClass[0]?.value || null,
    };
    setDumpFilter(result);
    navigation.navigate("FilteredAdvertsMap", { advertType: "DUMP" });
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
