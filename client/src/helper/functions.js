//Randomize Avatar Color based on Usernames
export const stringToHslColor = (str, saturation, lightness) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let h = hash % 360;
  return `hsl(${h}, ${saturation}%, ${lightness}%)`;
}