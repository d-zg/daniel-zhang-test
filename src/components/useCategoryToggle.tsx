import React from 'react';
import { CategoryToggleProps } from './types';
const useCategoryToggle = (props: CategoryToggleProps) => {
  let data: any = {};
  const setCategory = (): any => {};

  let fns: any = { setCategory };
  return { data, fns };
};

export default useCategoryToggle;