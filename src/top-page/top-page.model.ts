export enum TopLevelCategory {
  Courses,
  Service,
  Books,
  Products,
}

type HH = {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
};

type Advantage = {
  title: string;
  description: string;
};

export class TopPageModel {
  firstLevelCategory: TopLevelCategory;
  secondLevelCategory: string;
  title: string;
  category: string;
  hh?: HH;
  advantages: Advantage[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
