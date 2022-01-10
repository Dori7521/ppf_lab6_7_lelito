import React, {Component} from "react";

export default class CInner extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
        console.log('CInner - konstruktor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('CInner - getDerivedStateFromProps()')
        return null
    }

    componentDidMount(){
        console.log('CInner - componentDidMount()')
    }

    render(){
        console.log("CInner - render")
        return(
            <div>
                <h3 className="bgClassInner">Komponent wewnętrzny</h3>
            </div>
        )
    }

    shouldComponentUpdate(){
        console.log('CInner - shouldComponentUpdate()')
        return true
    }

    getSnapshotBeforeUpdate(pprops,pstate){
        console.log("Inner - getSnapshotBeforeUpdate()")
        return null
    }

    componentDidUpdate(){
        console.log('Inner - componentDidUpdate()')
    }

}