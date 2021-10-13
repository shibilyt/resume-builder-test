export const required = (value: any) => (value ? undefined : "Required");
export const number = (value: any) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const minValue = (min: number) => (value: number) =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const maxValue = (max: number) => (value: number) =>
  value && value > max ? `Must be less than ${max}` : undefined;
export const email = (value: string) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const phoneNumber = (value: string) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
export const notEmptySkills = (value: string[]) =>
  Array.isArray(value) && value.length < 3 ? "Add atleast 3 skills" : undefined;
