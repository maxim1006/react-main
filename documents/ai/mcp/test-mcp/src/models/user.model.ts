import { z } from 'zod';

export const UserSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string().optional(),
    address: z.string().optional(),
    phoneNumber: z.string().optional(),
  });

  export type IUser = z.infer<typeof UserSchema>;