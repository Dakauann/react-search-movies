import "../styles/MoviesResultsContainer.css";

const SearchForm = () => {
	return (
		<form className="Form">
			<div className="FormGroupContainer OnTop">
				<input
					type="text"
					className="SearchInput"
					placeholder="Click Here And Seach Any Movie"
					onFocus={(e) => {
						e.target.parentElement?.classList.add("OnTop");
					}}
					onBlur={(e) => {
						e.target.parentElement?.classList.remove("OnTop");
					}}
				/>
				<button type="submit" className="SearchButton">
					Search
				</button>
			</div>
			<div className="MoviesResultsContainer">
				<div className="FilmContainer">
					<label className="FilmName">Cu perdido</label>
					<div className="FilmPoster">
						<img
							src="https://image.tmdb.org/t/p/w500//tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;
