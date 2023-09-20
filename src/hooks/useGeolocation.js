import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGeolocation(address) {
  const [map, setMap] = useState();

  const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&limit=1`;

  useEffect(() => {
    const getData = async () => {
      const response = await axios(url);
      setMap(response);
    };
    getData();
  }, []);

  return map;
}
