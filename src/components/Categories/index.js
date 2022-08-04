import React from "react";
import { Card } from "antd";
import "./styles.css";
import "../../shared/styles.css";
import { categories } from "../../shared/utils";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="pageTitle">Categories</div>
      <div className="category-wrapper">
        {categories.map((category) => (
          <Link key={category.id} to={`/${category.link}`}>
            <Card
              title={category.title}
              style={{
                margin: "30px auto",
                textAlign: "center",
                width: 300,
              }}
            >
              <img alt={category.link} src={category.icon} className="icon" />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
