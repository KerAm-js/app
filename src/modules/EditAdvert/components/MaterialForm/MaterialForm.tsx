import { useEffect, useRef, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { useAuth } from "../../../../hooks/store/useAuth";
import {
  IMaterialType,
  ITransportType,
  TFraction,
  useEditMaterialAdvertMutation
} from "../../api/editAdvert.api";
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
import { useGetMaterialTypeByLetterQuery, useGetTransportByLetterQuery } from "../../../PostAdvert/api/postAdvert.api";

const MaterialForm = ({props}) => {

  const { token } = useAuth();
  const [editAdvert, editAdvertResult] = useEditMaterialAdvertMutation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [typeI, setTypeI] = useState(props.transactionType === "SELL" ? 1 : 0);
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
    initValue: props.title
  });
  const [
    materialType,
    selectMaterialType,
    unselectMaterialType,
    clearMaterialType,
    isMaterialTypeValid,
    materialTypeError,
    setMaterialTypeInitial,
    materialTypeSearch,
    setMaterialTypeSearch,
  ] = useSelectionValidator<IMaterialType>({ required: true });

  const [
    transport,
    selectTransport,
    unselectTransport,
    clearTransport,
    isTransportValid,
    transportError,
    setTransportInitial,
    transportSearch,
    setTransportSearch,
  ] = useSelectionValidator<ITransportType>({ required: true, initValue: props.dumpTransport });
  const [measureI, setMeasureI] = useState(props.measureIn === 'WEIGHT' ? 0 : 1);
  const [amount, onAmountCange, isAmountValid, amountError] = useInputValidator(
    { required: true, minValue: 1, initValue: String(props.amount)}
  );
  const [
    coefficient,
    onCoefficientChange,
    isCoefficientValid,
    coefficientError,
  ] = useInputValidator({ required: true, minValue: 1, initValue: String(props.coefficient) });
  const [
    fractions,
    selectFractions,
    unselectFractions,
    clearFractions,
    isFractionsValid,
    fractionsError,
  ] = useSelectionValidator<TFraction>({ required: true, initValue: props.fractions });
  const [workModeIndex, setWorkModeIndex] = useState(SHIFT_TYPES.indexOf(props.shiftType));
  const [deliveryI, setDeliveryI] = useState(props.deliveryType === 'DELIVERY' ? 0 : 1);
  const [comment, setComment] = useState(props.description || '');

  const [
    priceForWeight,
    onPriceForWeightChange,
    isPriceForWeightValid,
    priceForWeightError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
    initValue: String(props.price)
  });
  const [
    priceForVolume,
    onPriceForVolumeChange,
    isPriceForVolumeValid,
    priceForVolumeError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
    initValue: String(props.price * Number(props.coefficient))

  });
  const [paymentTypeI, setPaymentTypeI] = useState(PAYMENT_TYPES.indexOf(props.paymentType));

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
          itemsList: materialType[0] ? materialType[0].fractions : [],
          hidden: !materialType[0] || materialType[0].fractions.length === 0,
          error: fractionsError,
          label: "Фракция",
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
    isTransportValid &&
    isAmountValid &&
    isCoefficientValid &&
    (isFractionsValid || materialType[0]?.fractions.length === 0) &&
    isPriceForWeightValid &&
    isPriceForVolumeValid;

  const transactionType = MATERIAL_TRANSACTION_TYPES[typeI];
  const isPhotosAllowed = transactionType === "SELL";

  useEffect(() => {
    setMaterialTypeSearch(props.materialType)
  }, [])
  let flag = useRef(false)
  useEffect(() => {

    if(!!materialTypes?.length && !flag.current){
      selectMaterialType(materialTypes[0])
      flag.current = true
    }
  
  }, [materialTypes])

  const onSubmit = () => {
    editAdvert({
      advert: {
        ...props,
        transactionType,
        advertType: "NON_MATERIAL",
        addressLat: 45,
        addressLon: 45,
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
        advertStatus: "STOPPER",
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
    if (editAdvertResult.isSuccess) {

      if (isPhotosAllowed) {
        navigation.navigate("EditImages", {
          id: editAdvertResult.originalArgs?.advert.id,
          isPhotosRequired: false,
          advertType: "NON_MATERIAL",
        });
      } else {
        Alert.alert("Успешно", "Публикаия обновлена");
        navigation.navigate("Profile");
      }
    } else if (editAdvertResult.error) {
      Alert.alert("Ошибка", "Что-то пошло не так");
    }
  }, [editAdvertResult]);

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle={isPhotosAllowed ? "Далее" : "Опубликовать"}
      isLoading={editAdvertResult.isLoading}
    />
  );
};

export default MaterialForm;
