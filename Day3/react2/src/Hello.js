import React, { Component } from 'react';

// function Hello({ color, name, isSpecial }) {
//   return (
//     <div style={{ color }}>
//       {isSpecial && <b>*</b>}
//       안녕하세요. {name}님
//     </div>
//   );
// }

class Hello extends Component {
  static defaultProps = {
    name: '무명',
  };

  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요. {name}님
      </div>
    );
  }
}

// Hello.defaultProps = {
//   name: '무명',
// };

export default Hello;
