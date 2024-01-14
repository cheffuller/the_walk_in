import { Link } from "react-router-dom"

const AdminLink = ({ user, style }) => {
    if (user && user.admin) {
        return (
            <Link to='/admin' style={style}>Admin</Link>
        )
    }
}

export default AdminLink