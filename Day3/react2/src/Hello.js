import React, { Component } from 'react';

// function Hello({ color, name, isSepcial }){

//     return(
//         <div style={{ color }}>
//             {isSepcial && <b>*</b>}
//             안녕하세요. {name}님
//         </div>
//     );
// }

class Hello extends Component {
    static defaultProps = {
        name: '무명'
    };
    render(){
        const { color, name, isSepcial } = this.props;
        return(
            <div style={{ color }}>
                {isSepcial && <b>*</b>}
                안녕하세요. {name}님
            </div>
        );
    }
}

// Hello.defaultProps = {
//     name: '무명'
// };

export default Hello;
