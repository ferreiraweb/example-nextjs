import { styled } from ".";

export const PessoasContainer = styled("div", {
  width: "100%",
  maxWith: "1180px",
  margin: "0 auto",
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignContent: "center",

  h2: {
    fontSize: "3rem",
    color: "$green-500",
  },

  ul: {
    listStyle: "none",

    li: {
      padding: "20px 0",
    },
  },
});
