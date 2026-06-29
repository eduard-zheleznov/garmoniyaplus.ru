#!/usr/bin/env node

const fs = require("fs");
const path = process.argv[2] || "/app/storage/lumera-store.json";

const CONTACTS = {
  phone: "+7 983 191-03-83",
  phoneHref: "tel:+79831910383",
  email: "info@garmoniya-plus.ru",
  emailHref: "mailto:info@garmoniya-plus.ru",
  address: "Абакан, Улица Торосова, 9а",
  addressHref: "https://2gis.ru/abakan/firm/9711414977522540",
  workingHours: "9:00 — 18:00",
  telegram: "https://t.me/+79831910383",
  vk: "https://vk.com/garmoniyaplus",
  max: "https://max.ru/u/f9LHodD0cOLZdd8ta9xft56OcqRLDR9X4QKrbWabs7itV-604qaew35roDY"
};

function upsertItem(items, nextItem) {
  const index = items.findIndex((item) => item.id === nextItem.id);
  if (index >= 0) {
    items[index] = { ...items[index], ...nextItem };
    return;
  }
  items.push(nextItem);
}

const store = JSON.parse(fs.readFileSync(path, "utf8"));

store.brand = {
  ...store.brand,
  phone: CONTACTS.phone,
  email: CONTACTS.email,
  address: CONTACTS.address,
  workingHours: CONTACTS.workingHours,
  telegram: CONTACTS.telegram,
  vk: CONTACTS.vk,
  max: CONTACTS.max
};

const contactsPage = store.pages?.contacts;
const contactSection = contactsPage?.sections?.find((section) => section.id === "contacts-card");
if (!contactSection) {
  throw new Error("contacts-card section not found");
}

const items = Array.isArray(contactSection.items) ? contactSection.items : [];
contactSection.items = items;

upsertItem(items, {
  id: "contact-phone",
  title: "Телефон",
  description: CONTACTS.phone,
  href: CONTACTS.phoneHref
});

upsertItem(items, {
  id: "contact-email",
  title: "Email",
  description: CONTACTS.email,
  href: CONTACTS.emailHref
});

upsertItem(items, {
  id: "contact-address",
  title: "Адрес",
  description: CONTACTS.address,
  href: CONTACTS.addressHref
});

upsertItem(items, {
  id: "contact-hours",
  title: "Режим работы",
  description: CONTACTS.workingHours
});

store.updatedAt = new Date().toISOString();

fs.writeFileSync(path, JSON.stringify(store, null, 2) + "\n");
console.log("contact info updated:", {
  phone: CONTACTS.phone,
  email: CONTACTS.email,
  address: CONTACTS.address,
  workingHours: CONTACTS.workingHours,
  telegram: CONTACTS.telegram,
  vk: CONTACTS.vk,
  max: CONTACTS.max
});
