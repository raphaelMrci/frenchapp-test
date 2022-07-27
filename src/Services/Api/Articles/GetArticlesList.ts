import api from '@/Services'

export default async token => {
    const response = await api.get('/news', {
        headers: { Authorization: `Bearer ${token}` },
    })

    return response.data
}
