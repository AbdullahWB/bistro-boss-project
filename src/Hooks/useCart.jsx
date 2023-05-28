import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'


const useCart = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: cart = [], error } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
            return response.json()
        },
    })
    return [cart, isLoading, refetch]
}
export default useCart