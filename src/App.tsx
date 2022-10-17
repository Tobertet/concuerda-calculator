import { FC, useState } from "react";
import { Price } from "./components/Price";
import { Selector } from "./components/Selector";
import { Group } from "./types";
import { groups } from "./variables";

export const App: FC = () => {
  const [ceremonyGroup, setCeremonyGroup] = useState<Group>();
  const [cocktailGroup, setCocktailGroup] = useState<Group>();
  const [feastGroup, setFeastGroup] = useState<Group>();

  return (
    <div>
      <div>
        <Selector
          label="Ceremonia"
          onChange={(group) => setCeremonyGroup(group)}
          options={groups}
          priceField="ceremonyPrice"
          value={ceremonyGroup}
        />
        <Selector
          label="Cocktail"
          onChange={(group) => setCocktailGroup(group)}
          options={groups}
          priceField="cocktailPrice"
          value={cocktailGroup}
        />
        <Selector
          label="Banquete"
          onChange={(group) => setFeastGroup(group)}
          options={groups}
          priceField="feastPrice"
          value={feastGroup}
        />
      </div>
      <Price
        ceremonyGroup={ceremonyGroup}
        cocktailGroup={cocktailGroup}
        feastGroup={feastGroup}
      />
    </div>
  );
};
