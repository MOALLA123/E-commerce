import { getSpecificUserAddress } from "../../redux/actions/UserAction";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetSpecificAddressHook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const f = async () => {
      await dispatch(getSpecificUserAddress(id));
    };
    f();
  }, []);

  const address = useSelector((state) => state.UserReducer.specificAddress);
  return [address];
};

export default GetSpecificAddressHook;
