const GitUsersData = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_GIT_REPOS":
      let gitUserData = action.payload.reduce((accu,record,i) => {
        accu[action.userName] = (i!==0 ? accu[action.userName] : []);
        let temp = {...record};
        temp.key = temp.id;
        accu[action.userName].push(temp);
        return accu;
      },{...state} || {}
      );

      return {
        ...gitUserData
      }
    default:
      return state;
  }
}

export default GitUsersData;