import { ReactNode } from 'react';
import { useAxios } from '../..';
import { METHOD_TYPE, STATUS_TYPE } from '../../types/axios';
import { Loading } from '../loading';

type FetchProps = {
  url: string;
  method?: METHOD_TYPE;
  requestPayload?: any;
  headersPayload?: any;
  onLoading?: ReactNode | ((...args: any[]) => ReactNode);
  onError?: ReactNode | ((...args: any[]) => ReactNode);
  children: ReactNode | ((...args: any[]) => ReactNode);
};

export const Fetch = ({
  url,
  method = METHOD_TYPE.GET,
  requestPayload,
  headersPayload,
  children,
  onLoading = () => <Loading />,
  onError = (error: string) => <div>{JSON.stringify(error)}</div>,
}: FetchProps) => {
  const { error, response, status } = useAxios({
    url,
    method,
    body: requestPayload,
    headers: headersPayload,
  });

  const loadingElement =
    typeof onLoading === 'function' ? onLoading() : onLoading;

  switch (status) {
    case STATUS_TYPE.IDLE:
      return null;
    case STATUS_TYPE.LOADING:
      return loadingElement;
    case STATUS_TYPE.SUCCESS:
      return typeof children === 'function' ? children(response) : children;
    case STATUS_TYPE.FAILED:
      return typeof onError === 'function' ? onError(error) : onError;
  }
};
