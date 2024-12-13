import { useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useAddMaterialAdvertMutation } from "../../api/postAdvert.api";
import {
  DELIVERY,
  ENUM_TITLES,
  ENUMS,
  MATERIAL_TRANSACTION_TYPES,
  MEASURE_IN,
  PAYMENT_TYPES,
  SHIFT_TYPES,
} from "../../../../consts/enums";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { Alert } from "react-native";
import { useAddressByMap } from "../../../ChooseAddressMap";
import {
  IDumpTransportType,
  IMaterialType,
  TFraction,
  useDumpTransports,
  useMaterialTypes,
} from "../../../MiniEntities";

const MaterialForm = () => {
  const { token } = useAuth();
  const [addAdvert, addAdvertResult] = useAddMaterialAdvertMutation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [typeI, setTypeI] = useState(0);
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
  });
  const [
    materialType,
    selectMaterialType,
    unselectMaterialType,
    clearMaterialType,
    isMaterialTypeValid,
    materialTypeError,
    setMaterialTypeInitial,
  ] = useSelectionValidator<IMaterialType>({ required: true });
  const [
    transport,
    selectTransport,
    unselectTransport,
    clearTransport,
    isTransportValid,
    transportError,
    setTransportInitial,
  ] = useSelectionValidator<IDumpTransportType>({ required: true, multySelection: true });
  const [measureI, setMeasureI] = useState(0);
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1 }
  );
  const [
    coefficient,
    onCoefficientChange,
    isCoefficientValid,
    coefficientError,
  ] = useInputValidator({ required: true, minValue: 1, initValue: "1.5" });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    clearFractions,
    isFractionsValid,
    fractionsError,
  ] = useSelectionValidator<TFraction>({ required: true });
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [deliveryI, setDeliveryI] = useState(0);
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

  const materialTypes = useMaterialTypes();

  const dumpTransports = useDumpTransports();

  const { point, pointAddress } = useAddressByMap();

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
        {
          id: "title",
          type: "input",
          onChangeText: onTitleChange,
          value: title,
          error: titleError,
          label: "Заголовок",
          placeholder: "Продаю пескогрунт",
          maxLength: 100,
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
          itemsList: materialType[0] ? materialType[0].fractions : [],
          hidden: !materialType[0] || materialType[0].fractions.length === 0,
          error: fractionsError,
          label: "Фракция",
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
          id: "delivery",
          type: "segment",
          values: ENUMS.delivery,
          selectedIndex: deliveryI,
          onChange: (evt) => setDeliveryI(evt.nativeEvent.selectedSegmentIndex),
          label: "Доставка",
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
          id: "priceWeight",
          type: "input",
          value: priceForWeight,
          onChangeText: onPriceForWeightChange,
          error: priceForWeightError,
          label: "Цена (руб/т)",
          keyboardType: "decimal-pad",
          editable: ENUMS.measureIn[measureI] === ENUM_TITLES.WEIGHT,
        },
        {
          id: "priceVolume",
          type: "input",
          value: priceForVolume,
          onChangeText: onPriceForVolumeChange,
          error: priceForVolumeError,
          label: "Цена (руб/м3)",
          keyboardType: "decimal-pad",
          editable: ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME,
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
    isTitleValid &&
    isMaterialTypeValid &&
    !!point &&
    isTransportValid &&
    isAmountValid &&
    isCoefficientValid &&
    (isFractionsValid || materialType[0]?.fractions.length === 0) &&
    isPriceForWeightValid &&
    isPriceForVolumeValid;

  const transactionType = MATERIAL_TRANSACTION_TYPES[typeI];
  const isPhotosAllowed = transactionType === "SELL";

  const onSubmit = () => {
    addAdvert({
      advert: {
        transactionType,
        advertType: "NON_MATERIAL",
        addressLat: point?.lat || 57,
        addressLon: point?.lon || 36,
        fractions,
        title,
        deliveryType: DELIVERY[deliveryI],
        shiftType: SHIFT_TYPES[workModeIndex],
        materialType: materialType[0].name,
        dumpTransport: transport,
        measureIn: MEASURE_IN[measureI],
        amount: Number(amount),
        coefficient: Number(coefficient),
        price: Number(priceForWeight),
        paymentType: PAYMENT_TYPES[paymentTypeI],
        description: comment,
        advertStatus: "STOPPED",
      },
      token: token || "",
    });
  };

  useEffect(() => {
    if (
      priceForWeight &&
      coefficient &&
      ENUMS.measureIn[measureI] === ENUM_TITLES.WEIGHT
    ) {
      const priceVolume = Number(priceForWeight) * Number(coefficient);
      onPriceForVolumeChange(Math.floor(priceVolume).toString());
    }
  }, [coefficient, priceForWeight]);

  useEffect(() => {
    if (
      priceForVolume &&
      coefficient &&
      ENUMS.measureIn[measureI] === ENUM_TITLES.VOLUME
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
          advertType: "NON_MATERIAL",
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
      onSubmit={onSubmit}
      submitTitle={isPhotosAllowed ? "Далее" : "Опубликовать"}
      isLoading={addAdvertResult.isLoading}
    />
  );
};

export default MaterialForm;
