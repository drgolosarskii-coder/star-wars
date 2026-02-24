import {useContext} from "react";
import {ChangePageContext} from "../utils/context.js";

const NavItem = ({itemTitle}) => {
    const {setPage} = useContext(ChangePageContext);
    return (
        <div onClick={() => setPage(itemTitle)}
             className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-400 hover:text-white`}>{itemTitle}</div>
    )
}

export default NavItem;
