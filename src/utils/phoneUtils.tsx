export const formatPhoneNumber = (phoneNumber: string): string => {
  if (phoneNumber.length !== 13) {
    throw new Error("O número de telefone deve ter 13 dígitos, incluindo o código do país.");
  }

  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 4);
  const firstPart = phoneNumber.slice(4, 9);
  const secondPart = phoneNumber.slice(9);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}