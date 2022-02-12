import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Service,
  Books,
  Products,
}

export class Advantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export class HHData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export type TopPageType = Base;
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;

  @prop()
  secondLevelCategory: string;

  @prop()
  title: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  category: string;

  @prop({ type: () => HHData })
  hh?: HHData;

  @prop({ type: () => [Advantage] })
  advantages: Advantage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
