
import axios from "axios";
import { useState } from "react";
import useDebouncePromise from "./useDebouncePromise";

const initialResquestInfo = {
  err: null,
  data: null,
  loading: false,
}

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialResquestInfo);
  const debounceAxios = useDebouncePromise(axios, config.debounceDelay);

  async function call(localConfig) {
    setRequestInfo({
      ...initialResquestInfo,
      loading: true,
    });
    let response = null;

    const finalConfig = {
      baseURL: 'http://localhost:5000',
      ...config,
      ...localConfig,
    };

    const fn = finalConfig.debounce ? debounceAxios : axios;
    
    try {
      response = await fn (finalConfig);
      setRequestInfo({
        ...initialResquestInfo,
        data: response.data,
      });
    } catch (error) {
      setRequestInfo({ 
        ...initialResquestInfo,
        error,
      });
    }

    if (config.onCompleted) {
      config.onCompleted(response);
    }
  }

  return [
    call,
    requestInfo
  ]
}