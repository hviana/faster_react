const checkPasswordStrength = (password: string): number => {
  let strength: number = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }
  if (password.length < 6) {
    strength = 0;
  }
  return strength;
};

const validateEmail = (str: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(str);
};

export { checkPasswordStrength, validateEmail };
