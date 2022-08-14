const getData = async (url) => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            return await response.json()
        } else {
            throw new Error('Error at fetching data')
        }
    } catch (e) {
        console.log(e)
    }
}

export default getData