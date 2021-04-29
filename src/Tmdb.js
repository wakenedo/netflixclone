const API_KEY = '29849fdab54fd5cf94e118612a318327';
const API_BASE = 'https://api.themoviedb.org/3';

/*
-Netflix Originals
-Recomended (trending)
-top rated
-action
-comedy
-terror
-romance
-documetaries
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            }, 
            {
                slug: 'trending',
                title: 'Recommended for You',
                items: await basicFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`) 
            },
            {
                slug: 'top rated',
                title: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?&api_key=${API_KEY}`) 
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genre=28&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genre=35&language=en-US&api_key=${API_KEY}`) 
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genre=27&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genre=10749&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genre=99&language=en-US&api_key=${API_KEY}`)
            }   
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=en-US&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=en-US&api_key=${API_KEY}`);
                break;        
            }
        }

        return info;
    }
}