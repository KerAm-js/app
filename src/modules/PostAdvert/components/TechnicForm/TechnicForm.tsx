import { useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { DATE_REGEX } from "../../../../consts/regex";
import { getLabelForTechnicParam } from "../../../../helpers/advertParams";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useAddTechnicAdvertMutation } from "../../api/postAdvert.api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import {
  AXES_COUNTS,
  ENUM_TITLES,
  ENUMS,
  LOADING_TYPES,
  PAYMENT_TYPES,
  PAYMENT_UNITS,
  ROLLER_TYPES,
  SHIFT_TYPES,
  SIZE_TYPES,
  TECHNIC_TRANSACTION_TYPES,
  TRAILER_TYPES,
} from "../../../../consts/enums";
import { TechnicAdvertDto } from "../../../../types/Advert";
import { Alert } from "react-native";
import { useAddressByMap } from "../../../ChooseAddressMap";
import { useActions } from "../../../../hooks/store/useActions";
import { useMaterialTypes, useTechnicTypes } from "../../../MiniEntities";
import {
  IMaterialType,
  ITechnicType,
  TEquipment,
} from "../../../../types/MiniEntities";

const trailerTypes = TRAILER_TYPES.map((item, index) => ({
  id: index,
  name: ENUM_TITLES[item],
  value: item,
}));

const axesCounts = AXES_COUNTS.map((item, index) => ({
  id: index,
  name: item.toString(),
  value: item,
}));

const TechnicForm = () => {
  const { user, token } = useAuth();
  const { setAddressByMapDefaults } = useActions();
  const [addAdvert, addAdvertResult] = useAddTechnicAdvertMutation();
  const materialTypes = useMaterialTypes();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [transactionTypeI, setTransactionTypeI] = useState(0);
  const transactionType = TECHNIC_TRANSACTION_TYPES[transactionTypeI];
  const [title, onTitleChange, isTitleValid, titleError] = useInputValidator({
    required: true,
    minLength: 10,
  });
  const [
    technicType,
    selectTechnicType,
    unselectTechnicType,
    clearTechnicType,
    isTechnicTypeValid,
    technicTypeError,
    setTechnicTypeInitial,
  ] = useSelectionValidator<ITechnicType>({ required: true });
  const isTransport = !!technicType[0]?.parameters.find(
    (p) => p.name === "transport"
  );
  const isSecondAddressRequired =
    isTransport && transactionType === "TAKE_A_RENT";
  const [mark, onChangeMark] = useInputValidator();
  const [model, onModelChange] = useInputValidator();
  const [prodYear, onProdYearChange, isProdYearValid, prodYearError] =
    useInputValidator({
      minLength: 4,
      minValue: 1800,
      maxValue: new Date().getFullYear(),
    });
  const [weight, onWeightChange, isWeightValid, weightError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [height, onHeightChange, isHeightValid, heightError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [volume, onVolumeChange, isVolumeValid, volumeError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [
    passengersCount,
    onPassengersCountChange,
    isPassengersCountValid,
    passengersCountError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [pipeLength, onPipeLengthChange, isPipeLengthValid, pipeLengthError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [boomLength, onBoomLengthChange, isBoomLengthValid, boomLengthError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [
    liftingCapacity,
    onLiftingCapacityChange,
    isLiftingCapacityValid,
    liftingCapacityError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [
    performance,
    onPerformanceChange,
    isPerformanceValid,
    performanceError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [rollersTypeI, setRollersTypeI] = useState(0);
  const [
    rollersCount,
    onRollersCountChange,
    isRollersCountValid,
    rollersCountError,
  ] = useInputValidator({
    required: true,
    minValue: 1,
  });
  const [sizeTypeI, setSizeTypeI] = useState(0);
  const [ossigI, setOssigI] = useState(0);
  const [
    axesCount,
    selectAxesCount,
    unselectAxesCount,
    unselectAllAxesCounts,
    isAxesCountValid,
    axesCountError,
  ] = useSelectionValidator<(typeof axesCounts)[0]>({
    required: true,
    multySelection: true,
  });
  const [bodyLength, onBodyLengthChange, isBodyLengthValid, bodyLengthError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [
    trailerType,
    selectTrailerType,
    unselectTrailerType,
    unselectAllTrailerTypes,
    isTrailerTypeValid,
    trailerTypeError,
  ] = useSelectionValidator<(typeof trailerTypes)[0]>({
    required: true,
  });
  const [loadingTypeI, setLoadingTypeI] = useState(0);
  const [
    equipment,
    selectEquipment,
    unselectEquipment,
    unselectAllEquipments,
    isEquipmentsValid,
    equipmentError,
  ] = useSelectionValidator<TEquipment>({
    multySelection: true,
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
    cargoVolume,
    onCargoVolumeChange,
    isCargoVolumeValid,
    cargoVolumeError,
  ] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [count, onCountChange, isCountValid, countError] = useInputValidator({
    required: true,
    minValue: 1,
  });
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [firstDate, onFirstDateChange, isFirstDateValid, firstDateError] =
    useInputValidator({
      pattern: DATE_REGEX,
      patternErrorMessage: "Введите дату по шаблону ДД.ММ.ГГГГ",
    });
  const [secondDate, onSecondDateChange, isSecondDateValid, secondDateError] =
    useInputValidator({
      pattern: DATE_REGEX,
      patternErrorMessage: "Введите дату по шаблону ДД.ММ.ГГГГ",
    });
  const [
    rentalDaysCount,
    onRentalDaysCountChange,
    isRentalDaysCountValid,
    rentalDaysCountError,
  ] = useInputValidator({ required: true, minValue: 1 });
  const [comment, setComment] = useState("");
  const [price, onPriceChange, isPriceValid, priceError] = useInputValidator({
    required: true,
    minValue: 0,
  });
  const [paymentForI, setPaymentForI] = useState(0);
  const [paymentTypeI, setPaymentTypeI] = useState(0);

  const techTypes = useTechnicTypes();

  const { point, secondPoint, distance, pointAddress, secondPointAddress } =
    useAddressByMap();

  const isTakeARent = transactionType === "TAKE_A_RENT";
  const isGiveARent = transactionType === "GIVE_A_RENT";
  const isDumpTrack = technicType[0]?.technicClass === "DUMP_TRUCK";

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
  const hasCargoType = !!technicType[0]?.parameters.find(
    (param) => param.name === "cargo_type"
  );
  const hasRollerType = !!technicType[0]?.parameters.find(
    (param) => param.name === "roller_type"
  );
  const hasRollersCount = !!technicType[0]?.parameters.find(
    (param) => param.name === "rollers_count"
  );
  const hasSizeType = !!technicType[0]?.parameters.find(
    (param) => param.name === "size_type"
  );
  const hasOssig = !!technicType[0]?.parameters.find(
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
          selectedIndex: transactionTypeI,
          onChange: (evt) =>
            setTransactionTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: "Тип объявления",
        },
        {
          id: "title",
          type: "input",
          onChangeText: onTitleChange,
          value: title,
          error: titleError,
          label: "Заголовок",
          placeholder: "Например, сдаётся в аренду самосвал",
          maxLength: 100,
        },
      ],
    },
    {
      title: "Характеристики",
      inputs: [
        {
          id: "technicType",
          type: "selection",
          itemsList: techTypes,
          value: technicType,
          selectItem: selectTechnicType,
          unselectItem: unselectTechnicType,
          label: "Вид техники",
          error: technicTypeError,
        },
        {
          id: "mark",
          type: "input",
          onChangeText: onChangeMark,
          value: mark,
          label: "Марка",
          hidden: isTakeARent,
        },
        {
          id: "model",
          type: "input",
          onChangeText: onModelChange,
          value: model,
          label: "Модель",
          hidden: isTakeARent,
        },
        {
          id: "prodYear",
          type: "input",
          onChangeText: onProdYearChange,
          error: prodYearError,
          value: prodYear,
          label: "Год выпуска",
          keyboardType: "decimal-pad",
          hidden: isTakeARent,
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
        },
        {
          id: "weight",
          type: "input",
          value: weight,
          hidden: !technicType[0] || !hasWeight,
          onChangeText: onWeightChange,
          error: weightError,
          label: getLabelForTechnicParam("weight"),
          keyboardType: "decimal-pad",
        },
        {
          id: "height",
          type: "input",
          value: height,
          onChangeText: onHeightChange,
          error: heightError,
          hidden: !technicType[0] || !hasHeight,
          label: getLabelForTechnicParam("height"),
          keyboardType: "decimal-pad",
        },
        {
          id: "volume",
          type: "input",
          value: volume,
          onChangeText: onVolumeChange,
          error: volumeError,
          hidden: !technicType[0] || !hasVolume,
          label: getLabelForTechnicParam("volume"),
          keyboardType: "decimal-pad",
        },
        {
          id: "passengersCount",
          type: "input",
          value: passengersCount,
          onChangeText: onPassengersCountChange,
          error: passengersCountError,
          hidden: !technicType[0] || !hasPassengersCount,
          label: getLabelForTechnicParam("passengersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "pipeLength",
          type: "input",
          value: pipeLength,
          onChangeText: onPipeLengthChange,
          error: pipeLengthError,
          hidden: !technicType[0] || !hasPipeLength,
          label: getLabelForTechnicParam("pipeLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "boomLength",
          type: "input",
          value: boomLength,
          onChangeText: onBoomLengthChange,
          error: boomLengthError,
          hidden: !technicType[0] || !hasBoomLength,
          label: getLabelForTechnicParam("boomLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "liftingCapacity",
          type: "input",
          value: liftingCapacity,
          onChangeText: onLiftingCapacityChange,
          error: liftingCapacityError,
          hidden: !technicType[0] || !hasLiftingCapacity,
          label: getLabelForTechnicParam("liftingCapacity"),
          keyboardType: "decimal-pad",
        },
        {
          id: "performance",
          type: "input",
          value: performance,
          onChangeText: onPerformanceChange,
          error: performanceError,
          hidden: !technicType[0] || !hasPerformance,
          label: getLabelForTechnicParam("performance"),
          keyboardType: "decimal-pad",
        },
        {
          id: "rollersType",
          type: "segment",
          values: ENUMS.rollerTypes,
          selectedIndex: rollersTypeI,
          onChange: (evt) =>
            setRollersTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("rollerType"),
          hidden: !technicType[0] || !hasRollerType,
        },
        {
          id: "rollersCount",
          type: "input",
          value: rollersCount,
          onChangeText: onRollersCountChange,
          error: rollersCountError,
          hidden: !technicType[0] || !hasRollersCount,
          label: getLabelForTechnicParam("rollersCount"),
          keyboardType: "decimal-pad",
        },
        {
          id: "sizeType",
          type: "segment",
          values: ENUMS.sizeTypes,
          selectedIndex: sizeTypeI,
          onChange: (evt) => setSizeTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("sizeType"),
          hidden: !technicType[0] || !hasSizeType,
        },
        {
          id: "ossig",
          type: "segment",
          values: ["Не подключён", "Подключён"],
          selectedIndex: ossigI,
          onChange: (evt) => setOssigI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("ossig"),
          hidden: !technicType[0] || !hasOssig,
        },
        {
          id: "axesCount",
          type: "selection",
          itemsList: axesCounts,
          value: axesCount,
          selectItem: selectAxesCount,
          unselectItem: unselectAxesCount,
          label: getLabelForTechnicParam("axesCount"),
          error: axesCountError,
          hidden: !technicType[0] || !hasAxesCount,
        },
        {
          id: "bodyLength",
          type: "input",
          value: bodyLength,
          onChangeText: onBodyLengthChange,
          error: bodyLengthError,
          hidden: !technicType[0] || !hasBodyLength,
          label: getLabelForTechnicParam("bodyLength"),
          keyboardType: "decimal-pad",
        },
        {
          id: "trailerType",
          type: "selection",
          itemsList: trailerTypes,
          value: trailerType,
          selectItem: selectTrailerType,
          unselectItem: unselectTrailerType,
          label: getLabelForTechnicParam("trailerType"),
          error: trailerTypeError,
          hidden: !technicType[0] || !hasTrailerType,
        },
        {
          id: "loadingType",
          type: "segment",
          values: ENUMS.loadingTypes,
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
          id: "materialType",
          type: "selection",
          value: materialType,
          selectItem: selectMaterialType,
          unselectItem: unselectMaterialType,
          itemsList: materialTypes,
          error: materialTypeError,
          label: "Вид перевозимого груза",
          hidden: !technicType[0] || !isDumpTrack || isGiveARent,
        },
        {
          id: "cargoVolume",
          type: "input",
          value: cargoVolume,
          onChangeText: onCargoVolumeChange,
          error: cargoVolumeError,
          hidden: !technicType[0] || !isDumpTrack || isGiveARent,
          label: "Объём перевозимого груза (м3)",
          keyboardType: "decimal-pad",
        },
        {
          id: "count",
          type: "input",
          onChangeText: onCountChange,
          error: countError,
          value: count,
          label: "Количество единиц техники",
          keyboardType: "decimal-pad",
        },
        {
          id: "shiftType",
          type: "segment",
          values: ENUMS.shiftTypes,
          selectedIndex: workModeIndex,
          onChange: (evt) =>
            setWorkModeIndex(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
          hidden: isGiveARent,
        },
        {
          id: "address",
          type: "address",
          label: isSecondAddressRequired ? "Плечо (точка А)" : "Адрес",
          address: pointAddress,
          isSecondPointRequired: isSecondAddressRequired,
          error: point ? undefined : "Заполните данное поле",
        },
        {
          id: "secondAddress",
          type: "address",
          label: "Плечо (точка Б)",
          address: secondPointAddress,
          isSecondPointRequired: true,
          error: secondPoint ? undefined : "Заполните данное поле",
          hidden: !isSecondAddressRequired,
        },
        {
          id: "distance",
          type: "input",
          error: countError,
          onChangeText: () => {},
          value: distance ? distance + " км" : "",
          label: "Плечо (км)",
          editable: false,
          hidden: !isSecondAddressRequired,
        },
        {
          id: "rentalPeriod",
          type: "interval",
          firstPlaceholder: "ДД.ММ.ГГГГ",
          secondPlaceholder: "ДД.ММ.ГГГГ",
          firstValue: firstDate,
          secondValue: secondDate,
          onFirstValueChange: onFirstDateChange,
          onSecondValueChange: onSecondDateChange,
          isFirstFieldInvalid: !isFirstDateValid,
          isSecondFieldInvalid: !isSecondDateValid,
          error: firstDateError || secondDateError,
          label: "Период аренды",
          hidden: isGiveARent,
        },
        {
          id: "rentalDaysCount",
          type: "input",
          keyboardType: "decimal-pad",
          value: rentalDaysCount,
          onChangeText: onRentalDaysCountChange,
          error: rentalDaysCountError,
          label: "Срок аренды (в днях)",
          editable: !(
            firstDate &&
            isFirstDateValid &&
            secondDate &&
            isSecondDateValid
          ),
          hidden: isGiveARent,
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
          id: "price",
          type: "input",
          value: price,
          onChangeText: onPriceChange,
          error: priceError,
          label: "Цена (руб)",
          keyboardType: "decimal-pad",
        },
        {
          id: "paymentFor",
          type: "segment",
          values: ENUMS.paymentUnits,
          selectedIndex: paymentForI,
          onChange: (evt) =>
            setPaymentForI(evt.nativeEvent.selectedSegmentIndex),
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
    isTitleValid &&
    isTechnicTypeValid &&
    isProdYearValid &&
    isCountValid &&
    (isFirstDateValid || isGiveARent) &&
    (isSecondDateValid || isGiveARent) &&
    (isRentalDaysCountValid || isGiveARent) &&
    isPriceValid &&
    !!point &&
    (secondPoint || !isSecondAddressRequired) &&
    (isWeightValid || !hasWeight) &&
    (isHeightValid || !hasHeight) &&
    (isVolumeValid || !hasVolume) &&
    (isPassengersCountValid || !hasPassengersCount) &&
    (isPipeLengthValid || !hasPipeLength) &&
    (isBoomLengthValid || !hasBodyLength) &&
    (isLiftingCapacityValid || !hasLiftingCapacity) &&
    (isPerformanceValid || !hasPerformance) &&
    (isRollersCountValid || !hasRollersCount) &&
    (isBodyLengthValid || !hasBodyLength) &&
    (isTrailerTypeValid || !hasTrailerType);

  const onSubmit = () => {
    if (user && point) {
      const advert: TechnicAdvertDto = {
        advertType: "TECHNIC",
        transactionType,
        title,
        equipment: equipment || [],
        unitAmount: Number(count),
        materialType:
          isDumpTrack && isTakeARent && materialType[0]
            ? materialType[0].name
            : "NOT_SPECIFIED",
        cargoVolume: isDumpTrack && isTakeARent ? Number(cargoVolume) : 0.0,
        shiftType: isGiveARent ? "NOT_SPECIFIED" : SHIFT_TYPES[workModeIndex],
        rentalFrom: isGiveARent
          ? "1960-01-01T00:01:00.000Z"
          : firstDate
          ? new Date(firstDate.split(".").reverse().join("-")).toISOString()
          : undefined,
        rentalTo: isGiveARent
          ? "1960-01-01T00:01:00.000Z"
          : secondDate
          ? new Date(secondDate.split(".").reverse().join("-")).toISOString()
          : undefined,
        rentalDaysCount: isGiveARent ? 0 : Number(rentalDaysCount),
        isTransport,
        addressLat: point?.lat,
        addressLon: point?.lon,
        secondAddressLat: secondPoint?.lat,
        secondAddressLon: secondPoint?.lon,
        distance: secondPoint ? distance : undefined,
        description: comment,
        technicType: technicType[0].name,
        technicMark: isTakeARent ? "NOT_SPECIFIED" : mark,
        technicModel: isTakeARent ? "NOT_SPECIFIED" : model,
        productionYear: isTakeARent ? 1960 : Number(prodYear),
        weight: hasWeight ? Number(weight) : 0,
        height: hasHeight ? Number(height) : 0,
        volume: hasVolume ? Number(volume) : 0,
        passengersCount: hasPassengersCount ? Number(passengersCount) : 0,
        pipeLength: hasPipeLength ? Number(pipeLength) : 0,
        boomLength: hasBoomLength ? Number(boomLength) : 0,
        liftingCapacity: hasLiftingCapacity ? Number(liftingCapacity) : 0,
        performance: hasPerformance ? Number(performance) : 0,
        cargoType: "",
        rollerType: hasRollerType
          ? ROLLER_TYPES[rollersTypeI]
          : "NOT_SPECIFIED",
        rollersCount: hasRollersCount ? Number(rollersCount) : 0,
        sizeType: hasSizeType ? SIZE_TYPES[sizeTypeI] : "NOT_SPECIFIED",
        ossig: hasOssig ? !!ossigI : false,
        axesCount: hasAxesCount ? axesCount.map((item) => item.value) : [],
        bodyLength: hasBodyLength ? Number(bodyLength) : 0,
        trailerType: hasTrailerType ? trailerType[0].value : "NOT_SPECIFIED",
        loadingType: hasLoadingType
          ? LOADING_TYPES[loadingTypeI]
          : "NOT_SPECIFIED",
        price: Number(price),
        paymentUnit: PAYMENT_UNITS[paymentForI],
        paymentType: PAYMENT_TYPES[paymentTypeI],
      };
      addAdvert({
        advert,
        token: token || "",
      });
    }
  };

  const clearParams = () => {
    onWeightChange("");
    onHeightChange("");
    onVolumeChange("");
    onPassengersCountChange("");
    onPipeLengthChange("");
    onBodyLengthChange("");
    onBoomLengthChange("");
    onLiftingCapacityChange("");
    onPerformanceChange("");
    onRollersCountChange("");
    onCargoVolumeChange("");
    unselectAllAxesCounts();
    unselectAllEquipments();
    unselectAllTrailerTypes();
    setLoadingTypeI(0);
    setOssigI(0);
    setSizeTypeI(0);
    setRollersTypeI(0);
    clearMaterialType();
  };

  useEffect(() => {
    if (addAdvertResult.isSuccess) {
      navigation.navigate("AdvertImages", {
        id: addAdvertResult.data.id,
        isPhotosRequired:
          addAdvertResult.data.transactionType === "GIVE_A_RENT",
        advertType: "TECHNIC",
      });
    } else if (addAdvertResult.error) {
      console.log(addAdvertResult.data);
      console.log(addAdvertResult.error);
      Alert.alert("Ошибка", "Что-то пошло не так");
    }
  }, [addAdvertResult]);

  useEffect(() => {
    clearParams();
  }, [technicType]);

  useEffect(() => {
    if (firstDate && isFirstDateValid && secondDate && isSecondDateValid) {
      const first = new Date(firstDate.split(".").reverse().join("-"));
      const second = new Date(secondDate.split(".").reverse().join("-"));
      const daysCount =
        Math.round(
          (second.valueOf() - first.valueOf()) / (1000 * 60 * 60 * 24)
        ) + 1;
      onRentalDaysCountChange(daysCount.toString());
    }
  }, [firstDate, secondDate]);

  useEffect(() => {
    setAddressByMapDefaults();
    return () => {
      setAddressByMapDefaults();
    };
  }, []);

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle={"Далее"}
      isLoading={addAdvertResult.isLoading}
    />
  );
};

export default TechnicForm;
