
const Search = function (word, array) {
    let result = array.filter(person => (((person.name).toLowerCase()).includes(word)))
    return result
}

export default Search