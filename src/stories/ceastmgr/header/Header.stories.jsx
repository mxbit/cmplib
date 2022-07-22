import React from 'react';

import { Header } from './Header';

export default {
  title: 'CEAssetMgr/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  onCreateAccount:() => { console.log("All from stories") }
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
