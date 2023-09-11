import {CheckboxProps} from "../../interfaces";
import {UncheckedIcon, CheckedIcon} from "./styles";

const Checkbox = ({onClick, checked}: CheckboxProps) => {
  return checked ? <CheckedIcon onClick={onClick}/> : <UncheckedIcon onClick={onClick}/>;
}

export default Checkbox;
