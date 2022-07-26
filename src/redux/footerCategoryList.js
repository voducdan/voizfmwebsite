import { createSlice } from "@reduxjs/toolkit";

const footerCategoryListSlice = createSlice({
  name: "footerCategoryList",
  initialState: {
    data: {
      podcast: {
        name: 'Podcast',
        data: [],
      },
      audio_book: {
        name: 'Sách nói',
        data: [],
      },
      story_book: {
        name: 'Truyện nói',
        data: [],
      },
      summary_book: {
        name: 'Sách tóm tắt',
        data: [],
      },
      children_book: {
        name: 'Thiếu nhi',
        data: [],
      },
    },
  },
  reducers: {
    setFooterCategoryList: (state, action) => {
      const { podcast, audio_book, story_book, summary_book, children_book } = action.payload;
      state.data = {
        podcast: {
          name: 'Podcast',
          data: [...(podcast || [])],
        },
        audio_book: {
          name: 'Sách nói',
          data: [...(audio_book || [])],
        },
        story_book: {
          name: 'Truyện nói',
          data: [...(story_book || [])],
        },
        summary_book: {
          name: 'Sách tóm tắt',
          data: [...(summary_book || [])],
        },
        children_book: {
          name: 'Thiếu nhi',
          data: [...(children_book || [])],
        },
      };
    },
  },
});

export const { setFooterCategoryList } = footerCategoryListSlice.actions;
export const getFooterCategoryList = (state) => state.footerCategoryList.data;

export default footerCategoryListSlice.reducer;
