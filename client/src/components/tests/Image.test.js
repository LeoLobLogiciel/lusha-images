import React from 'react';
import Image from '../Image';
import renderer from 'react-test-renderer'
import { shallow, mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'


configure({adapter: new Adapter()});

const mockProps = {
  image: {
    url: "testUrl",
    id: 1
  }
};

test("Snapshot test", () => {
  const component = renderer.create(
    <Image image={mockProps.image} />
  )
  let tree=component.toJSON()
  expect(tree).toMatchSnapshot()

  const componentShallow = shallow(<Image image={mockProps.image} />)

})
