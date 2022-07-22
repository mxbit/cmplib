import React from 'react';
import {SimpleCard} from './simplecard';


export default {
    title: 'CEAuthor/SimpleCard',
    component: SimpleCard,
    argTypes:{
        header: 'New Header from there!',
        description:'description!',
    }
  };
  
  const Template = (args) => <SimpleCard {...args} />;
  
  export const Card01 = Template.bind({});
  
  Card01.args = {
    header: 'New Header from there',
    description:'description!!',
    handler: () =>  {
        console.log("Hello there")
    }
  };
  