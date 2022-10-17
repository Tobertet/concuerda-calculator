import { FC, useEffect, useState } from "react";
import { getDiscount, getPrice } from "../functions";
import { Discount, Group } from "../types";

type Props = {
  ceremonyGroup: Group | undefined;
  cocktailGroup: Group | undefined;
  feastGroup: Group | undefined;
};

export const Price: FC<Props> = ({
  ceremonyGroup,
  cocktailGroup,
  feastGroup,
}) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<Discount>();

  useEffect(() => {
    const newDiscount = getDiscount(ceremonyGroup, cocktailGroup, feastGroup);

    setTotalPrice(
      (getPrice("ceremonyPrice", ceremonyGroup) +
        getPrice("cocktailPrice", cocktailGroup) +
        getPrice("feastPrice", feastGroup)) *
        (newDiscount ? (100 - newDiscount.percentage) / 100 : 1)
    );

    setDiscount(newDiscount);
  }, [ceremonyGroup, cocktailGroup, feastGroup]);

  if (!ceremonyGroup && !cocktailGroup && !feastGroup)
    return (
      <span>
        Por favor, seleccione las opciones disponibles en los desplegables.
      </span>
    );

  return (
    <div>
      {ceremonyGroup && (
        <p>Ceremonia: {getPrice("ceremonyPrice", ceremonyGroup)}€</p>
      )}
      {cocktailGroup && (
        <p>Cocktail: {getPrice("cocktailPrice", cocktailGroup)}€</p>
      )}
      {feastGroup && <p>Banquete: {getPrice("feastPrice", feastGroup)}€</p>}
      <p>
        Descuento:{" "}
        {discount ? (
          <span>
            <b>{discount.percentage}%</b> por {discount.label}.
          </span>
        ) : (
          <span>No disponible.</span>
        )}
      </p>
      <p>Precio total: {totalPrice}€</p>
    </div>
  );
};
