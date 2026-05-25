import {
  Activity,
  BarChart3,
  CalendarDays,
  ClipboardList,
  HeartPulse,
  Home,
  Lock,
  Pill,
  ScanBarcode,
  Search,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconContent = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const navigationItems = [
  { label: "Funksjoner", href: "/#funksjoner" },
  { label: "Hvordan det fungerer", href: "/#slik-fungerer-det" },
  { label: "Personvern", href: "/personvern" },
];

export const heroTrustPoints = [
  "Du har kontrollen",
  "Dine data forblir dine",
  "Oppdag mønstre over tid",
];

export const featureCards: Array<IconContent & { accent: "green" | "aqua" | "berry" }> = [
  {
    title: "Matlogging",
    text: "Dagens måltider samlet i en enkel tidslinje med tydelige handlinger.",
    icon: Utensils,
    accent: "green",
  },
  {
    title: "Søk & skanning",
    text: "Søk, skann og legg til uten at resten av dagen kommer i veien.",
    icon: ScanBarcode,
    accent: "aqua",
  },
  {
    title: "Matplan",
    text: "Ukevisning for planlagte måltider, med samme rolige uttrykk som appen.",
    icon: CalendarDays,
    accent: "green",
  },
  {
    title: "Kroppssignaler",
    text: "Registrer kropp, reaksjoner, aktivitet og søvn fra samme dagsflyt.",
    icon: HeartPulse,
    accent: "berry",
  },
  {
    title: "Matdetektiv",
    text: "Grafer og historikk vises som rolige kort, ikke som tunge rapporter.",
    icon: Search,
    accent: "aqua",
  },
  {
    title: "Medisiner & rutiner",
    text: "Små rutiner og tilskudd får egne, oversiktlige registreringer.",
    icon: Pill,
    accent: "green",
  },
];

export const steps: Array<IconContent> = [
  {
    title: "Logg dagen",
    text: "Registrer mat, kroppssignaler, søvn, aktivitet, vann og medisiner.",
    icon: ClipboardList,
  },
  {
    title: "Følg med",
    text: "Matlogg samler dataene dine og viser utvikling over tid.",
    icon: Activity,
  },
  {
    title: "Se mønstre",
    text: "Oppdag sammenhenger som kan hjelpe deg å ta gode valg.",
    icon: BarChart3,
  },
];

export const trustPoints: Array<IconContent> = [
  {
    title: "Lokal først",
    text: "Dine data lagres lokalt på enheten — du bestemmer.",
    icon: Home,
  },
  {
    title: "Personvern i fokus",
    text: "Vi samler minimalt med data og deler aldri uten ditt samtykke.",
    icon: ShieldCheck,
  },
  {
    title: "Enkel oversikt",
    text: "Klare grafer og innsikter som gjør det enkelt å forstå seg selv.",
    icon: BarChart3,
  },
];

export const previewScreens = [
  {
    title: "I dag",
    text: "Sett inn et ekte bilde av dagsvisningen når du er klar.",
    variant: "today",
  },
  {
    title: "Matplan",
    text: "Plassholderen er klar for uke- eller kalenderbildet fra appen.",
    variant: "mealPlan",
  },
  {
    title: "Innsikt",
    text: "Bruk et ekte bilde av Mat-Detektiv eller innsikt senere.",
    variant: "insight",
  },
] as const;

export const faqs = [
  {
    question: "Er Matlogg medisinsk rådgivning?",
    answer:
      "Nei. Matlogg er laget for logging, oversikt og refleksjon. Appen kan hjelpe deg å se mønstre over tid, men erstatter ikke lege, ernæringsfysiolog eller annet helsepersonell.",
  },
  {
    question: "Kan jeg bruke Matlogg offline?",
    answer:
      "Matlogg er laget med local-first som prinsipp, slik at viktig logging kan fungere lokalt på enheten.",
  },
  {
    question: "Hva kan jeg logge?",
    answer:
      "Du kan logge måltider, vann, symptomer, søvn, aktivitet, medisiner, tilskudd og egne rutiner.",
  },
  {
    question: "Hva er Matdetektiv?",
    answer:
      "Matdetektiv er innsiktsdelen som hjelper deg å se historikk og mulige sammenhenger mellom mat og kroppssignaler over tid.",
  },
  {
    question: "Hvordan fungerer ventelisten?",
    answer:
      "Skriv inn e-posten din, så får du beskjed når Matlogg åpner for flere brukere eller lanserer nye oppdateringer.",
  },
];

export const footerColumns = [
  {
    title: "Produkt",
    links: [
      { label: "Funksjoner", href: "/#funksjoner" },
      { label: "Hvordan det fungerer", href: "/#slik-fungerer-det" },
      { label: "Matdetektiv", href: "/#app-preview" },
    ],
  },
  {
    title: "Ressurser",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Personvern", href: "/personvern" },
      { label: "Vilkår", href: "/personvern" },
    ],
  },
  {
    title: "Følg oss",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Nyhetsbrev", href: "/#venteliste" },
    ],
  },
];

export const privacyBadges = [
  { icon: Lock, label: "Local-first" },
  { icon: ShieldCheck, label: "Personvern" },
  { icon: BarChart3, label: "Oversikt" },
];
