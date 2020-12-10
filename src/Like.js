import React from 'react'

class Like extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 0,
        show: true,
        min: 0
      };
    }
  
    addLike = () => {
        this.setState(prevState => {
            return {
              likes: prevState.likes + 1
            } 
        });
    }

    removeLike = () => {
      this.setState(prevState => {
        if(prevState.likes > 0) {
          return {
            likes: prevState.likes - 1
          }
        } else {
          return null;
        }
      });
    }
  
    render() {
  
      return ( 
        <div className="likeCounter">
            <button onClick={this.addLike}>+</button>
            <h4>Number of Likes: {this.state.likes}</h4>
            <button onClick = {this.removeLike}>-</button>
        </div>
      );
    }
  }
  
  export default Like