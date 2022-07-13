import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div></div>;
}
