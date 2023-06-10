import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useClasses = () => {
    const {user} = useContext(AuthContext);
    const {  refetch, data: clas = [] } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/class?email=${user.email}`)
            return res.json();
        },
      })
      return[clas, refetch]
};

export default useClasses;