import React from 'react';
import { Assembly } from './Assembly';
import * as  SimpleCardStories from '../ceauthor/simplecard/simplecard.stories' 

export default {
    title: 'CEAuthor/Assembly',
    component: Assembly,
  };

const Template = (args) => <Assembly {...args} />;

export const Card = Template.bind({});
Card.args = {
    header: 'New Header from there',
    description:'description!!',
    handler: () =>  {
        console.log(" --- Override Hello there")
    }
};


