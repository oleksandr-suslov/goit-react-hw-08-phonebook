import { Component } from "react";
import Button from "../Button/Button";
import styles from "./ContactList.module.css";

export default class ContactList extends Component {
  removeContactId = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(evt.currentTarget.id);
  };

  render() {
    return (
      <ul className={styles.list}>
        {this.props.arr.map((item) => (
          <li className={styles.item} key={item.id}>
            <span className={styles.itemName}>{item.name}:</span>
            <span className={styles.itemPhone}> {item.number}</span>
            <Button
              name={this.props.nameBtn}
              clickOnBtn={this.removeContactId}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    );
  }
}
