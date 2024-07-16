import type { ButtonProps as AntdButtonProps } from "antd";

export interface ButtonProps extends Omit<AntdButtonProps, "size"> {
  danger?: boolean;
  iconButton?: boolean;
  outlineDanger?: boolean;
  size?: "s" | "m" | "desktopS";
  square?: boolean;
  transparent?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "tinted" | "outline";
}