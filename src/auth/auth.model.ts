import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export type AuthType = Base;

export class AuthModel extends TimeStamps {
  _id: string;

  @prop({ unique: true })
  email: string;

  @prop()
  passwordHash: string;
}
