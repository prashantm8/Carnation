/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { LIST_DATA } from '../src/Constant';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

jest.useFakeTimers()
const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});


describe('App component', () => {
  it('App: renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('state check', () => {
    const wrapper = shallow(<App data={LIST_DATA}/>);
    expect(wrapper.instance().state.data).toBe(LIST_DATA);
  });
  it('recursion method', async () => {
    const props = createTestProps({});

    const wrapper = shallow(<App data={LIST_DATA} {...props}/>);
    const instance = wrapper.instance();
    expect(instance.state.data).toBe(LIST_DATA);
    instance.recursiveCall(0,[1,2,3,4,5,6,7]);
    expect(instance.state.data).toBe(LIST_DATA);
  });
  it('onPressUp method', () => {
    const wrapper = shallow(<App data={LIST_DATA} up={[]} down={[]}/>);
    const instance = wrapper.instance();
    expect(instance.up).toStrictEqual([]);
    instance.onPressUP({},1);
    expect(instance.up).toStrictEqual([1]);
  });
  it('onPressDown method', () => {
    const wrapper = shallow(<App data={LIST_DATA} up={[]} down={[]}/>);
    const instance = wrapper.instance();
    expect(instance.down).toStrictEqual([]);
    instance.onPressDOWN({},1);
    expect(instance.down).toStrictEqual([1]);
  });
  it('onPressStartRun method', () => {
    const wrapper = shallow(<App data={LIST_DATA} up={[]} down={[]}/>);
    const instance = wrapper.instance();
    instance.onPressStartRun();
  });
  it('renderItem: renders correctly', () => {
    const wrapper = shallow(<App data={LIST_DATA}/>);
    const instance = wrapper.instance();
    const tree = renderer.create(instance.renderItem({index:0,item:{id:1,visiting:false}})).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
