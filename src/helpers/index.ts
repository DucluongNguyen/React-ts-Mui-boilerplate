import { Flat, flattenDeep, isArray, isString } from "lodash";
import { InfiniteData } from "react-query";

import { List, ResponsePagination } from "interfaces";

export const convertToFormSelect = (
  list: List<any> | any = [],
  fieldForLabel: string | number | undefined = undefined,
  fieldForValue: string | number | undefined = undefined,
  noneOption: boolean | undefined = false
) => {
  if (!fieldForLabel || !fieldForValue) {
    return [
      ...list.reduce((arr: any, el: any) => {
        return [...arr, { label: el, value: el }];
      }, []),
    ];
  }
  if (typeof list === "object" && list) {
    const listReturn = [
      ...list.reduce((arr: any, el: any) => {
        return [
          ...arr,
          {
            ...el,
            label: el[fieldForLabel] ?? "None",
            value: el[fieldForValue] ?? "",
          },
        ];
      }, []),
    ];

    if (noneOption) {
      return [{ label: "None", value: "" }, ...listReturn];
    }
    return listReturn;
  }
  return [{ label: "None", value: "" }, ...list];
};

export const getErrorMsg = (error: any) => {
  if (isArray(error?.response?.data?.message)) {
    return error?.response?.data?.message.join(", ");
  }

  if (isString(error?.response?.data?.error)) {
    return error.response.data.error;
  }

  if (isString(error?.response?.data?.error?.message)) {
    return error.response.data.error.message;
  }

  if (error?.response?.data?.message) {
    return error?.response?.data?.message;
  }

  if (error?.toString()) {
    return error?.toString();
  }

  return "Something wrong!";
};

export const flatAllPages = (data?: any) => {
  //! Use for infiniteQuery
  if (data) {
    if (data.pages) {
      return flattenDeep(data.pages.map((el: any) => el.data)).filter((el) => !!el);
    }

    return [];
  }

  return [];
};
