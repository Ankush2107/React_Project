import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'
// imported icons
function Icon({ name }) {
    if(name == "circle")
        return <FaRegCircle />
    else if(name == "cross")
        return <FaTimes />
    else 
        return <FaPen />     
}

export default Icon; 