import { Input } from "antd";

const { Search } = Input;

const SearchMovie = () => {
    return (
        <div>
            <Search placeholder="Search Movie" enterButton />
        </div>
    )
}

export default SearchMovie;