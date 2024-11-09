import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../../redux/feature/MenuSlice";

const Section = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.menu.activeItem);
  const menuItems = useSelector((state) => state.menu.value);
  console.log(activeItem);
  console.log(menuItems);

  return (
    <section>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => dispatch(setActiveItem(item.id))}
            onMouseLeave={() => dispatch(setActiveItem(null))}
          >
            <a href="">{item.title}</a>
            {activeItem === item.id && (
              <div className="menuItems">
                <ul>
                  {item.items.map((subItem, index) => (
                    <li key={index}>{subItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
