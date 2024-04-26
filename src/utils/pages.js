import { useMemo } from "react";

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

// export const getPagesArray = (totalPages) => {
//   let result = [];
//   for (let i = 0; i < totalPages; i++) {
//     result.push(i + 1);
//   }
//   return result;
// };


export const usePagination = (totalPages) => {
    let pagination = useMemo(() => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
          }
          return result;
    }, [totalPages]);
    return pagination;
}