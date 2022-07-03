import bcrypt from 'bcrypt';

export default async (
  userPassword: string,
  password: string
): Promise<boolean> => {
  return await bcrypt.compare(password, userPassword);
};
