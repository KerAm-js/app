import { useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useAddDumpAdvertMutation } from "../../api/postAdvert.api";
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
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { Alert } from "react-native";
import { useAddressByMap } from "../../../ChooseAddressMap";
import { IDumpTransportType, useDumpTransports } from "../../../MiniEntities";

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

const DumpForm = () => {
  const { token } = useAuth();
  const [addAdvert, addAdvertResult] = useAddDumpAdvertMutation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [type, selectType, unselectType, clearType, isTypeValid, typeError] =
    useSelectionValidator({
      required: true,
      initValue: [dumpTransactionTypes[0]],
    });
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
  });
  const [
    wasteType,
    selectWasteType,
    unselectWasteType,
    clearWasteType,
    isWasteTypeValid,
    wasteTypeError,
  ] = useSelectionValidator<(typeof wasteTypes)[0]>({ required: true });
  const [
    dangerClass,
    selectDangerClass,
    unselectDangerClass,
    clearDangerClass,
    isDangerClassValid,
    dangerClassError,
  ] = useSelectionValidator<(typeof dangerClasses)[0]>({ required: true });
  const [
    transport,
    selectTransport,
    unselectTransport,
    clearTransport,
    isTransportValid,
    transportError,
    setTransportInitial,
  ] = useSelectionValidator<IDumpTransportType>({ required: true });
  const [measureI, setMeasureI] = useState(0);
  const [
    coefficient,
    onCoefficientChange,
    isCoefficientValid,
    coefficientError,
  ] = useInputValidator({ required: true, minValue: 1, initValue: "1.5" });
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1 }
  );
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [comment, setComment] = useState("");
  const [
    priceForWeight,
    onPriceForWeightChange,
    isPriceForWeightValid,
    priceForWeightError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [
    priceForVolume,
    onPriceForVolumeChange,
    isPriceForVolumeValid,
    priceForVolumeError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [paymentTypeI, setPaymentTypeI] = useState(0);

  const dumpTransports = useDumpTransports();

  const { point, pointAddress } = useAddressByMap();

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
          label: "Тип объявления",
        },
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
          value: wasteType,
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
          label: "Измерять",
        },
        {
          id: "amount",
          type: "input",
          onChangeText: onAmountCange,
          error: amountError,
          value: amount,
          label:
            ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME
              ? "Объём (м3)"
              : "Вес (т)",
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
          id: "address",
          type: "address",
          label: "Адрес",
          address: pointAddress,
          isSecondPointRequired: false,
          error: point ? undefined : "Заполните данное поле",
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
          editable: INPUT_VALUES.measure[measureI] === "Вес",
        },
        {
          id: "priceForVolume",
          type: "input",
          value: priceForVolume,
          onChangeText: onPriceForVolumeChange,
          error: priceForVolumeError,
          label: "Цена (руб/м3)",
          keyboardType: "decimal-pad",
          editable: INPUT_VALUES.measure[measureI] === "Объём",
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
    isTypeValid &&
    isTitleValid &&
    !!point &&
    isWasteTypeValid &&
    isDangerClassValid &&
    isTransportValid &&
    isAmountValid &&
    isPriceForWeightValid &&
    isPriceForVolumeValid &&
    isCoefficientValid;

  const transactionType = type[0];
  const isPhotosAllowed =
    transactionType.value === "SOIL_DUMP" ||
    transactionType.value === "SOIL_REMOVAL";

  const onSubmit = () => {
    addAdvert({
      token: token || "",
      advert: {
        advertStatus: "STOPPER",
        transactionType: transactionType.value,
        advertType: "DUMP",
        addressLat: point?.lat || 57,
        addressLon: point?.lon || 36,
        title,
        shiftType: SHIFT_TYPES[workModeIndex],
        dumpTransport: transport,
        measureIn: MEASURE_IN[measureI],
        amount: Number(amount),
        coefficient: Number(coefficient),
        price: Number(priceForWeight),
        paymentType: PAYMENT_TYPES[paymentTypeI],
        wasteType: wasteType[0].name,
        dangerClass: dangerClass[0].value,
        description: comment,
      },
    });
  };

  useEffect(() => {
    if (
      priceForWeight &&
      coefficient &&
      INPUT_VALUES.measure[measureI] === "Вес"
    ) {
      const priceVolume = Number(priceForWeight) * Number(coefficient);
      onPriceForVolumeChange(Math.floor(priceVolume).toString());
    }
  }, [coefficient, priceForWeight]);

  useEffect(() => {
    if (
      priceForVolume &&
      coefficient &&
      INPUT_VALUES.measure[measureI] === "Объём"
    ) {
      const priceWeight = Number(priceForVolume) / Number(coefficient);
      onPriceForWeightChange(Math.floor(priceWeight).toString());
    }
  }, [priceForVolume]);

  useEffect(() => {
    if (addAdvertResult.isSuccess) {
      if (isPhotosAllowed) {
        navigation.navigate("AdvertImages", {
          id: addAdvertResult.data.id,
          isPhotosRequired: false,
          advertType: "DUMP",
        });
      } else {
        navigation.navigate("Profile");
      }
    } else if (addAdvertResult.error) {
      Alert.alert("Ошибка", "Что-то пошло не так");
    }
  }, [addAdvertResult]);

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      isLoading={addAdvertResult.isLoading}
      onSubmit={onSubmit}
      submitTitle={isPhotosAllowed ? "Далее" : "Опубликовать"}
    />
  );
};

export default DumpForm;
