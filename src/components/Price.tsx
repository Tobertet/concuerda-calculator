import { Divider } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getDiscount, getPrice } from "../functions";
import { Discount, EventFormData } from "../types";

type Prices = {
  ceremony: number;
  cocktail: number;
  feast: number;
  subtotal: number;
  discount?: Discount;
  total: number;
};

type Props = {
  ceremonyEventData: EventFormData;
  cocktailEventData: EventFormData;
  feastEventData: EventFormData;
};

export const Price: FC<Props> = ({
  ceremonyEventData,
  cocktailEventData,
  feastEventData,
}) => {
  const [prices, setPrices] = useState<Prices>({
    ceremony: 0,
    cocktail: 0,
    feast: 0,
    subtotal: 0,
    total: 0,
  });

  useEffect(() => {
    const ceremony = getPrice("ceremonyPrice", ceremonyEventData);
    const cocktail = getPrice("cocktailPrice", cocktailEventData);
    const feast = getPrice("feastPrice", feastEventData);
    const subtotal = ceremony + cocktail + feast;
    const discount = getDiscount(
      ceremonyEventData.group,
      cocktailEventData.group,
      feastEventData.group
    );
    const total = subtotal * (discount ? (100 - discount.percentage) / 100 : 1);

    setPrices({
      ceremony,
      cocktail,
      feast,
      subtotal,
      discount,
      total,
    });
  }, [ceremonyEventData, cocktailEventData, feastEventData]);

  if (
    !ceremonyEventData.group &&
    !cocktailEventData.group &&
    !feastEventData.group
  )
    return <div />;

  return (
    <div style={{ background: "white", margin: "5%", padding: "5%" }}>
      {prices.ceremony > 0 && (
        <p
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Ceremonia:</span> <span>{prices.ceremony}€</span>
        </p>
      )}
      {prices.cocktail > 0 && (
        <p
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Cocktail:</span> <span>{prices.cocktail}€</span>
        </p>
      )}
      {prices.feast > 0 && (
        <p
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Banquete:</span> <span>{prices.feast}€</span>
        </p>
      )}
      <Divider />
      {prices.subtotal > 0 && (
        <p
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Subtotal:</span> <span>{prices.subtotal}€</span>
        </p>
      )}
      <p style={{ fontSize: "16px" }}>
        Descuento:{" "}
        {prices.discount ? (
          <span>
            <b>{prices.discount.percentage}%</b> por {prices.discount.label}.
          </span>
        ) : (
          <span>No disponible.</span>
        )}
      </p>
      <Divider />
      <p
        style={{
          fontSize: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Total:</span> <span>{prices.total}€</span>
      </p>
      <p style={{ textAlign: "right" }}>Precios sin IVA incluido.</p>
      <p style={{ textAlign: "right" }}>Desplazamiento no incluido.</p>
    </div>
  );
};
