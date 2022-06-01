import React, { useCallback, useState } from 'react';
import axios from 'axios';
const useRequestResource = ({ endpoint, body, blogId }) => {
  const [resources, setResources] = useState([]);
  const getResources = useCallback(() => {
    axios
      .get(`https://bedrock-exchange-blog.herokuapp.com/${endpoint}`)
      .then((res) => {
        const data = res.data;
        setResources(data);
      })
      .catch((err) => console.error(err));
  }, [endpoint]);

  const addResource = useCallback(() => {
    axios
      .post(`https://bedrock-exchange-blog.herokuapp.com/${endpoint}`, {
        ...body,
      })
      .then((res) => {})
      .catch((err) => console.error(err));
  }, [endpoint, body]);

  const updateResource = useCallback(() => {
    axios
      .patch(
        `https://bedrock-exchange-blog.herokuapp.com/${endpoint}/${blogId}`,
        { ...body }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [endpoint, blogId, body]);

  const deleteResource = useCallback(() => {
    axios
      .delete(
        `https://bedrock-exchange-blog.herokuapp.com/${endpoint}/${blogId}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, [endpoint, blogId]);

  return {
    resources,
    getResources,
    addResource,
    updateResource,
    deleteResource,
  };
};

export default useRequestResource;
