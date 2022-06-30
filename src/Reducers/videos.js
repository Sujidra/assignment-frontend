// Expenses Reducer

const videosReducerDefaultState = {
    videoData: [

    ],
    pageNumber: 1,
    totalCount: 0
}


export default (state = videosReducerDefaultState, action) => {
    // console.log("videos" + JSON.stringify(state))
    switch (action.type) {
        case 'ADD_VIDEOS':
            return {
                ...state,
                videoData: [...state.videoData, ...action.video],
                totalCount: action.totalCount
            }
        case 'SER_PAGE_NUMBER':
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        default:
            return state;
    }
};
