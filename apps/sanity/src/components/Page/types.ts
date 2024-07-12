export interface PageProps {
  data: IPageContainerProps | null;
}

export interface IPageContainer {
  _id: string;
  _type: string;
  _createdAt: string;
  pathname: {
    current: string;
    _type: string;
  };
  title?: string;
  sectionsBody?: any[];
}

export interface IPageContainerProps {
  data: IPageContainer | null;
}
