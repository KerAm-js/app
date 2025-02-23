import { useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useEditDumpAdvertMutation } from "../../api/editAdvert.api";
import {
  DANGER_CLASSES,
  DUMP_TRANSACTION_TYPES,
  ENUM_TITLES,
  ENUMS,
  MEASURE_IN,
  PAYMENT_TYPES,
  SHIFT_TYPES,
} from "../../../../consts/enums";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { Alert } from "react-native";
import { useDumpTransports } from "../../../MiniEntities";
import { useWasteTypes } from "../../../MiniEntities/store/hooks";
import { IDumpTransportType } from "../../../../types/MiniEntities";
import { IDumpAdvert } from "../../../../types/Advert";

const dumpTransactionTypes = DUMP_TRANSACTION_TYPES.map((type, index) => ({
  id: index,
  value: type,
  name: ENUM_TITLES[type],
}));

const dangerClasses = DANGER_CLASSES.map((item, index) => ({
  id: index,
  name: item,
}));

const DumpForm = ({ props }: { props: IDumpAdvert }) => {
  const { token } = useAuth();
  const dumpTransports = useDumpTransports();
  const wasteTypes = useWasteTypes();

  const [editAdvert, editAdvertResult] = useEditDumpAdvertMutation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [type, selectType, unselectType, clearType, isTypeValid, typeError] =
    useSelectionValidator({
      required: true,
      initValue: [
        dumpTransactionTypes[
          DUMP_TRANSACTION_TYPES.indexOf(props.transactionType)
        ],
      ],
    });
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
    initValue: String(props.title),
  });

  const [
    wasteType,
    selectWasteType,
    unselectWasteType,
    clearWasteType,
    isWasteTypeValid,
    wasteTypeError,
  ] = useSelectionValidator({
    required: true,
    initValue: props.wasteTypes,
    multySelection: true,
  });

  const [
    dangerClass,
    selectDangerClass,
    unselectDangerClass,
    clearDangerClass,
    isDangerClassValid,
    dangerClassError,
  ] = useSelectionValidator<(typeof dangerClasses)[0]>({
    required: true,
    initValue: dangerClasses.filter((item) => item.name === props.dangerClass),
  });
  const [
    transport,
    selectTransport,
    unselectTransport,
    clearTransport,
    isTransportValid,
    transportError,
    setTransportInitial,
  ] = useSelectionValidator<IDumpTransportType>({
    required: true,
    initValue: props.dumpTransport,
    multySelection: true,
  });

  const [measureI, setMeasureI] = useState(
    props.measureIn === "WEIGHT" ? 0 : 1
  );
  const [
    coefficient,
    onCoefficientChange,
    isCoefficientValid,
    coefficientError,
  ] = useInputValidator({
    required: true,
    minValue: 1,
    initValue: String(props.coefficient),
  });
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1, initValue: String(props.amount) }
  );
  const [workModeIndex, setWorkModeIndex] = useState(
    SHIFT_TYPES.indexOf(props.shiftType)
  );
  const [comment, setComment] = useState(props.description || "");
  const [
    priceForWeight,
    onPriceForWeightChange,
    isPriceForWeightValid,
    priceForWeightError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
    initValue: String(props.price),
  });
  const [
    priceForVolume,
    onPriceForVolumeChange,
    isPriceForVolumeValid,
    priceForVolumeError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
    initValue: String(props.price * Number(props.coefficient)),
  });
  const [paymentTypeI, setPaymentTypeI] = useState(
    PAYMENT_TYPES.indexOf(props.paymentType)
  );

  const inputs: TFormInputsArray = [
    {
      title: "Объявление",
      inputs: [
        {
          id: "title",
          type: "input",
          onChangeText: onTitleChange,
          value: title,
          error: titleError,
          label: "Заголовок",
          placeholder: "Нужен отвал",
          maxLength: 100,
        },
      ],
    },
    {
      title: "Характеристики",
      inputs: [
        {
          id: "wasteType",
          type: "selection",
          value: wasteTypes,
          selectItem: selectWasteType,
          unselectItem: unselectWasteType,
          itemsList: wasteTypes,
          error: wasteTypeError,
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
          label: "Способ измерения",
        },
        {
          id: "amount",
          type: "input",
          onChangeText: onAmountCange,
          error: amountError,
          value: amount,
          label:
            ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME
              ? "Количество (м3)"
              : "Количество (т)",

          keyboardType: "decimal-pad",
        },
        {
          id: "coefficient",
          type: "input",
          onChangeText: onCoefficientChange,
          error: coefficientError,
          value: coefficient,
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
          id: "comment",
          type: "textArea",
          onChangeText: (text: string) => setComment(text),
          value: comment,
          label: "Комментарий",
        },
      ],
    },
    {
      title: "Информация о цене",
      inputs: [
        {
          id: "priceForWeight",
          type: "input",
          value: priceForWeight,
          onChangeText: onPriceForWeightChange,
          error: priceForWeightError,
          label: "Цена (руб/т)",
          keyboardType: "decimal-pad",
          editable: MEASURE_IN[measureI] === "WEIGHT",
        },
        {
          id: "priceForVolume",
          type: "input",
          value: priceForVolume,
          onChangeText: onPriceForVolumeChange,
          error: priceForVolumeError,
          label: "Цена (руб/м3)",
          keyboardType: "decimal-pad",
          editable: MEASURE_IN[measureI] === "VOLUME",
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
    isTypeValid &&
    isTitleValid &&
    isWasteTypeValid &&
    isDangerClassValid &&
    isTransportValid &&
    isAmountValid &&
    isPriceForWeightValid &&
    isPriceForVolumeValid &&
    isCoefficientValid;

  const transactionType = type[0];

  const onSubmit = () => {
    editAdvert({
      token: token || "",
      advert: {
        ...props,
        advertStatus: props.advertStatus,
        transactionType: transactionType.value,
        advertType: "DUMP",
        title,
        shiftType: SHIFT_TYPES[workModeIndex],
        dumpTransport: transport,
        measureIn: MEASURE_IN[measureI],
        amount: Number(amount),
        coefficient: Number(coefficient),
        price: Number(
          ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME
            ? priceForVolume
            : priceForWeight
        ),
        paymentType: PAYMENT_TYPES[paymentTypeI],
        wasteTypes: wasteType,
        dangerClass: dangerClass[0].name,
        description: comment,
      },
    });
  };

  useEffect(() => {
    if (priceForWeight && coefficient && MEASURE_IN[measureI] === "WEIGHT") {
      const priceVolume = Number(priceForWeight) * Number(coefficient);
      onPriceForVolumeChange(Math.floor(priceVolume).toString());
    }
  }, [coefficient, priceForWeight]);

  useEffect(() => {
    if (priceForVolume && coefficient && MEASURE_IN[measureI] === "VOLUME") {
      const priceWeight = Number(priceForVolume) / Number(coefficient);
      onPriceForWeightChange(Math.floor(priceWeight).toString());
    }
  }, [coefficient, priceForVolume]);

  useEffect(() => {
    if (editAdvertResult.isSuccess) {
      navigation.navigate("EditImages", {
        id: editAdvertResult.originalArgs?.advert.id,
        isPhotosRequired: false,
        advertType: "DUMP",
      });
    } else if (editAdvertResult.error) {
      Alert.alert("Ошибка", "Что-то пошло не так");
    }
  }, [editAdvertResult]);

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      isLoading={editAdvertResult.isLoading}
      onSubmit={onSubmit}
      submitTitle={"Далее"}
    />
  );
};

export default DumpForm;
