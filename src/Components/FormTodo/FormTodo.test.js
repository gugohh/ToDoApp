import React from "react";
import { shallow } from "enzyme";
import FormTodo from "./FormTodo";

describe("FormTodo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormTodo />);
    expect(wrapper).toMatchSnapshot();
  });
});
