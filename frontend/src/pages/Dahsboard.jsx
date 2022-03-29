import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Dahsboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user) {
            navigate("/login")
        }
    }, [user, navigate]);



    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dahsboard;