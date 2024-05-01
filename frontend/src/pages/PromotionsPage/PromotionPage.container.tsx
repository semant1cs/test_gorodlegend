import { useCallback, useState } from "react";
import CustomTable from "./../../components";
import styles from "./PromotionPage.module.scss";

export default function PromotionPageContainer() {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearchValue = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  }, []);

  return (
    <div>
      <input type="text" value={searchValue} onChange={onChangeSearchValue} />
      <CustomTable searchValue={searchValue} />
    </div>
  );
}
