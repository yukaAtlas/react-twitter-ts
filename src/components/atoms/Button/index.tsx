import { FC } from "react";
import { styled as MuiStyled } from "@mui/material/";
import { default as MuiButton, ButtonProps } from "@mui/material/Button";

const StyledMuiButton = MuiStyled(MuiButton)(({ theme }) => ({
    borderRadius: theme.spacing(3),
}));

interface IButtonProps extends ButtonProps {}

export const Button: FC<IButtonProps> = (props) => {
    const { variant, ...others } = props;
    return (
        <StyledMuiButton variant={variant || "contained"} {...others}>
            {props.children}
        </StyledMuiButton>
    );
};
