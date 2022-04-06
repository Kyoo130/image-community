import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { firestore } from "../../shared/firebase";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

// initialState
const initialState = {
  list: [],
};

const initialPost = {
  id: 0,
  user_info: {
    user_name: "Kyoo13",
    user_profile:
      "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2022-04-05 11:27:00",
};

// middleware actions
const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );
        post_list.push(post);
      });
      console.log(post_list);
      dispatch(setPost(post_list));
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  setPost,
  addPost,
  getPostFB,
};

export { actionCreators };
