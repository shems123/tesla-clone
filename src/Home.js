 import React from "react";
import Section from "./Section.js";
import styled from "styled-components";

 function Home(){
    return(
       <Container>
          <Section
               title="Model S"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-s.png"
               leftButtonText="Custom order"
               rightButtonText="Existing inventory"
          />
          <Section
               title="Model Y"
               description="Order Online for Touchless Delivery"
               backgroundImg="Model-Y.webp"
               leftButtonText="Custom order"
               rightButtonText="Existing inventory"
          />
          <Section
               title="Model 3"
               description="Order Online for Touchless Delivery"
               backgroundImg="model-3.jpg"
               leftButtonText="Custom order"
               rightButtonText="Existing inventory"
          />
          <Section
               title="Model X"
               description="Order Online for Touchless Delivery"
               backgroundImg="10732_large.webp"
               leftButtonText="Custom order"
               rightButtonText="Existing inventory"
          />
          <Section
               title="Lowest Cost Solar Panels in America"
               description="Money-back guarantee"
               backgroundImg="hero3-scaled.webp"
               leftButtonText="Order now"
               rightButtonText="Learn more"
          />
           <Section
               title="Solar for New Roofs"
               description="Solar roof Costs Less Than a New Roof Plus Solar Panels"
               backgroundImg="aerial-top.webp"
               leftButtonText="Order now"
               rightButtonText="Learn more"
          />
           <Section
               title="Accesosories"
               description="Solar roof Costs Less Than a New Roof Plus Solar Panels"
               backgroundImg=""
               leftButtonText="Order now"
          />
       </Container>
    );
 }
 export default Home;

 const Container = styled.div`
     height: 100vh;
     z-index: 10;
 `