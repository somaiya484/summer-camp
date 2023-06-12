import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: clas = [] } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/class?email=${user.name.email}`)
            console.log('res from axios', res)
            return res.data; 
        },
    })
    return [clas, refetch]
};

export default useClasses;