export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1KwzlFro20q0WFKczd4MO6fOUiVMyHXV`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title || 'Default GIF',
            url: img.images?.downsized_medium.url
        }
    });
    return gifs
}
