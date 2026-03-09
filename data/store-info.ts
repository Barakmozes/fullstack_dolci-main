import { StoreInfo } from "./types";

export const storeInfo: StoreInfo = {
  name: "DOLCI",
  nameHe: "דולצ'י",
  address: "42 Ibn Gabirol Street, Tel Aviv-Yafo, 6416202, Israel",
  addressHe: "רחוב אבן גבירול 42, תל אביב-יפו, 6416202, ישראל",
  phone: "03-544-8890",
  email: "hello@dolci.co.il",
  hours: [
    {
      day: "Sunday",
      dayHe: "ראשון",
      open: "07:00",
      close: "21:00",
    },
    {
      day: "Monday",
      dayHe: "שני",
      open: "07:00",
      close: "21:00",
    },
    {
      day: "Tuesday",
      dayHe: "שלישי",
      open: "07:00",
      close: "21:00",
    },
    {
      day: "Wednesday",
      dayHe: "רביעי",
      open: "07:00",
      close: "21:00",
    },
    {
      day: "Thursday",
      dayHe: "חמישי",
      open: "07:00",
      close: "22:00",
    },
    {
      day: "Friday",
      dayHe: "שישי",
      open: "07:00",
      close: "15:00",
    },
    {
      day: "Saturday",
      dayHe: "שבת",
      open: "closed",
      close: "closed",
    },
  ],
  socialMedia: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/dolci.tlv",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/dolci.tlv",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/97235448890",
    },
  ],
};
