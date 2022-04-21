import react from "react";
import "../stylesheet/mainpage.scss";
import categories_data from "../constants/categories";

export default function Categories() {
  console.log("cate", categories_data);
  const cat_data = categories_data;
  return (
    <div>
      <ul className="cat_container">
        {cat_data &&
          cat_data.map((category) => (
            <li key={category.name} className="category_list">
              {category.name} <span className='count'>{category.count}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
