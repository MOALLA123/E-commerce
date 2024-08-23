import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  return [category, loading];
};

export default HomeCategoryHook;
