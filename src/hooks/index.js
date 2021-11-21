import { useCallback } from 'react';
import { useRouteMatch } from 'react-router';

export const useCreateRoutePath = () => {
  const match = useRouteMatch();

  return useCallback(
    (subPath) => {
      if (!Boolean(match.path)) return '';

      const mainPath = match.path === '/' ? '' : match.path;
      return `${mainPath}${subPath}`;
    },
    [match.path]
  );
};
