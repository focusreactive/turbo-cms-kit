export function createTemplate({
  json,
  title,
  description,
  category,
}: {
  json: any;
  title: string;
  description: string;
  category: string;
}) {
  return {
    name: title,
    value: json,
    meta: {
      name: json._type,
      type: json._type,
      namespace: json._type,
      title: json._type,
      description,
      category,
      area: json._type,
      // template: json,
      //   height: 500,
    },
  };
}
