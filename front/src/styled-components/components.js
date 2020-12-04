import styled from 'styled-components';

export const FormAddProduct = styled.form`
  display:flex;
  justify-content:center;
  flex-direction:column;
  padding:35px 0;
  width: 90%;
  margin: auto;
  font-family: 'Roboto', 'sans-serif';
  font-weight: 300;
  & input, select {
    height: 2.925rem;
    font-size: .8rem;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid #ced4da;
    background-color: #FFF;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 300;
  }
  .terminos {
    font-size: 10px;
    display: flex;
    align-items: center; 
    justify-content: center;
  }
  & button {
    text-align: center;
    color: #FFF;
    padding: 1rem 0;
    background: #0DB14B;
    border-radius: 5px;
    font-size: 1.3rem;
    border: none;
}
`;

export const StyledCards = styled.div`
  width: 25%;
  height: 400px;
  margin: 5% auto;
  box-sizing:border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  -webkit-box-shadow: 0px 5px 22px 11px rgba(189,189,189,1);
  -moz-box-shadow: 0px 5px 22px 11px rgba(189,189,189,1);
  box-shadow: 0px 5px 22px 11px rgba(189,189,189,1);
  div {
    width: 80%;
    height: 200px;
    display: flex;
    justify-content:center;
  & img {
    width: 30%;
    border-radius: 10px 10px 0px 0px;
    } 
  }
  article {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    & h2 {
      text-align: center;
    }
  }
  a  {
    color: #dba309;
    text-decoration: none;
  }
  a:visited {
    color: #dba309;
  }
`;