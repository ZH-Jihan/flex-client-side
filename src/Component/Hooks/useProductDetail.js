import { useEffect, useState } from 'react';

const useProductDetail = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
      fetch(`https://flex-company.cyclic.app/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }, []);
    return [product, setProduct];
};

export default useProductDetail;