function transformString(inputString) {
  const length = inputString.length;

  // Check if length is divisible by both 3 and 5, reverse the entire string and replace characters with ASCII codes
  if (length % 3 === 0 && length % 5 === 0) {
    return inputString
      .split("")
      .reverse()
      .join("") // Reverse the entire string
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" "); // Replace characters with ASCII codes
  }

  // Check if length is divisible by 3 and reverse the entire string
  if (length % 3 === 0) {
    return inputString.split("").reverse().join("");
  }

  // Check if length is divisible by 5 and replace characters with ASCII codes
  if (length % 5 === 0) {
    return inputString
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // Return the original string if none of the conditions are met
  return inputString;
}

// Example usage:
console.log("transform string 1 \n =>" ,transformString("Hello World"));
console.log("transform string 2 \n =>" ,transformString("World"));
