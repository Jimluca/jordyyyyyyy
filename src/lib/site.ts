// Centrale gegevens van de website. Pas hier naam, contactgegevens en menu aan.
export const site = {
  name: "Jordy Icares",
  tagline: "Helder advies. Zichtbaar resultaat.",
  description:
    "Jordy Icares helpt je van idee naar resultaat, met een heldere aanpak en persoonlijke begeleiding.",
  // Voorbeeldgegevens: vervang deze door de echte contactgegevens.
  email: "info@jordyicares.nl",
  phone: "06 12 34 56 78",
  location: "Nederland",
  hours: "Maandag t/m vrijdag, 09:00 – 17:00",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/contact", label: "Contact" },
] as const;
