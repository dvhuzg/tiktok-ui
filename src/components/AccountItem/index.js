import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/images";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src={images.avt} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>dvhuzg</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>
        </p>
        <span className={cx("user-name")}>Do Viet Hung</span>
      </div>
    </div>
  );
}

export default AccountItem;
