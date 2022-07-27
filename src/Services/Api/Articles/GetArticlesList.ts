import api from '@/Services'
import { useStore } from 'react-redux'

export default async token => {
    const response = await api.get('/news', {
        headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
}
