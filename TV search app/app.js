const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    // use to check what data is returned
    // console.log(res.data[0].show.image.medium);

    // clear the input
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            // create img element in DOM
            const img = document.createElement('IMG');
            // set img equal to link from API data
            img.src = result.show.image.medium;
            // add img to DOM
            document.body.append(img);
        }
    }
}