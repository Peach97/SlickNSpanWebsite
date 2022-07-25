import styled from "styled-components";
import { Link } from "react-scroll";

export const CustomButton = styled(Link)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#fff" : "#43bccd")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "43bccd" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "32px" : "32px")};
  outline: none;
  border: 1px solid #fff;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 200;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#43bccd" : "#fff")};
    color: ${({ dark }) => (dark ? "#43bccd" : "#43bccd")};
  }
`;
