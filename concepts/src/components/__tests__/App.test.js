import App from "../../App";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapped

beforeEach((() => {
    wrapped = shallow(<App />)
}))

it("shows a comment box", () => {
    expect(wrapped.find(CommentBox).length).toEqual(1)
})


it("shows a comment list", () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})