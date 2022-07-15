import { useEffect, useState } from "react";
// https://api.themoviedb.org/3/search/movie?api_key=34a94642ff7ce5427205b362623cb035&query=

const SearchForm = () => {
	const [query, setQuery] = useState("");
	const [results, setResults]: any = useState([]);

	useEffect(() => {
		SearchMovies();
	}, [query]);

	const SearchMovies = (e?: any) => {
		if (query === "") return;

		e ? e.preventDefault() : void 0;
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=34a94642ff7ce5427205b362623cb035&query=${query}&language=pt-BR&page=1&include_adult=false`
		)
			.then((res) => res.json())
			.then((data) => {
				const results = data.results;

				if (results) {
					const filteredResults = results.filter(
						(result: { overview: any; backdrop_path: any }) =>
							result.overview && result.backdrop_path
					);

					console.log(filteredResults)
					setResults(filteredResults);
				}
			});
	};

	return (
		<div className="Container">
			<form className="Form" onSubmit={SearchMovies}>
				<input
					className="SearchInput"
					type="text"
					placeholder="Click Here To Seach Any Movie"
					onChange={(e) => {
						setQuery(e.target.value);
						console.log(
							"https://image.tmdb.org/t/p/w500/" + results[0].backdrop_path
						);
					}}
					value={query}
				/>
				<button type="submit" className="SearchButton">
					Search
				</button>
			</form>
			<div className="MoviesContainer">
				{results.map((movie: any, index: number) => (
					<div
						className="MovieCard"
						key={index}
						style={{
							backgroundImage:
								"url(" +
								"https://image.tmdb.org/t/p/w500/" +
								movie.backdrop_path +
								")",
							objectFit: "cover",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="MovieInfo">
							<h1 className="MovieTitle">{movie.title}</h1>
							<p className="MovieDesc">{movie.overview}</p>
						</div>
					</div>
				))}
				{/* <div className="MovieCard">
					<img
						src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
						alt=""
					/>
					<div className="MovieInfo">
						<h1>aaaaaaaaaaaaaaaaaaaaaaaaa</h1>
						<p>
							aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default SearchForm;
