import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  span {
    margin-bottom: 4px;
  }
`;

type ButtonProps = {
  id: string;
  email: string;
};

const Button: FC<ButtonProps> = ({ email, id }) => (
  <Wrapper>
    <span>{email}</span>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value={id} />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"
        name="submit"
        alt="Donate with PayPal button"
      />
    </form>
  </Wrapper>
);

export default Button;
