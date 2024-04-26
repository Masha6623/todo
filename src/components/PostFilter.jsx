import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return ( 
        <div className="sort">
        <Select
          value={filter.sort}
          defaultValue='Сортировка:'
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            { value: "title", name: "по названию" },
            { value: "body", name: "по описанию" },
          ]}
        />
        <Input
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск..."
        ></Input>
      </div>
     );
}
 
export default PostFilter;