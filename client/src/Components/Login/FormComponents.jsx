import styled from "styled-components";

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1rem;
`;

export const SignInOptions = styled.div`
  margin-bottom: 10px;
`;

export const SignOption = styled.div`
  text-align: center;
  padding: 8px 0;
  border: 1px solid ${(props) => props.theme.colors.lighter_secondary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;

    &:last-child {
      fill: #4267b2;
    }
  }
`;

export const OrContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const OrLine = styled.div`
  width: 150px;
  height: 1px;
  background: ${(props) => props.theme.colors.lighter_secondary};
`;

export const OrText = styled.h3`
  padding: 0 15px;
  font-size: 1rem;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputHolder = styled.div`
  margin-bottom: 20px;
`;

export const InputPass = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.lighter_secondary};
  padding: 10px 25px;
`;

export const ShowPasswordOrNot = styled.p`
  position: absolute;
  right: 20px;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const Error = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: 0.8rem;
  margin-top: -15px;
  padding: 5px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 4px;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const BottomAction = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ForgotPassWordContainer = styled.div`
  width: 40%;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 0.7rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const AccContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: right;

  @media screen and (max-width: ${(props) => props.theme.devices.small}) {
    width: 100%;
    justify-content: left;
  }
`;

export const AccText = styled.p`
  font-size: 0.7rem;
  margin-right: 5px;
`;

export const AccLink = styled.p`
  font-size: 0.7rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;
