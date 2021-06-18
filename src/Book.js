import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
    this.lowerCount = this.lowerCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  state = {
    count: 1,
    name: "Narendra Selot",
  };

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  lowerCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;

    return (
      <article className="book">
        <img
          src={img}
          width="150px"
          height="200px"
          alt="book"
          draggable="false"
        />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={() => handleDelete(id)}>
            Delete Me
          </button>
        </div>
      </article>
    );
  }
}
