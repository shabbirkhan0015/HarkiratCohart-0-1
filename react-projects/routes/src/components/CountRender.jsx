
import { countAtom } from "../assets/Store/Atoms/CountAtom";
import { useRecoilValue } from "recoil";
const CountRender = () => {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

export default CountRender;
