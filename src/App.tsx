import { FC, useState } from "react";
import { Price } from "./components/Price";
import { EventFormData } from "./types";
import { groups } from "./variables";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Separator } from "./components/Separator";
import { EventForm } from "./components/EventForm";

const emptyFormData = {
  group: undefined,
  withCandles: false,
  withFlowers: false,
  withGrandPiano: false,
};

export const App: FC = () => {
  const [ceremonyEventData, setCeremonyEventData] =
    useState<EventFormData>(emptyFormData);
  const [cocktailEventData, setCocktailEventData] =
    useState<EventFormData>(emptyFormData);
  const [feastEventData, setFeastEventData] =
    useState<EventFormData>(emptyFormData);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          background: "#18160f",
        }}
      >
        <img
          alt="Logo de Tu boda con velas"
          style={{ padding: "20% 10% 5% 10%" }}
          src="/concuerda-calculator/logo.png"
        />
        <h2
          style={{
            color: "#fbf5e1",
            textAlign: "center",
            fontFamily: "Abhaya Libre",
            letterSpacing: "2px",
          }}
        >
          DISEÑA TU PACK
        </h2>
        <img
          alt="Velas encendidas"
          src="/concuerda-calculator/background.jpeg"
        />
        <Separator />
        <EventForm
          label="Ceremonia"
          onChange={(data) => setCeremonyEventData(data)}
          options={groups.filter((item) => item.ceremonyPrice > 0)}
          data={ceremonyEventData}
        />
        <Separator />
        <EventForm
          label="Cocktail"
          onChange={(data) => setCocktailEventData(data)}
          options={groups.filter((item) => item.cocktailPrice > 0)}
          data={cocktailEventData}
        />
        <Separator />
        <EventForm
          label="Banquete"
          onChange={(data) => setFeastEventData(data)}
          options={groups.filter((item) => item.feastPrice > 0)}
          data={feastEventData}
        />
        <Separator />
        <Price
          ceremonyEventData={ceremonyEventData}
          cocktailEventData={cocktailEventData}
          feastEventData={feastEventData}
        />
        <img
          alt="Logo de Tu boda con velas"
          style={{ padding: "5% 10% 20% 10%" }}
          src="/concuerda-calculator/logo.png"
        />
      </div>
    </ThemeProvider>
  );
};
