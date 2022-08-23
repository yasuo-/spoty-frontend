import { queryHelpers, buildQueries, GetErrorFunction, GetAllBy } from "@testing-library/react";

// custom Query
// queryのhelper
// cypressで推奨されているdomへのアクセス方法
const queryAllByDataCy: GetAllBy<string[]> = (...args) =>
  // @ts-ignore
  queryHelpers.queryAllByAttribute("data-cy", ...args);

const getMultipleError: GetErrorFunction = (_, dataCyValue) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
const getMissingError: GetErrorFunction = (_, dataCyValue) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [queryByDataCy, getAllByDataCy, getByDataCy, findAllByDataCy, findByDataCy] = buildQueries(
  queryAllByDataCy,
  getMultipleError,
  getMissingError
);

export { queryByDataCy, queryAllByDataCy, getByDataCy, getAllByDataCy, findAllByDataCy, findByDataCy };
