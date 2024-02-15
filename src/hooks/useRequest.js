import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from '../redux/ui/request/index.js';

export function useRequest(thunk, ...params) {
  const [request, setRequest] = useState(null);

  const requestStatus = useSelector((state) =>
    selectStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [...params, thunk, dispatch]);

  return requestStatus;
}
