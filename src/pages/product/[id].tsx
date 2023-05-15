import { useRouter } from 'next/router';

export default function SingleProduct() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Single product : {id}</div>;
}
