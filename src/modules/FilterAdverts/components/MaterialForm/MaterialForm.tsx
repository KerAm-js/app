import { FC, useMemo, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useSelectionValidator } from "../../../../hooks/inputValidators/useSelectionValidator";
import { TMaterialFilter } from "../../store/types";
import { useActions } from "../../../../hooks/store/useActions";
import { useNavigation } from "@react-navigation/native";
import {
  ALL,
  DELIVERY_TYPE,
  ENUMS,
  MATERIAL_TRANSACTION_TYPES,
  MEASURE_IN,
  PAYMENT_TYPES,
} from "../../../../consts/enums";
import { useDumpTransports, useMaterialTypes } from "../../../MiniEntities";
import { View } from "react-native";
import { ResetFilterButton } from "../ResetFilterButton/ResetFilterButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import {
  IDumpTransportType,
  IMaterialType,
  TFraction,
} from "../../../../types/MiniEntities";

const MaterialForm: FC<TMaterialFilter> = (currentFilter) => {
  const { setMaterialFilter } = useActions();
  const materialTypes = useMaterialTypes();
  const dumpTransports = useDumpTransports();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
  const initPaymentTypeI = useMemo(() => {
    const i = PAYMENT_TYPES.findIndex(
      (item) => item === currentFilter.paymentType
    );
    return i < 0 ? PAYMENT_TYPES.length - 1 : i;
  }, []);
  const initDeliveryI = useMemo(() => {
    const i = DELIVERY_TYPE.findIndex(
      (item) => item === currentFilter.deliveryType
    );
    return i < 0 ? ENUMS.delivery.length - 1 : i;
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
  ] = useSelectionValidator<IDumpTransportType>({
    multySelection: true,
    initValue:
      dumpTransports.filter((item) =>
        currentFilter.transports?.find((currentItem) => currentItem === item.id)
      ) || undefined,
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
    initValue: currentFilter.fractions || undefined,
  });
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
      ],
    },
    {
      title: "Общие данные",
      inputs: [
        {
          id: "delivery",
          type: "segment",
          values: ENUMS.delivery,
          selectedIndex: deliveryI,
          onChange: (evt) => setDeliveryI(evt.nativeEvent.selectedSegmentIndex),
          label: "Способ отгрузки",
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

  const onSubmit = () => {
    const result: TMaterialFilter = {
      priceFrom: null,
      priceTo: null,
      title: null,
      description: null,
      coefficientFrom: null,
      coefficientTo: null,
      shiftType: null,
      measureIn: null,
      amountFrom: null,
      amountTo: null,
      // the parameters above are not needed for filtering yet.
      transactionType: MATERIAL_TRANSACTION_TYPES[typeI],
      materialType:
        materialType.length > 0 ? materialType[0].name.toLowerCase() : null,
      fractions: fractions.length > 0 ? fractions : null,
      transports:
        transport.length > 0 ? transport.map((item) => item.id) : null,
      deliveryType:
        DELIVERY_TYPE[deliveryI] !== "ANY" ? DELIVERY_TYPE[deliveryI] : null,
      paymentType:
        PAYMENT_TYPES[paymentTypeI] !== "ANY"
          ? PAYMENT_TYPES[paymentTypeI]
          : null,
    };
    console.log(result);
    setMaterialFilter(result);
    navigation.navigate("Main");
  };

  return (
    <View>
      <Form
        inputs={inputs}
        isFormValid={true}
        onSubmit={onSubmit}
        submitTitle="Сохранить"
      />
      <ResetFilterButton advertType="NON_MATERIAL" />
    </View>
  );
};

export default MaterialForm;
