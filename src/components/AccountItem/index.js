import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://lh3.googleusercontent.com/IMUM1tXjNKaUISRxNAdRl4wPpm4pN7IeUCUcuErKMWS87dCYhTuksA5zjQ_Kq0rZBm5K7BP7jn8dLLEtejkZQWsSJDtk8bpJGLDa0QmQhug6eTbloTCQEvg_gPZjYwglvSnxTSfiSG3XeVZf8P4Nbhp4tjFEjObaotTk-Ku7bGHniZSR0C0X8B3jy19xNy_D4eSWv2mgLTlDCa7Pc7KL2OmK6O3Eaw_eY2bG6EQQPXTaZHGlLS6ylxf-lXpq9l_73OtA9VFJrFWwZ-M67HfYJu9BPQJ243fdwatriy1NbOR-jyYxqlc3RlxQkmD-fjKBDhZ6_hBtmMG5h2c4QqZ539KfOBzqj4XmJLwD--7ej9P0UD7J9uLMzfJxdXNjOSC3mYwYNX_42LHJp7uNqOt4cDP-CzGyvv65lMIog8toWXznfodnM4DJRAPW0mRqk9DzmwfGRcRpFSomTPzu5AeFUUKxamUqXv4YOqauxW8yFHGLkVW4aewk6eUJI-cLUrVOurZGVDr6aHjt0fj3cXdjSRMsdRnk98zrbGYUolNzT3sq5ueOP51nR5iFnFLQD0-miCNLyFwaihmvbhUxWR9qj7tPKM0c24YX9RLdwvLI5pSDp4WiKKWXikNOKFZjox6uJrDreqqA4oPAJLTIn-dAZ_88VCdBSXEdBN0oc9UzFZXxsL_715vhgMyXiljknw5JWGUy8rti1E_Ak1Wq2TeyAJ72Lv7SLWB8SJoRwnxOPhozqmrbIKkX8dkzGkgRu-wA6W40amafYM9_fjAR0g4_ETMQZH1X-v1ljyd_=w177-h220-no?authuser=0" alt="" />
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
