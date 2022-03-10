import './App.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container2 = styled.div `
 height:0.01px;
  width:600px;
  background-color: beige;
  align-items: center;

`;

//Parent-wrapper for nav 
const Wrapper2 = styled.div `
  padding: 200px 100px;
  justify-content: space-between;
  margin-right:80px;
`;

export default function Survey () {
  return (
  <div>
  <Container2>
    <Wrapper2>
    <h1>Take this Survey to get recommended clothes to your style and suiting!</h1>
    <form method="GET" action="Jackets">
    <div>
                    <label for="color">What is your favorite color?<span class="required-field">*</span></label>
                    <input type="text" minlength="3" maxlength="22" id="firstname" name="colorname" placeholder="colorname" required />
                </div>
                <br></br>
               <fieldset>
                <label for="material">Preferred material</label>
                <datalist id="material-list">
                                <option value="cotton">Cotton</option>
                                <option value="polyester">Polyester</option>
                                <option value="veganleather">Vegan Leather</option>
                                <option value="faux fur">Faux fur</option>
                                <option value="nylon">Nylon</option>
                </datalist>
               
                                <label for="brand">Preferred brand</label>
                <datalist id="brand-list">
                                <option value="Zara">Zara</option>
                                <option value="Kohls">Kohls</option>
                                <option value="Ralph Lauren">Ralph Lauren</option>
                                <option value="Gucci">Gucci</option>
                                <option value="Prada">Prada</option>
                                <option value="Macy's">Macy's</option>
                </datalist>
                            
                 <br></br>
                 </fieldset>
     <br></br>
     <br></br>
    <input type="submit" id="submit" name="submit" value="Click here to finish!"/>
        </form>
    </Wrapper2>
    </Container2>
  </div>
        
  )
}