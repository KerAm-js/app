export const toPhoneFormat = (phone: string) => {
  const result =
    (phone[0] ? "+7" : "") +
    (phone[1] ? " " + phone.slice(1, 4) : "") +
    (phone[4] ? " " + phone.slice(4, 7) : "") +
    (phone[7] ? "-" + phone.slice(7, 9) : "") +
    (phone[9] ? "-" + phone.slice(9) : "");
  return result;
};
