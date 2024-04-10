export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  pointStyle: false,
  borderWidth: 1,
};
function removeNonNumericChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if ((char >= '0' && char <= '9') || char === '.' || char === '-') {
            result += char;
        }
    }
    return result;
}
export function segregateKeys(data) {
  const keys = {};

  data.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const cleanedValue = removeNonNumericChars(obj[key]);;
      const intValue = /^\d+$/.test(cleanedValue) ? parseInt(cleanedValue) : obj[key];
      if (!keys[key]) {
        keys[key] = [intValue];
      } else {
        keys[key].push(intValue);
      }
    });
  });

  return keys;
}
