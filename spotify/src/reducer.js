export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQB0w1b0TEy6nHF2sPvBkXG8DvIeoXBDv33gfBitvrEk4N38bFSJGWWbNwTLr856F6Ze5rRQammzQAVMzRciuuzTc_jcVpaH8UZyU1tStnR3Vb93X_YE3ij3GlwXw4GXl7McJ54SCEZF3W6x8QjiAMOT0vz13eBMWdC0k5ri7kapp287',
};

const reducer = (state,action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

            case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };
          
              case "SET_ITEM":
                return {
                  ...state,
                  item: action.item,
                };
                
                case "SET_TOP_ARTISTS":
                    return {
                      ...state,
                      top_artists: action.top_artists,
                    };

                    case "SET_SPOTIFY":
                        return {
                          ...state,
                          spotify: action.spotify,
                        };

        default:
            return state;
    }
};

export default reducer;