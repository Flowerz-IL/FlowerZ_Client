export const occasionValidation = (string: String) => {
  if (string == 'יום הולדת') return 'BIRTHDAY';
  if (string == 'התנצלות') return 'APOLOGIZE';
  if (string == 'רומנטיקה') return 'ROMANTIC';
  if (string == 'רגיל') return 'NORMAL';
  if (string == 'לבית') return 'PRETTY_HOUSE';
  return "";
};
export const colorValidation = (string: String) => {
  if (string == 'כחול') return 'blue';
  if (string == 'אדום') return 'red';
  if (string == 'צהוב') return 'yellow';
  if (string == 'ורוד') return 'pink';
  if (string == 'סגול') return 'purple';
  if (string == 'לבן') return 'white';
  return "";
};
