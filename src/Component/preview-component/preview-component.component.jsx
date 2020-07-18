import React from "react";
import CollectionItem from "../CollectionItem/Collection-item.component";
import { Link } from 'react-router-dom'
import "./preview-component.styles.scss";

const PreviewComponent = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title"> {title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PreviewComponent;
