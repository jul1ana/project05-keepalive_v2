import { useRegister } from "../../contexts/RegisterContext";

export const Name = () => {
  const { fullName } = useRegister();

  return(
    <>
      {fullName.split(" ").slice(0, 1)}
    </>
  );
}