import { useRouter } from 'next/router';

export default function SingleProduct() {
  // const [product, setProducts] = useState();
  const router = useRouter();
  const { id } = router.query;
  // useEffect(() => {
  //   fetcherGet(`products/${id}`).then((data) => setProducts(data));
  // }, []);
  // console.log(product);
  return (
    <div>
      {/* <img src={product?.imageUrl} alt="" /> */}
      <p>Single product : {id}</p>
    </div>
  );
}
