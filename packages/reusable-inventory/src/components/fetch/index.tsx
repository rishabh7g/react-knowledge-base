import { ReactNode } from 'react';
import { useAxios } from '../..';
import { METHOD_TYPE, STATUS_TYPE } from '../../types/axios';

type FetchProps = {
  url: string;
  method?: METHOD_TYPE;
  requestPayload?: any;
  headersPayload?: any;
  children: ReactNode | ((...args: any[]) => ReactNode);
};
export const Fetch = ({
  url,
  method = METHOD_TYPE.GET,
  requestPayload,
  headersPayload,
  children,
}: FetchProps) => {
  const { error, response, status } = useAxios({
    url,
    method,
    body: requestPayload,
    headers: headersPayload,
  });
  switch (status) {
    case STATUS_TYPE.IDLE:
      return null;
    case STATUS_TYPE.LOADING:
      return <div>Loading....</div>;
    case STATUS_TYPE.SUCCESS:
      return typeof children === 'function' ? children(response) : children;
    case STATUS_TYPE.FAILED:
      return <div>{error}</div>;
  }
};
