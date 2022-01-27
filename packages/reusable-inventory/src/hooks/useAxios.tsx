import axios from 'axios';
import { useEffect, useState } from 'react';
import { METHOD_TYPE, STATUS_TYPE } from '../types/axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

interface AxiosProps {
  url: string;
  method?: METHOD_TYPE;
  body?: any;
  headers?: any;
}

export const useAxios = <T,>({
  url,
  method = METHOD_TYPE.GET,
  body = null,
  headers = null,
}: AxiosProps) => {
  const [response, setResponse] = useState<T>();
  const [status, setStatus] = useState<STATUS_TYPE>(STATUS_TYPE.IDLE);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = () => {
      setStatus(STATUS_TYPE.LOADING);
      axios[method](url, JSON.parse(headers), JSON.parse(body))
        .then((res) => {
          setResponse(res.data);
          setStatus(STATUS_TYPE.SUCCESS);
        })
        .catch((err) => {
          setError(err);
          setStatus(STATUS_TYPE.FAILED);
        });
    };
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, status };
};
