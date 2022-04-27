import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const Home = () =>{
    const navigate = useNavigate();
    return(
        <div class='homediv'>
           Welcome to our Shop
           <div>
           <button class='button' onClick={() => navigate('login')}>Login</button>
           <Outlet />
           </div>
        </div>
    );
}