export function getZones() {
  return [
    {
      name: "Casale sul Sile",
      id: 7,
    },
    {
      name: "Treviso – fuori mura",
      id: 3,
    },
    {
      name: "Carbonera",
      id: 6,
    },
  ];
}

export function getZoneNameById(id) {
  return getZones().find((zone) => id == zone.id).name || "";
}
