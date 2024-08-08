import { FC, useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { INPUT_VALUES } from "../../../../consts/inputValues";
import { DATE_REGEX } from "../../../../consts/regex";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { getLabelForTechnicParam } from "../../../../helpers/advertParams";
import { TTechnicForm } from "./types";
import { useAuth } from "../../../../hooks/store/useAuth";
import {
  ITechnicType,
  useGetTechnicTypesByLetterQuery,
} from "../../api/postAdvert.api";
import { handleError } from "../../../Auth/helpers/getErrorMessage";

const TechnicForm: FC<TTechnicForm> = ({ submit }) => {
  const { user } = useAuth();
  const [typeI, setTypeI] = useState(0);
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
    techTypeSearch,
    setTechTypeSearch,
  ] = useSelectionValidator<ITechnicType>({ required: true });
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
  const [cargoType, onCargoTypeChange, isCargoTypeValid, cargoTypeError] =
    useInputValidator({
      required: true,
      minLength: 2,
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
  const [axesCountI, setAxesCountI] = useState(0);
  const [bodyLength, onBodyLengthChange, isBodyLengthValid, bodyLengthError] =
    useInputValidator({
      required: true,
      minValue: 0,
    });
  const [
    trailerType,
    selectTrailerType,
    unselectTrailerType,
    ___,
    isTrailerTypeValid,
    trailerTypeError,
  ] = useSelectionValidator({
    required: true,
  });
  const [loadingTypeI, setLoadingTypeI] = useState(0);
  const [
    equipment,
    selectEquipment,
    unselectEquipment,
    unselectAllEquipments,
    __,
    equipmentError,
  ] = useSelectionValidator({ multySelection: true });
  const [count, onCountChange, isCountValid, countError] = useInputValidator({
    required: true,
    minValue: 1,
  });
  const [workModeIndex, setWorkModeIndex] = useState(0);
  const [firstDate, onFirstDateChange, isFirstDateValid, firstDateError] =
    useInputValidator({
      pattern: DATE_REGEX,
      patternErrorMessage: "Введите дату по шаблону ГГГГ.ММ.ДД",
    });
  const [secondDate, onSecondDateChange, isSecondDateValid, secondDateError] =
    useInputValidator({
      pattern: DATE_REGEX,
      patternErrorMessage: "Введите дату по шаблону ГГГГ.ММ.ДД",
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
  const [username, onUsernameChange, isUsernameValid, usernameError] =
    useInputValidator({ required: true, initValue: user?.username });
  const [phoneText, onPhoneChange, isPhoneValid, phoneError, _, phone] =
    usePhoneValidator({
      required: true,
      initValue: user?.phone,
    });

  const {
    data: techTypes,
    isFetching: isTechnicTypeLoading,
    error,
  } = useGetTechnicTypesByLetterQuery(techTypeSearch, {
    skip: !techTypeSearch,
  });

  const hasWeight = !!technicType[0]?.parameters.find(
    (param) => param.name === "weight"
  );
  const hasHeight = !!technicType[0]?.parameters.find(
    (param) => param.name === "height"
  );
  const hasVolume = !!technicType[0]?.parameters.find(
    (param) => param.name === "volume"
  );
  const hasPassengersCount = !!!technicType[0]?.parameters.find(
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
  const hasOSSIG = !!technicType[0]?.parameters.find(
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
          values: INPUT_VALUES.technicAdvertType,
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
          placeholder: "Сдаётся в аренду самосвал",
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
          itemsList: !!techTypeSearch && !isTechnicTypeLoading ? techTypes : [],
          isLoading: isTechnicTypeLoading,
          value: technicType,
          selectItem: selectTechnicType,
          unselectItem: unselectTechnicType,
          label: "Вид техники",
          error: technicTypeError || handleError(error),
          usesDataFromApi: true,
          search: techTypeSearch,
          setSearch: setTechTypeSearch,
        },
        {
          id: "mark",
          type: "input",
          onChangeText: onChangeMark,
          value: mark,
          label: "Марка",
        },
        {
          id: "model",
          type: "input",
          onChangeText: onModelChange,
          value: model,
          label: "Модель",
        },
        {
          id: "prodYear",
          type: "input",
          onChangeText: onProdYearChange,
          error: prodYearError,
          value: prodYear,
          label: "Год выпуска",
          keyboardType: "decimal-pad",
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
          usesDataFromApi: false,
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
          id: "cargoType",
          type: "input",
          value: cargoType,
          onChangeText: onCargoTypeChange,
          error: cargoTypeError,
          hidden: !technicType[0] || !hasCargoType,
          label: getLabelForTechnicParam("cargoType"),
          maxLength: 30,
        },
        {
          id: "rollersType",
          type: "segment",
          values: INPUT_VALUES.rollerType,
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
          values: INPUT_VALUES.sizeType,
          selectedIndex: sizeTypeI,
          onChange: (evt) => setSizeTypeI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("sizeType"),
          hidden: !technicType[0] || !hasSizeType,
        },
        {
          id: "ossig",
          type: "segment",
          values: INPUT_VALUES.OSSIG,
          selectedIndex: ossigI,
          onChange: (evt) => setOssigI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("OSSIG"),
          hidden: !technicType[0] || !hasOSSIG,
        },
        {
          id: "axesCount",
          type: "segment",
          values: INPUT_VALUES.axesCount,
          selectedIndex: axesCountI,
          onChange: (evt) =>
            setAxesCountI(evt.nativeEvent.selectedSegmentIndex),
          label: getLabelForTechnicParam("axesCount"),
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
          itemsList: INPUT_VALUES.trailerType,
          value: trailerType,
          selectItem: selectTrailerType,
          unselectItem: unselectTrailerType,
          label: getLabelForTechnicParam("trailerType"),
          error: trailerTypeError,
          usesDataFromApi: false,
          hidden: !technicType[0] || !hasTrailerType,
        },
        {
          id: "loadingType",
          type: "segment",
          values: INPUT_VALUES.loadingType,
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
          id: "count",
          type: "input",
          onChangeText: onCountChange,
          error: countError,
          value: count,
          label: "Количество единиц техники",

          keyboardType: "decimal-pad",
        },
        {
          id: "workMode",
          type: "segment",
          values: INPUT_VALUES.workMode,
          selectedIndex: workModeIndex,
          onChange: (evt) =>
            setWorkModeIndex(evt.nativeEvent.selectedSegmentIndex),
          label: "Режим работы",
        },
        {
          id: "rentalPeriod",
          type: "interval",
          firstPlaceholder: "ГГГГ.ММ.ДД",
          secondPlaceholder: "ГГГГ.ММ.ДД",
          firstValue: firstDate,
          secondValue: secondDate,
          onFirstValueChange: onFirstDateChange,
          onSecondValueChange: onSecondDateChange,
          error: firstDateError || secondDateError,
          label: "Период аренды",
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
          values: INPUT_VALUES.paymentForTechnic,
          selectedIndex: paymentForI,
          onChange: (evt) =>
            setPaymentForI(evt.nativeEvent.selectedSegmentIndex),
          label: "Оплата за",
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
    {
      title: "Данные пользователя",
      inputs: [
        {
          id: "username",
          type: "input",
          value: username,
          onChangeText: onUsernameChange,
          error: usernameError,
          label: "Имя пользователя",
        },
        {
          id: "phone",
          type: "input",
          value: phoneText,
          onChangeText: onPhoneChange,
          error: phoneError,
          label: "Имя пользователя",
          keyboardType: "phone-pad",
          textContentType: "telephoneNumber",
          maxLength: 16,
        },
      ],
    },
  ];

  const isFormValid =
    isTitleValid &&
    isTechnicTypeValid &&
    isProdYearValid &&
    isCountValid &&
    isFirstDateValid &&
    isSecondDateValid &&
    isRentalDaysCountValid &&
    isPriceValid &&
    isUsernameValid &&
    isPhoneValid &&
    (isWeightValid || !hasWeight) &&
    (isHeightValid || !hasHeight) &&
    (isVolumeValid || !hasVolume) &&
    (isPassengersCountValid || !hasPassengersCount) &&
    (isPipeLengthValid || !hasPipeLength) &&
    (isBoomLengthValid || !hasBodyLength) &&
    (isLiftingCapacityValid || !hasLiftingCapacity) &&
    (isPerformanceValid || !hasPerformance) &&
    (isCargoTypeValid || !hasCargoType) &&
    (isRollersCountValid || !hasRollersCount) &&
    (isBodyLengthValid || !hasBodyLength) &&
    (isTrailerTypeValid || !hasTrailerType);

  const transactionType = INPUT_VALUES.technicAdvertType[typeI];
  const isPhotosAllowed = transactionType === "Сдать в аренду";
  const onSubmit = () => {
    submit(
      {
        type: "technic",
        transactionType,
        title,
        equipment:
          technicType[0]?.equipments.length !== 0 ? equipment : undefined,
        username,
        phone,
        general: {
          count: Number(count),
          workMode: INPUT_VALUES.workMode[workModeIndex],
          rentalPeriod:
            firstDate && secondDate && isFirstDateValid && isSecondDateValid
              ? {
                  from: new Date(firstDate).valueOf(),
                  to: new Date(secondDate).valueOf(),
                }
              : undefined,
          rentalDaysCount: Number(rentalDaysCount),
          address: "Москва, Люблино",
          comment,
        },
        params: {
          technicType: technicType[0],
          mark,
          model,
          prodYear,
          weight: hasWeight ? Number(weight) : undefined,
          height: hasHeight ? Number(height) : undefined,
          volume: hasVolume ? Number(volume) : undefined,
          passengersCount: hasPassengersCount
            ? Number(passengersCount)
            : undefined,
          pipeLength: hasPipeLength ? Number(pipeLength) : undefined,
          boomLength: hasBodyLength ? Number(boomLength) : undefined,
          liftingCapacity: hasLiftingCapacity
            ? Number(liftingCapacity)
            : undefined,
          performance: hasPerformance ? Number(performance) : undefined,
          cargoType: hasCargoType ? cargoType : undefined,
          rollerType: hasRollerType
            ? INPUT_VALUES.rollerType[rollersTypeI]
            : undefined,
          rollersCount: hasRollersCount ? Number(rollersCount) : undefined,
          sizeType: hasSizeType ? INPUT_VALUES.sizeType[sizeTypeI] : undefined,
          OSSIG: hasOSSIG ? INPUT_VALUES.OSSIG[ossigI] : undefined,
          axesCount: hasAxesCount
            ? Number(INPUT_VALUES.axesCount[axesCountI])
            : undefined,
          bodyLength: hasBodyLength ? Number(bodyLength) : undefined,
          trailerType: hasTrailerType ? trailerType : undefined,
          loadingType: hasLoadingType
            ? INPUT_VALUES.loadingType[loadingTypeI]
            : undefined,
        },
        price: {
          price: Number(price),
          paymentFor: INPUT_VALUES.paymentForTechnic[paymentForI],
          paymentType: INPUT_VALUES.paymentType[paymentTypeI],
        },
      },
      isPhotosAllowed
    );
  };

  const clearForm = () => {
    clearParams();
    setTypeI(0);
    onTitleChange("");
    clearTechnicType();
    onChangeMark("");
    onModelChange("");
    onProdYearChange("");
    unselectAllEquipments();
    onCountChange("");
    setWorkModeIndex(0);
    onFirstDateChange("");
    onSecondDateChange("");
    onRentalDaysCountChange("");
    setComment("");
    onPriceChange("");
    setPaymentForI(0);
    setPaymentTypeI(0);
  };

  const clearParams = () => {
    onWeightChange("");
    onHeightChange("");
    onVolumeChange("");
    onPassengersCountChange("");
    onPipeLengthChange("");
    onBodyLengthChange("");
    onBoomLengthChange("");
    onCargoTypeChange("");
    onLiftingCapacityChange("");
    onPerformanceChange("");
    onRollersCountChange("");
    setAxesCountI(0);
    setLoadingTypeI(0);
    setOssigI(0);
    setSizeTypeI(0);
    setRollersTypeI(0);
  };

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

  return (
    <Form
      inputs={inputs}
      isFormValid={isFormValid}
      onSubmit={onSubmit}
      submitTitle={isPhotosAllowed ? "Далее" : "Опубликовать"}
    />
  );
};

export default TechnicForm;
