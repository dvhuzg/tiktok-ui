import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  btn_text = false,
  disabled = false,
  round,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    btn_text,
    disabled,
    round,
    [className]:className
  });

  const props = {
    onClick,
    ...passProps,
  };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof key === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
