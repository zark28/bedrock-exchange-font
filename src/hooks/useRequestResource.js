import { useCallback, useState } from 'react';
import axios from 'axios';
const useRequestResource = ({ endpoint, body, blogId }) => {
  const URI = 'https://bedrock-exchange-blog.herokuapp.com';
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState([]);
  const getResources = useCallback(() => {
    axios

      .get(`${URI}/${endpoint}`)
      .then((res) => {
        const data = res.data;
        setResources(data);
      })
      .catch((err) => console.error(err));
  }, [URI, endpoint]);
  const getOneResource = useCallback(() => {
    axios
      .get(`${URI}/${endpoint}/${blogId}`)

      .then((res) => {
        console.log(blogId);
        const data = res.data;
        setResource(data);
      })
      .catch((err) => console.error(err));
  }, [endpoint, blogId]);

  const addResource = useCallback(() => {
    axios
      .post(`${URI}/${endpoint}`, {
        ...body,
      })
      .then((res) => {})
      .catch((err) => console.error(err));
  }, [endpoint, body, URI]);

  const updateResource = useCallback(() => {
    axios
      .patch(`${URI}/${endpoint}/${blogId}`, { ...body })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [endpoint, blogId, URI, body]);

  const deleteResource = useCallback(() => {
    axios
      .delete(`${URI}/${endpoint}/${blogId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [endpoint, URI, blogId]);

  return {
    resources,
    getResources,
    getOneResource,
    resource,
    addResource,
    updateResource,
    deleteResource,
  };
};

export default useRequestResource;
