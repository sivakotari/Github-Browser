export const getGitRepos = (userName) =>{
	return (dispatch) => {
		let url = `https://api.github.com/users/${userName}/repos`;
    fetch(url)
    .then(result => result.json())
    .then((data) => {
      dispatch({type:"LOAD_GIT_REPOS", userName, payload:data});
    })
    .catch(function(err){
      alert(err);
    });
	}
}